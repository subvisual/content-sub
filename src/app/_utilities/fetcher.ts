import type {
  Blogpost,
  CaseStudy,
  PodcastEpisode,
  TalksAndRoundtable,
} from '../../payload/payload-types'
import { GRAPHQL_API_URL } from '../_api/shared'

export interface ContentTypes {
  Blogposts: Blogpost[]
  PodcastEpisodes: PodcastEpisode[]
  CaseStudies: CaseStudy[]
  TalksAndRoundtables: TalksAndRoundtable[]
}

export async function fetcher(args: {
  query: string
  variables?: Record<string, any>
}): Promise<ContentTypes> {
  const { query, variables } = args

  try {
    return await fetch(`${GRAPHQL_API_URL}/api/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: query,
        ...(variables && { variables: variables }),
      }),
    })
      ?.then(res => res.json())
      ?.then(res => {
        const Blogposts = res?.data?.Blogposts?.docs || []
        const PodcastEpisodes = res?.data?.PodcastEpisodes?.docs || []
        const CaseStudies = res?.data?.CaseStudies?.docs || []
        const TalksAndRoundtables = res?.data?.TalksAndRoundtables?.docs || []
        return { Blogposts, PodcastEpisodes, CaseStudies, TalksAndRoundtables }
      })
  } catch (err: unknown) {
    return { Blogposts: [], CaseStudies: [], PodcastEpisodes: [], TalksAndRoundtables: [] }
  }
}
