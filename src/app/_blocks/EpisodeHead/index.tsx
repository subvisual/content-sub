'use client'

import { PodcastEpisode } from '../../../payload/payload-types'
import AudioPlayer from '../../_components//AudioPlayer'
import BackButton from '../../_components/BackButton'
import ContentTypePill from '../../_components/ContentTypePill'
import EpisodeFeaturedImage from '../../_components/EpisodeFeaturedImage'
import { formatDateTime } from '../../_utilities/formatDateTime'
import { getAudio } from '../../_utilities/getAudio'
import { useEpisodeDuration } from '../../_utilities/useEpisodeDuration'
import { getImage } from '../../_utilities/getImage'

export const EpisodeHead: React.FC<{ episode: PodcastEpisode }> = ({ episode }) => {
  const { title, episodeFile, publishedAt, featuredImage } = episode

  // TODO: convert into conditional logic based on ContentType

  // Initial undefined state
  const { audioFileSource, audioFileType } = getAudio(episodeFile)

  return (
    <div
      style={{ display: 'flex', backgroundColor: '#773BFF', position: 'relative', padding: '20px' }}
    >
      {/* First Column */}
      <div style={{ flex: 1, marginRight: '20px' }}>
        <div>
          <BackButton />
        </div>
        <div>
          <ContentTypePill />
          <h5>{title}</h5>
          <h6>episode.podcastName property</h6>
          <h6>
            {formatDateTime(publishedAt)} ((DurationIcon)) {useEpisodeDuration(audioFileSource)}
          </h6>
        </div>
        <div>
          {/* TODO Add conditionals later on: render only if it's a podcast episode */}
          <AudioPlayer src={audioFileSource} type={audioFileType} />
        </div>
      </div>

      {/* TODO: Second Column displays EpisodeFeaturedImage if ContentType is podcast */}
      <EpisodeFeaturedImage src={getImage(featuredImage)} />
    </div>
  )
}
