import type {
  Blogpost,
  CaseStudy,
  PodcastEpisode,
  TalksAndRoundtable,
} from '@/payload/payload-types'

export function calculateTotalArticles(content: Blogpost[] | PodcastEpisode[] | CaseStudy[] | TalksAndRoundtable[]): number {
  return Object.values(content).filter(
    innerArray => Array.isArray(innerArray) && innerArray.length > 0,
  ).length
}
