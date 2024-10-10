import type {
  Blogpost,
  CaseStudy,
  Podcast,
  TalksAndRoundtable,
} from '@/payload-types'

export interface ContentTypeArrays {
  Blogposts: Blogpost[]
  PodcastEpisodes: Podcast[]
  CaseStudies: CaseStudy[]
  TalksAndRoundtables: TalksAndRoundtable[]
}
