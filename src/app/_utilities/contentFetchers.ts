import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";
import type { Config } from "@/payload-types";

const payload = await getPayloadHMR({ config: configPromise });


export async function fetchContentBySlug({ slug, type }) {
  if (!slug || !type) {
    throw new Error("Must input slug and/or type.");
  }

  try {
    return await payload.find({
      collection: type,
      limit: 1,
      overrideAccess: false,
      draft: false,
      where: { slug: { equals: slug } },
    }).then(res => res.docs[0]);
  } catch (err) {
    throw new Error(err);
  }
};


export async function fetchContentFromAuthor(author) {
  return await payload.find({
    collection: 'podcasts',
    limit: 10,
    where: { authors: { in: author.id  } }
  }).then(res => res.docs).then(res => {return {Blogposts: res}});
}

export async function fetchAllContentByType(type) {

  try {
    return await payload.find({
      collection: type,
      limit: 100,
      overrideAccess: false,
      draft: false,
    })
      .then(res => res.docs);
  } catch (err) {
    throw new Error(err);
  }
}

// export async function fetchStuff(
//   { collection, limit = 100, overrideAccess = false, draft = false, variables }: { collection: string, limit: number, overrideAccess: boolean, draft: boolean, variables: any } {
//     id: string,
//       name: string,
//       title: string,
//     author:
//
// }
// )




export async function fetchGlobals(slug: keyof Config["globals"], depth: number = 0) {

  return await payload.findGlobal({
    slug: slug,
    depth: depth,
  });
}

export async function fetchMediaByID(id) {

  return await payload.find({
    collection: "media",
    limit: 1,
    where: { id: { equals: id } },
  }).then(res => res.docs[0])
    .then(res => {
      return { filename: res.filename, mimeType: res.mimeType };
    })

}
