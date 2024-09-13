import React from "react";

import { notFound } from "next/navigation";


import { fetchPodcastEpisode } from "@/app/_api/fetchPodcastEpisode";
import { fetchPodcastEpisodes } from "@/app/_api/fetchPodcastEpisodes";
import { typeOf } from "uri-js/dist/esnext/util";

import type { AfterReadHook } from "payload/dist/collections/config/types";


export default async function PodcastEpisodesPage({ params: { slug } }) {

  let podcast = null;
  try {
    podcast = await fetchPodcastEpisodes("podcast-episodes");
  } catch (err) {
    console.error(err);
  }

  let episode = null;
  let msg = "";
  try {
    episode = await fetchPodcastEpisode(slug);
  } catch (err) {
    msg = "missed";
    console.error(err);
  }

  if (!episode) {
    notFound();
  }

  const {
    id,
    title,
    episodeSummary,
    episodeNotes,
    populatedContributors,
  } = episode

  return (

    <div>
      <div style={{ backgroundColor: "" }}>
        <h1>Here is the full list of published ones:</h1>
        <h3>Here they are:</h3>
        {/*<pre>{JSON.stringify(podcast, null, 2)}</pre>*/}
        <span></span>
        <h3>On a linked list format:</h3>
        <ul>
          {podcast.map((docs, i) => (
            <li key={i}>
              <ul>
                <li>The content-type pill: Podcasts</li>
                <li>The slug: <a href={docs.slug}>{docs.slug}</a></li>
                <li>Podcast name: placeholder</li>
                <li>The episode title: {docs.title}</li>
                <li>Published date: {docs.publishedAt}</li>
                <pre>Contributors: {typeof docs.contributors}</pre>
              </ul>
            </li>
          ))}
        </ul>

      </div>
      {/* IGNORE

      <pre>{JSON.stringify(podcast, null, 2)}</pre>
      Podcast Episodes Page

      */}
      <div style={{ backgroundColor: "#403F4C" }}>

        <h1>Here is the one corresponding to the slug</h1>
        <h3>Below the content:</h3>
        <pre>{JSON.stringify(episode, null, 2)}</pre>

      </div>

      <div>

        <h1>Let's try to pull content here!</h1>
        <h3>Episode summary:</h3>
        <p>{episodeSummary}</p>
        <h3>Episode notes:</h3>
        <p>{episodeNotes}</p>
        <h3>Authors:</h3>
        <ul>
          {populatedContributors.map((contributor, i) => (
            <li key={i}>{contributor.name}, {contributor.role}</li>
          ))}
        </ul>


      </div>

    </div>

  );
}
