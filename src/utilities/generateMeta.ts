import type { Metadata } from 'next'

import type { Author, Blogpost, CaseStudy, Podcast, TalksAndRoundtable } from "../payload-types";

import { mergeOpenGraph } from './mergeOpenGraph'

export const generateMeta = async (args: { doc: Blogpost | Podcast | Author | CaseStudy | TalksAndRoundtable}): Promise<Metadata> => {
  const { doc } = args || {}

  const ogImage =
    // @ts-expect-error
    typeof doc?.meta?.image === 'object' &&
    // @ts-expect-error
    doc.meta.image !== null &&
    // @ts-expect-error
    'url' in doc.meta.image &&
    // @ts-expect-error
    // Use this method instead if you are using a cloud storage solution
    `${doc.meta.image.url}`

    // Uncomment the line below and comment the line above if using local storage
    // instead of cloud storage
    // `${process.env.NEXT_PUBLIC_SERVER_URL}${doc.meta.image.url}`

  // @ts-expect-error
  const title = doc?.meta?.title
    // @ts-expect-error
    ? `Inside Subvisual | ${doc?.meta?.title}`
    : 'Inside Subvisual'

  return {
    // @ts-expect-error
    description: doc?.meta?.description,
    openGraph: mergeOpenGraph({
      // @ts-expect-error
      description: doc?.meta?.description || '',
      images: ogImage
        ? [
            {
              url: ogImage,
            },
          ]
        : undefined,
      title,
      url: Array.isArray(doc?.slug) ? doc?.slug.join('/') : '/',
    }),
    title,
  }
}
