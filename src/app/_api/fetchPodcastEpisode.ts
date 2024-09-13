import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { GRAPHQL_API_URL } from "@/app/_api/shared";
import { PODCAST_EPISODE } from "@/app/_graphql/podcastepisodes";

export async function fetchPodcastEpisode(slug: string) {

  let token: RequestCookie | undefined;

  const doc = await fetch(`${GRAPHQL_API_URL}/api/graphql`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      ...(token?.value ? { Authorization: `JWT ${token.value}` } : {}),
    },
    cache: 'no-store',
    body: JSON.stringify({
      query: PODCAST_EPISODE,
      variables: { slug },
    }),
  })
  .then(res => res.json())
  .then(res => {
    if (res.errors) throw new Error(res?.errors?.[0]?.message ?? "Error");
    return res?.data?.PodcastEpisodes.docs?.[0];
  });

  return doc;
}
