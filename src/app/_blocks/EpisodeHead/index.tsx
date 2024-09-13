"use client";

import React, { useEffect, useState } from "react";
import BackButton from "../../_components/BackButton";
import ContentTypePill from "@/app/_components/ContentTypePill";
import { PodcastEpisode } from "@/payload/payload-types";
import { formatDateTime } from "@/app/_utilities/formatDateTime";
import AudioPlayer from "@/app/_components/AudioPlayer";
import EpisodeFeaturedImage from "@/app/_components/EpisodeFeaturedImage";

import { getEpisodeDuration } from "@/app/_utilities/getEpisodeDuration";
import { getAudio } from "@/app/_utilities/getAudio";
import { getImage } from "@/app/_utilities/getImage";

import styles from "./styles.module.css"

export const EpisodeHead: React.FC<{ episode: PodcastEpisode }> = ({ episode }) => {

  const {
    title,
    episodeFile,
    publishedAt,
    featuredImage,
  } = episode;

  // TODO: convert into conditional logic based on ContentType

  // Initial undefined state
  const {
    audioFileSource,
    audioFileType,
  } = getAudio(episodeFile);


  return (
    <div className={styles.container}>
      {/* First Column */}
      <div style={{ flex: 1, marginRight: "20px" }}>
        <div><BackButton /></div>
        <div>
          <ContentTypePill />
          <h5>{title}</h5>
          <h6>episode.podcastName property</h6>
          <h6>{formatDateTime(publishedAt)} ((DurationIcon)) {getEpisodeDuration(audioFileSource)}</h6>
        </div>
        <div>
          {/* TODO Add conditionals later on: render only if it's a podcast episode */}
          <AudioPlayer src={audioFileSource} type={audioFileType} />
        </div>
      </div>

      {/* TODO: Second Column displays EpisodeFeaturedImage if ContentType is podcast */}
      <EpisodeFeaturedImage src={getImage(featuredImage)}/>
    </div>
  );
};

