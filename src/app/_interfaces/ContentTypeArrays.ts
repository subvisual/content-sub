import type {
  Blogpost,
  CaseStudy,
  Podcast,
  TalksAndRoundtable,
} from '@/payload-types'

export interface ContentTypeArrays {
  Blogposts: Blogpost[]
  Podcasts: Podcast[]
  CaseStudies: CaseStudy[]
  TalksAndRoundtables: TalksAndRoundtable[]
}
