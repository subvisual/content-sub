"use client"

import React from "react";

import { notFound } from "next/navigation";
import { fetchPodcastEpisode } from "@/app/_api/fetchPodcastEpisode";
import { formatDateTime } from "@/app/_utilities/formatDateTime";
import { EpisodeHead } from "@/app/_components/EpisodeHead";

export default async function PodcastEpisodesPage({ params: { slug } }) {

  let episode = null;

  try {
    episode = await fetchPodcastEpisode({
      collection: "podcast-episodes",
      slug,
    });
  } catch (err) {
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
    contributors,
    category,
    populatedContributors,
    episodeFile,
    publishedAt,
    featuredImage,
    relatedEpisodes,
    spotify,
    apple,
  } = episode;

  const featuredImageSource = `${process.env.NEXT_PUBLIC_SERVER_URL}/media/${featuredImage.filename}`;

  const audioFileSource = `${process.env.NEXT_PUBLIC_SERVER_URL}/media/${episodeFile.filename}`
  // const audio = new Audio(audioFileSource);
  // audio.addEventListener("loadedmetadata", () => {console.log(audio.duration)})

  return (

    <div>
      <div>
        <EpisodeHead episode={episode} />
        <div style={{ backgroundColor: "#773BFF" }}>
          <h1>EpisodeHead block goes here</h1>
          <div>
            <div>
              <h3> BackButton Component linking to home filtering for the same contenttype</h3>
              <h6>Podcasts</h6>
              <h2>{title}</h2>
              <h6>episode.podcastName property -> To be added</h6>
            </div>
            <div>
              <h6>Date: {formatDateTime(publishedAt)} | DurationIcon </h6>
            </div>
            <div>
              <h2>PlayerComponent</h2>
            </div>
          </div>
          <div>
            <h3>ImageBlock Component</h3>
            <img style={{ height: 294, width: 294 }} src={featuredImageSource} alt="Image description" />
          </div>
        </div>


        <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
          {/* ListenOn Column */}
          <div style={{ backgroundColor: "white", color: "#403F4C", flex: "1" }}>
            <div style={{ backgroundColor: "white" }}>
              <div>
                <h1>ListenOn goes here</h1>
                <span>Listen on:</span>
                <p>SpotifyIcon linking to <a href={spotify} target="_blank" rel="noopener noreferrer">Spotify</a></p>
                <p>AppleIcon linking to <a href={apple} target="_blank" rel="noopener noreferrer">Apple Podcasts</a></p>
              </div>
            </div>
          </div>

          {/* EpisodeContent Column */}
          <div style={{ backgroundColor: "white", color: "#403F4C", flex: "2" }}>
            <h1>EpisodeContent block goes here</h1>
            <h3>Episode Summary</h3>
            <span>{episodeSummary}</span>
            <h3>Episode Notes</h3>
            <span>{episodeNotes}</span>
          </div>

          {/* Share/Category Column */}
          <div style={{ backgroundColor: "#F6F6F6", color: "#403F4C", flex: "1" }}>
            <div>
              <h1>Share block goes here</h1>
              <p>SocialMedia block with links</p>
            </div>
            <div>
              <h1>Category block</h1>
              <p>A CategoryPill per category: {category.map(cat => cat.title).join(" | ")}</p>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: "#F6F6F6", color: "#403F4C", marginTop: "20px" }}>
          <h1>RecomendedBlock goes here</h1>
          <h3>Other ContentTypes you might like</h3>
          <p>One block per relatedEpisodes</p>
          <ul>
            {relatedEpisodes.map((episode, i) => (
              <li key={i}><a href={episode.slug}>{episode.title}</a></li>
            ))}
          </ul>
        </div>


        <div style={{ backgroundColor: "#F6F6F6", color: "#403F4C", marginTop: "20px" }}>
          <h1>RecomendedBlock goes here</h1>
          <h3>Other ContentTypes you might like</h3>
          <p>One block per relatedEpisodes</p>
          <ul>
            {relatedEpisodes.map((episode, i) => (
              <li key={i}><a href={episode.slug}>{episode.title}</a></li>
            ))}
          </ul>
        </div>

        <div style={{ backgroundColor: "white", color: "#403F4C" }}>
          <div style={{ backgroundColor: "#EFE5FF" }}>
            <h1>SubscribeBlock goes here</h1>
            <h3>Subscribe to Subvisual Inspo</h3>
            <input placeholder={"Your email"}></input>
            <button>Subscribe</button>
          </div>
        </div>

      </div>
    <pre>{JSON.stringify(episode, null, 2)}</pre>
    </div>

  );
}
