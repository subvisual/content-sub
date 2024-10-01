import type { Blogpost, CaseStudy, PodcastEpisode, TalksAndRoundtable } from "@/payload/payload-types";

export interface ContentTypeArrays {
  Blogposts: Blogpost[]
  PodcastEpisodes: PodcastEpisode[]
  CaseStudies: CaseStudy[]
  TalksAndRoundtables: TalksAndRoundtable[]
}
