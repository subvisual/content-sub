"use client";

import { PodcastEpisode } from "../../../payload/payload-types";
import AudioPlayer from "./AudioPlayer";
import BackButton from "../../_components/BackButton";
import ContentTypePill from "../../_components/ContentTypePill";
import EpisodeFeaturedImage from "../../_components/EpisodeFeaturedImage";
import { formatDateTime } from "../../_utilities/formatDateTime";
import { getAudio } from "../../_utilities/getAudio";
import { getImage } from "../../_utilities/getImage";
import { useEpisodeDuration } from "../../_utilities/useEpisodeDuration";

import styles from "./styles.module.css";
import FeaturedImage from "@/app/_components/FeaturedImage";
import ArchiveButton from "@/app/_components/BlogPostArchiveButton";
import { HeadphonesIcon } from "@/app/_icons/icons";

export default function EpisodeHead({ episode }) {
  const { title, episodeFile, publishedAt, featuredImage } = episode;

  // TODO: convert into conditional logic based on ContentType

  // Initial undefined state
  const { audioFileSource, audioFileType } = getAudio(episodeFile);

  return (
    <div className={styles.container}>
      <BackButton className={styles.backButton} color={"var(--soft-white-100)"} />

      <div className={styles.metadataContainer}>
        {/* First Column */}
        <div className={styles.metadata}>
          <ArchiveButton collection={"podcast-episodes"} color={"var(--soft-white-100)"} />
          <h5>{title}</h5>
          <h6>episode.podcastName property</h6>
          <p>
            {formatDateTime(publishedAt)}
            <span>
              <HeadphonesIcon width={"14"} height={"14"} color={"var(--soft-white-100)"} />
              {useEpisodeDuration(audioFileSource)}
            </span>
          </p>


          {/* TODO Add conditionals later on: render only if it's a podcast episode */}
          <AudioPlayer className={styles.audioPlayer} src={audioFileSource} type={audioFileType} />
        </div>


        {/* TODO: Second Column displays EpisodeFeaturedImage if ContentType is podcast */}
        <div className={styles.featuredImageContainer}>
          <FeaturedImage className={styles.featuredImage} src={featuredImage} />
        </div>
      </div>
    </div>
  );
}
