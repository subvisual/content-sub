import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { GRAPHQL_API_URL } from "@/app/_api/shared";
import { PODCAST_EPISODE } from "@/app/_graphql/podcastEpisodes";
import { Config } from "@/payload/payload-types";

const queryMap = {
  "podcast-episodes": {
    query: PODCAST_EPISODE,
    key: "PodcastEpisodes",
  },
};


export async function fetchPodcastEpisode(args: {
  collection: keyof Config["collections"];
  slug?: string
  id?: string
}) {

  const { collection, slug } = args || {}

  if (!queryMap[collection]) throw new Error(`Collection ${collection} not found`);

  let token: RequestCookie | undefined;

  const doc = await fetch(`${GRAPHQL_API_URL}/api/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token?.value ? { Authorization: `JWT ${token.value}` } : {}),
    },
    cache: "no-store",
    body: JSON.stringify({
      query: queryMap[collection].query,
      variables: { slug },
    }),
  })
    .then(res => res.json())
    .then(res => {
      if (res.errors) throw new Error(res?.errors?.[0]?.message ?? "Error");
      return res?.data?.[queryMap[collection].key]?.docs?.[0];
    });

  return doc;
}
