"use client"

import React from "react"
import { fetchPodcastEpisode } from "@/app/_api/fetchPodcastEpisode";
import { notFound } from "next/navigation";

export default async function BlogpostPage ({params: {slug}}) {

  let episode = null;

  try {
    episode = await fetchPodcastEpisode({
      collection: "blogposts",
      slug,
    });
  } catch (err) {
    console.error(err);
  }

  if (!episode) {
    notFound();
  }

  return (
    <div>
      hello, world!
      <pre>{JSON.stringify(episode, null, 2)}</pre>
    </div>
  )
}
