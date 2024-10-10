import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";
import type { Config } from '@/payload-types'

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
    });
  } catch (err) {
    throw new Error(err);
  }
};

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

export async function fetchGlobals(slug: keyof Config['globals']) {
  return await payload.findGlobal({
    slug: slug,
  })
}
