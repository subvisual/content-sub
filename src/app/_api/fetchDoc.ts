import type { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'

import type { Config } from '../../payload/payload-types'
import { PAGE } from '../_graphql/pages'
import { POST } from '../_graphql/posts'
import { PROJECT } from '../_graphql/projects'
import { GRAPHQL_API_URL } from './shared'
import { payloadToken } from './token'
import { PODCAST_EPISODE } from "@/app/_graphql/podcastEpisodes";
import { AUTHOR } from "@/app/_graphql/authors";
import { BLOGPOST } from "@/app/_graphql/blogposts";
import { CASE_STUDY } from "@/app/_graphql/caseStudies";
import { TALK } from "@/app/_graphql/talksAndRoundtables";

const queryMap = {
  pages: {
    query: PAGE,
    key: 'Pages',
  },
  posts: {
    query: POST,
    key: 'Posts',
  },
  projects: {
    query: PROJECT,
    key: 'Projects',
  },
  "podcast-episodes": {
    query: PODCAST_EPISODE,
    key: "PodcastEpisodes",
  },
  authors: {
    query: AUTHOR,
    key: "Authors",
  },
  blogposts: {
    query: BLOGPOST,
    key: "Blogposts",
  },
  "case-studies": {
    query: CASE_STUDY,
    key: "CaseStudies",
  },
  "talks-and-roundtables": {
    query: TALK,
    key: "TalksAndRoundtables",
  },
}

export const fetchDoc = async <T>(args: {
  collection: keyof Config['collections']
  slug?: string
  id?: string
  draft?: boolean
}): Promise<T> => {
  const { collection, slug, draft } = args || {}

  if (!queryMap[collection]) throw new Error(`Collection ${collection} not found`)

  let token: RequestCookie | undefined

  if (draft) {
    const { cookies } = await import('next/headers')
    token = cookies().get(payloadToken)
  }

  const doc: T = await fetch(`${GRAPHQL_API_URL}/api/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token?.value && draft ? { Authorization: `JWT ${token.value}` } : {}),
    },
    cache: 'no-store',
    next: { tags: [`${collection}_${slug}`] },
    body: JSON.stringify({
      query: queryMap[collection].query,
      variables: {
        slug,
        draft,
      },
    }),
  })
    ?.then(res => res.json())
    ?.then(res => {
      if (res.errors) throw new Error(res?.errors?.[0]?.message ?? 'Error fetching doc')
      return res?.data?.[queryMap[collection].key]?.docs?.[0]
    })

  return doc
}
