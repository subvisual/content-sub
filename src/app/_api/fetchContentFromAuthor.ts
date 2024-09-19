import { CONTENT_FROM_AUTHOR } from '../_graphql/contentFromAuthor'
import { GRAPHQL_API_URL } from './shared'

import type {
  Blogpost,
  CaseStudy,
  PodcastEpisode,
  TalksAndRoundtable,
} from '@/payload/payload-types'

export async function fetchContentFromAuthor({ authorID }: { authorID: string }): Promise<{
  Blogposts: Blogpost[]
  PodcastEpisodes: PodcastEpisode[]
  CaseStudies: CaseStudy[]
  TalksAndRoundtables: TalksAndRoundtable[]
}> {
  try {
    return await fetch(`${GRAPHQL_API_URL}/api/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: CONTENT_FROM_AUTHOR,
        variables: { authorID: authorID },
      }),
    })
      ?.then(res => res.json())
      ?.then(res => {
        if (res.errors) throw new Error(res?.errors?.[0]?.message ?? 'Error fetching content.')

        const Blogposts = res?.data?.Blogposts?.docs || []
        const PodcastEpisodes = res?.data?.PodcastEpisodes?.docs || []
        const CaseStudies = res?.data?.CaseStudies?.docs || []
        const TalksAndRoundtables = res?.data?.TalksAndRoundtables?.docs || []

        return { Blogposts, PodcastEpisodes, CaseStudies, TalksAndRoundtables }
      })
  } catch (err: unknown) {
    return { Blogposts: [], PodcastEpisodes: [], CaseStudies: [], TalksAndRoundtables: [] }
  }
}
