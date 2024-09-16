import { webpackBundler } from "@payloadcms/bundler-webpack";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { payloadCloud } from "@payloadcms/plugin-cloud";
import nestedDocs from "@payloadcms/plugin-nested-docs";
import redirects from "@payloadcms/plugin-redirects";
import seo from "@payloadcms/plugin-seo";
import type { GenerateTitle } from "@payloadcms/plugin-seo/types";
import { slateEditor } from "@payloadcms/richtext-slate";
import dotenv from "dotenv";
import path from "path";
import { buildConfig } from "payload/config";

// Collections go here
import Categories from "./collections/Categories";
import { Media } from "./collections/Media";
import { Pages } from "./collections/Pages";
import { Authors } from "./collections/Authors";
import Users from "./collections/Users";
import { PodcastEpisodes } from "./collections/PodcastEpisodes";
import { BlogPosts } from "./collections/BlogPosts";
import { CaseStudies } from "./collections/CaseStudies";
import { TalksAndRoundtables } from "./collections/TalksAndRoundtables";

import BeforeDashboard from "./components/BeforeDashboard";
import BeforeLogin from "./components/BeforeLogin";
import { seed } from "./endpoints/seed";
import { Footer } from "./globals/Footer";
import { Header } from "./globals/Header";
import { Settings } from "./globals/Settings";

const generateTitle: GenerateTitle = () => {
  return "My Website";
};

dotenv.config({
  path: path.resolve(__dirname, "../../.env"),
});

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
    components: {
      // The `BeforeLogin` component renders a message that you see while logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below and the import `BeforeLogin` statement on line 15.
      beforeLogin: [BeforeLogin],
      // The `BeforeDashboard` component renders the 'welcome' block that you see after logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below and the import `BeforeDashboard` statement on line 15.
      beforeDashboard: [BeforeDashboard],
    },
    webpack: config => ({
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          dotenv: path.resolve(__dirname, "./dotenv.js"),
          [path.resolve(__dirname, "./endpoints/seed")]: path.resolve(
            __dirname,
            "./emptyModuleMock.js",
          ),
        },
      },
    }),
  },
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [
    Pages,
    Media,
    Categories,
    Users,
    Authors,
    PodcastEpisodes,
    BlogPosts,
    TalksAndRoundtables,
    CaseStudies,
  ],
  globals: [Settings, Header, Footer],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  cors: [process.env.PAYLOAD_PUBLIC_SERVER_URL || ""].filter(Boolean),
  csrf: [process.env.PAYLOAD_PUBLIC_SERVER_URL || ""].filter(Boolean),
  endpoints: [
    // The seed endpoint is used to populate the database with some example data
    // You should delete this endpoint before deploying your site to production
    {
      path: "/seed",
      method: "get",
      handler: seed,
    },
  ],
});
