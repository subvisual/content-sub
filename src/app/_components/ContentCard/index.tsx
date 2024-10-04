
import Link from 'next/link'

import { Blogpost, PodcastEpisode } from '../../../payload/payload-types'
import { formatDateTime } from '../../_utilities/formatDateTime'

import { toKebabCase } from '../../_utilities/toKebabCase'
import Authors from '../Authors'
import CategoryPill from '../CategoryPill'

import styles from './styles.module.css'

import ArchiveButton from '../ArchiveButton'
import FeaturedImage from '../FeaturedImage'
import { HeadphonesIcon, SpectaclesIcon } from '../../_icons/icons'
import { estimateReadTime } from '../../_utilities/estimateReadTime'


interface ContentSummaryProps {
  contentType: string
  content: Blogpost | PodcastEpisode // TODO: Extend to CaseStudy and TalksAndRoundTables once consistency is assured
}

const archiveMap = {
  Blogposts: 'blogposts',
  PodcastEpisodes: 'podcast-episodes',
  CaseStudies: 'case-studies',
  TalksAndRoundtables: 'talks-and-roundtables',
}

export default function ContentCard({ contentType, content }: ContentSummaryProps) {
  const { slug, title, summary, featuredImage, categories, publishedAt, authors } = content

  // todo: convert to a collection item property
  const readTime = estimateReadTime(summary)

  return (
    <div className={styles.contentCard}>
      <Link href={`/${toKebabCase(contentType)}/${slug}`}>
        <div className={styles.contentMetaContainer}>
          <FeaturedImage src={featuredImage} />
          <ArchiveButton collection={archiveMap[contentType]} />
          <h6>{title}</h6>
          <p>{summary}</p>

          {Array.isArray(categories) && categories.length > 0
            ? categories.map((category, i) => <CategoryPill title={category.title} />)
            : null}

          <div className={styles.dateAndDuration}>
            {formatDateTime(publishedAt)}
            {contentType === 'PodcastEpisodes' ? (
              <span>
                <HeadphonesIcon width={'20'} /> 1h
              </span>
            ) : (
              <span>
                <SpectaclesIcon width={'20'} />
                {readTime}
              </span>
            )}
          </div>

          <Authors authors={authors} />
        </div>
      </Link>
    </div>
  )
}
