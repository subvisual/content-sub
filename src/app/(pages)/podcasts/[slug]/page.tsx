// import { notFound } from 'next/navigation'
//
// import { fetchDoc } from '../../../_api/fetchDoc'
import EpisodeContent from '../../../_blocks/EpisodeContent'
import EpisodeHead from '../../../_blocks/EpisodeHead'
import { RelatedContent } from '../../../_blocks/RelatedContent'
import { Subscribe } from '../../../_blocks/Subscribe'
import { Header } from '@/app/_components/Header'
import { fetchContentBySlug } from "@/app/_utilities/contentFetchers";

export const dynamic = 'force-dynamic'

const headerStyle = {
  '--dynamic-background': 'var(--sub-purple-400)',
  '--dynamic-color': 'var(--soft-white-100)',
  '--dynamic-width': 'calc(100% - 40px)',
}

export default async function PodcastEpisodesPage({params: paramsPromise}) {
  const { slug } = await paramsPromise

  const episode = await fetchContentBySlug({
    slug: slug,
    type: 'podcasts',
    depth: 3,
  })



  return (
    <div>
      <Header style={headerStyle} />
      <EpisodeHead episode={episode} />
      <EpisodeContent episode={episode} />
      <RelatedContent content={episode} />
      <Subscribe />
    </div>
  )
}
