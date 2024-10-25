import type {
  Blogpost,
  CaseStudy,
  Podcast,
  TalksAndRoundtable,
} from '@/payload-types'

export function calculateTotalArticles(content: {
  Blogposts: Blogpost[]
  PodcastEpisodes: Podcast[]
  CaseStudies: CaseStudy[]
  TalksAndRoundtables: TalksAndRoundtable[]
}): number {
  let contentCount = 0
  for (const type in content) {
    if (content[type].length > 0) {
      contentCount += content[type].length
    }
  }
  return contentCount
}
