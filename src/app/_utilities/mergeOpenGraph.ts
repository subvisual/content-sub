import type { Metadata } from 'next'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  siteName: 'Subvisual Content Hub',
  title: 'Subvisual Content Hub',
  description: 'The place where you can find and peruse all content produced by Subvisual.',
  images: [
    {
      url: 'https://raw.githubusercontent.com/subvisual/content-sub/refs/heads/main/public/media/subhub-opengraph-card.png',
    },
  ],
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
