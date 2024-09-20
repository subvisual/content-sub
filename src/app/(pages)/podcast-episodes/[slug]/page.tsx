import { notFound } from 'next/navigation'

import { fetchDoc } from '../../../_api/fetchDoc'
import EpisodeContent from '../../../_blocks/EpisodeContent'
import EpisodeHead from '../../../_blocks/EpisodeHead'
import { RecommendedContent } from '../../../_blocks/RecommendedContent'
import { Subscribe } from '../../../_blocks/Subscribe'

export default async function PodcastEpisodesPage({ params: { slug } }) {
  let episode = null

  try {
    episode = await fetchDoc({
      collection: 'podcast-episodes',
      slug,
    })
  } catch (err) {}

  if (!episode) {
    notFound()
  }

  const { episodeFile, featuredImage, relatedEpisodes } = episode

  const featuredImageSource = `${process.env.NEXT_PUBLIC_SERVER_URL}/media/${featuredImage.filename}`

  const audioFileSource = `${process.env.NEXT_PUBLIC_SERVER_URL}/media/${episodeFile.filename}`

  return (
    <div>
      <div>
        <EpisodeHead episode={episode} />
        <EpisodeContent episode={episode} />
        <RecommendedContent relatedContent={relatedEpisodes} />
        <Subscribe />
      </div>
    </div>
  )
}
