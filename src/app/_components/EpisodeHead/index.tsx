"use client";

import React from "react";
import BackButton from "../BackButton";
import ContentTypePill from "@/app/_components/ContentTypePill";
import { PodcastEpisode } from "@/payload/payload-types";
import { formatDateTime } from "@/app/_utilities/formatDateTime";
import AudioPlayer from "@/app/_components/AudioPlayer";
import EpisodeFeaturedImage from "@/app/_components/EpisodeFeaturedImage";





export const EpisodeHead: React.FC<{ episode: PodcastEpisode }> = ({ episode }) => {

  // TODO: convert into conditional logic based on ContentType
  const audioFileSource = `${process.env.NEXT_PUBLIC_SERVER_URL}/media/${episode.episodeFile.filename}`;
  const audioFileType = episode.episodeFile.mimeType
  const featuredImageSource = `${process.env.NEXT_PUBLIC_SERVER_URL}/media/${episode.featuredImage.filename}`;

  return (
    <div style={{ display: 'flex', backgroundColor: "#773BFF", position: "relative", padding: '20px' }}>
      {/* First Column */}
      <div style={{ flex: 1, marginRight: '20px' }}>
        <div><BackButton /></div>
        <div>
          <ContentTypePill />
          <h5>{episode.title}</h5>
          <h6>{episode.podcastName} property</h6>
          <h6>Date: {formatDateTime(episode.publishedAt)} | episodeDuration property</h6>
        </div>
        <div>
          {/* TODO Add conditionals later on: render only if it's a podcast episode */}
          <AudioPlayer src={audioFileSource} type={audioFileType} />
        </div>
      </div>
      {/* TODO: Second Column displays EpisodeFeaturedImage if ContentType is podcast */}

      <EpisodeFeaturedImage src={featuredImageSource}/>
    </div>
  );
};

