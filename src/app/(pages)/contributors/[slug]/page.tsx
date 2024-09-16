"use client"

import React from "react";

import {notFound} from "next/navigation";
import {fetchPodcastEpisode } from "@/app/_api/fetchPodcastEpisode";

export default async function ContributorPage({params: {slug}}) {

  let episode = null;

  try {
    episode = await fetchPodcastEpisode({
      collection: "contributors",
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
      <pre>{JSON.stringify(episode, null, 2)}</pre>
    </div>
  )
}
