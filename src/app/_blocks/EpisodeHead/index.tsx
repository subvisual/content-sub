'use client'

import BackButton from '../../_components/BackButton'
import { formatDateTime } from '../../_utilities/formatDateTime'
import { getAudio } from '../../_utilities/getAudio'
import { useEpisodeDuration } from '../../_utilities/useEpisodeDuration'
import AudioPlayer from './AudioPlayer'
import styles from './styles.module.css'

import ArchiveButton from '@/app/_components/ArchiveButton'
import FeaturedImage from '@/app/_components/FeaturedImage'
import { HeadphonesIcon } from '@/app/_icons/icons'

export default function EpisodeHead({ episode }) {
  const { title, episodeFile, publishedAt, featuredImage } = episode

  // TODO: convert into conditional logic based on ContentType

  // Initial undefined state
  // const { audioFileSource, audioFileType } = getAudio(episodeFile)

  return (
    <div className={styles.container}>
      {/*{<pre>{JSON.stringify(episode.episodeFile, null, 2)}</pre>}*/}
      <BackButton className={styles.backButton} color={'var(--soft-white-100)'} />

      <div className={styles.metadataContainer}>
        {/* First Column */}
        <div className={styles.metadata}>
          <ArchiveButton collection={'podcast-episodes'} color={'var(--soft-white-100)'} />
          <h5>{title}</h5>
          <h6>episode.podcastName property</h6>
          <p>
            {formatDateTime(publishedAt)}
            <span>
              <HeadphonesIcon width={'14'} height={'14'} color={'var(--soft-white-100)'} />
              {/*{useEpisodeDuration(audioFileSource)}*/}
            </span>
          </p>
        </div>
        {/* TODO Add conditionals later on: render only if it's a podcast episode */}
        <div className={styles.audioPlayer}>
          {/*// @ts-ignore*/}
          <AudioPlayer src={episode.episodeFile.url} type={episode.episodeFile.mimeType} />
        </div>

        {/* TODO: Second Column displays EpisodeFeaturedImage if ContentType is podcast */}
        <div className={styles.featuredImage}>
          {featuredImage && <FeaturedImage className={styles.featuredImage} src={featuredImage.url} />}
        </div>
      </div>
    </div>
  )
}
