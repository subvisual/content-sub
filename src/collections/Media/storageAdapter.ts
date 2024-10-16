import { GeneratedAdapter } from "@payloadcms/plugin-cloud-storage/types";
import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const owner = process.env.GITHUB_REPO_OWNER;
const repo = process.env.GITHUB_REPO;
const comitter = {
  name: "payload admin dashboard",
  email: "payload@admin.dashboard",
};


export const testAdapt = ({ collection, prefix }): GeneratedAdapter => {
  return {
    name: "Test",
    handleUpload: async (args) => {
      // @ts-ignore
      const buffer = Buffer.from(args.file.buffer, "base64");
      const base64Buffer = buffer.toString("base64");
      await octokit.repos.createOrUpdateFileContents({
        // @ts-ignore
        owner: owner,
        // @ts-ignore
        repo: repo,
        path: `public/media/${args.file.filename}`,
        message: "Uploaded a new file via Octokit",
        content: base64Buffer,
        committer: comitter,
        author: comitter,
      });


    },
    // @ts-ignore
    handleDelete: async (args) => {


      const { data: fileData } = await octokit.rest.repos.getContent({
        // @ts-ignore
        owner: owner,
        // @ts-ignore
        repo: repo,
        path: `public/media/${args.filename}`,
      });


      await octokit.rest.repos.deleteFile({
        // @ts-ignore
        owner: owner,
        // @ts-ignore
        repo: repo,
        // @ts-ignore
        path: `public/media/${args.filename}`,
        // @ts-ignore
        message: `Deleted file via Octokit`,
        // @ts-ignore
        sha: fileData.sha,
      });
    },
    // @ts-ignore
    staticHandler: async (req) => {
    },

  };

};
