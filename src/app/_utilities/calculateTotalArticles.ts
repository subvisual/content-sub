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
  return Object.values(content).filter(
    innerArray => Array.isArray(innerArray) && innerArray.length > 0,
  ).length
}
