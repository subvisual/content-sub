import React from "react";

import { notFound } from "next/navigation";


import { fetchPodcastEpisode } from "@/app/_api/fetchPodcastEpisode";
import { fetchPodcastEpisodes } from "@/app/_api/fetchPodcastEpisodes";

export default async function PodcastEpisodesPage({ params: { slug } }) {

  let podcast = null;
  try {
    podcast = await fetchPodcastEpisodes();
  } catch (err) {
    console.error(err);
  }

  let episode = null;
  let msg = ""
  try {
    episode = await fetchPodcastEpisode(slug);
  } catch (err) {
    msg = "missed"
    console.error(err);
  }

  if (!episode) {
    notFound()
  }

  return (

    <div>
      <div style={{ backgroundColor: "" }}>
        <h1>Here is the full list of published ones:</h1>
        <h3>Here they are:</h3>
        <pre>{JSON.stringify(podcast, null, 2)}</pre>
        <span></span>
        <h3>On a linked list format:</h3>
        <ul>
          {podcast.map((docs, i) => (
            <li key={i}><a href={docs.slug}>{docs.slug}</a></li>
          ) )}
        </ul>

      </div>
      {/* IGNORE

      <pre>{JSON.stringify(podcast, null, 2)}</pre>
      Podcast Episodes Page

      */}
      <div style={{ backgroundColor: '#403F4C' }}>

        <h1>Here is the one corresponding to the slug</h1>
        <h3>Below the content:</h3>
        <pre>{JSON.stringify(episode, null, 2)}</pre>

      </div>

    </div>

  );
}
