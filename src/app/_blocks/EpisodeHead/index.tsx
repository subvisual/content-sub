'use client'

import { PodcastEpisode } from '../../../payload/payload-types'
import ArchiveButton from '../../_components/ArchiveButton'
import BackButton from '../../_components/BackButton'
import FeaturedImage from '../../_components/FeaturedImage'
import { HeadphonesIcon } from '../../_icons/icons'
import { formatDateTime } from '../../_utilities/formatDateTime'
import { getAudio } from '../../_utilities/getAudio'
import { useEpisodeDuration } from '../../_utilities/useEpisodeDuration'
import AudioPlayer from './AudioPlayer'
import styles from './styles.module.css'

export default function EpisodeHead({ episode }: { episode: PodcastEpisode }) {
  const { title, episodeFile, publishedAt, featuredImage } = episode
  const { audioFileSource, audioFileType } = getAudio(episodeFile)

  return (
    <div className={styles.container}>
      <BackButton className={styles.backButton} color={'var(--soft-white-100)'} />

      <div className={styles.metadataContainer}>
        {/* Metadata */}
        <div className={styles.metadata}>
          <ArchiveButton collection={'podcast-episodes'} color={'var(--soft-white-100)'} />
          <h5>{title}</h5>
          <h6>episode.podcastName property</h6>
          <p>
            {formatDateTime(publishedAt)}
            <span>
              <HeadphonesIcon width={'14'} height={'14'} color={'var(--soft-white-100)'} />
              {useEpisodeDuration(audioFileSource)}
            </span>
          </p>
        </div>

        {/* Audio player */}
        <div className={styles.audioPlayer}>
          <AudioPlayer className={styles.audioPlayer} src={audioFileSource} type={audioFileType} />
        </div>

        {/* Featured Image */}
        <div className={styles.featuredImageContainer}>
          <FeaturedImage className={styles.featuredImage} src={featuredImage} />
        </div>
      </div>
    </div>
  )
}
