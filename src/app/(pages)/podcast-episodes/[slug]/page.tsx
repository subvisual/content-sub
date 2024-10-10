// import { notFound } from 'next/navigation'
//
// import { fetchDoc } from '../../../_api/fetchDoc'
// import EpisodeContent from '../../../_blocks/EpisodeContent'
// import EpisodeHead from '../../../_blocks/EpisodeHead'
// import { RelatedContent } from '../../../_blocks/RelatedContent'
// import { Subscribe } from '../../../_blocks/Subscribe'

export const dynamic = 'force-dynamic'

export default async function PodcastEpisodesPage() {
  // const episode = await fetchDoc({
  //   collection: 'podcast-episodes',
  //   slug,
  // })
  //
  // if (!episode) {
  //   notFound()
  // }
  //
  // const { relatedEpisodes } = episode

  return (
    <div>
     {/* <EpisodeHead episode={episode} />
      <EpisodeContent episode={episode} />
      <RelatedContent relatedContent={relatedEpisodes} />
      <Subscribe />*/}
    </div>
  )
}
