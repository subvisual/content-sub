import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";
import type { Author, Blogpost, CaseStudy, Category, Config, Media, Podcast, TalksAndRoundtable } from "@/payload-types";
import { notFound } from "next/navigation";
import { CollectionSlug, getPayload } from "payload";
import { draftMode } from "next/headers";

interface FetcherArgs {
  collection?: CollectionSlug,
  limit?: number,
  depth?: number,
  draft?: boolean,
  overrideAccess?: boolean,
  query?: any
}

async function fetcher({ collection, limit = 10, depth = 1, draft = false, overrideAccess = false, query }: FetcherArgs) {
  const payload = await getPayloadHMR({ config: configPromise });

  return await payload.find({
    // @ts-ignore
    collection,
    limit,
    depth,
    draft,
    overrideAccess,
    where: query,
  });
}

export async function fetchContentBySlug({ slug, type, depth }: { slug: string, type: CollectionSlug, depth?: number }) {

  if (!slug || !type) {
    throw new Error("Must input slug and/or type.");
  }

  const { isEnabled: draft } = await draftMode();

  const query = { slug: { equals: slug } };

  return await fetcher({
    collection: type,
    draft: draft,
    overrideAccess: draft,
    limit: 1,
    depth: depth,
    query: query,
  }).then(res => {
    if (res.docs.length < 1) {
      notFound();
    }
    return res.docs[0];
  });
}


export async function fetchContentFromAuthorOrCategory({ type, target }: { type: 'author' | 'category', target: Author | Category }) {
  let query = {}

  if (type === "author") {
    query = { authors: { in: target.id } };
  }

  if (type === "category") {
    query = { categories: { in: target.id } };
  }

  const blogposts = await fetcher({
    collection: "blogposts",
    query: query,
  }).then(res => res.docs);

  const podcasts = await fetcher({
    collection: "podcasts",
    query: query,
  }).then(res => res.docs);

  const cases = await fetcher({
    collection: "case-studies",
    query: query,
  }).then(res => res.docs);

  const talks = await fetcher({
    collection: "talks-and-roundtables",
    query: query,
  }).then(res => res.docs);

  return {
    Blogposts: blogposts,
    Podcasts: podcasts,
    CaseStudies: cases,
    TalksAndRoundTables: talks,
  };
}

export async function fetchAllContentByType(type: CollectionSlug) {
  return await fetcher({
    collection: type,
    limit: 30,
    depth: 3,
  }).then(res => res.docs);
}

export async function fetchGlobals(slug: keyof Config["globals"], depth: number = 0) {
  const payload = await getPayloadHMR({ config: configPromise });
  return await payload.findGlobal({
    slug: slug,
    depth: depth,
  });
}

export async function fetchMediaByID(id) {
  const query = { where: { id: { equals: id } } };
  return await fetcher({
    collection: "media",
    query: query,
  }).then(res => {
    return res.docs[0];
  })
    .then((res: Media) => {
      return { filename: res.filename, mimeType: res.mimeType };
    });
}
