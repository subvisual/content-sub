import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { GRAPHQL_API_URL } from "@/app/_api/shared";
import { PODCAST_EPISODES } from "@/app/_graphql/podcastEpisodes";
import { Config } from "@/payload/payload-types";

export async function fetchPodcastEpisodes(collection: keyof Config["collections"]) {

  if (!collection) throw new Error("Collection not found");

  let token: RequestCookie | undefined;

  // if (draft) {
  //   const { cookies } = await import("next/headers")
  //   token = cookies().get(payloadToken)
  // }

  const doc = await fetch(`${GRAPHQL_API_URL}/api/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token?.value ? { Authorization: `JWT ${token.value}` } : {}),
    },
    cache: "no-store",
    body: JSON.stringify({
      query: PODCAST_EPISODES,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.errors) throw new Error(res?.errors?.[0]?.message ?? "Error");
      return res?.data?.PodcastEpisodes.docs;
    });

  return doc;
}
