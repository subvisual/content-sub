import Link from 'next/link'

import {
  Blogpost,
  CaseStudy,
  Category,
  Podcast,
  TalksAndRoundtable,
} from '@/payload-types'
import { HeadphonesIcon, SpectaclesIcon } from '../../_icons/icons'
import { estimateReadTime } from '../../_utilities/estimateReadTime'
import { formatDateTime } from '../../_utilities/formatDateTime'
import { toKebabCase } from '../../_utilities/toKebabCase'
import ArchiveButton from '../ArchiveButton'
import Authors from '../Authors'
import CategoryPill from '../CategoryPill'
import FeaturedImage from '../FeaturedImage'
import styles from './styles.module.css'

interface ContentSummaryProps {
  contentType: string
  content: Blogpost | Podcast | CaseStudy | TalksAndRoundtable // TODO: Extend to CaseStudy and TalksAndRoundTables once consistency is assured
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
  const readTime = estimateReadTime('herpaderpa')

  return (
    <div className={styles.contentCard}>
      {/*<pre>{JSON.stringify(content,null, 2)}</pre>*/}

      <Link href={`/${toKebabCase(contentType)}/${slug}`}>
        <div className={styles.contentMetaContainer}>
          <div className={styles.imageContainer}>
          {/*  @ts-ignore */}
            {featuredImage && <FeaturedImage src={featuredImage.url} />}
            </div>
          {/*<ArchiveButton collection={archiveMap[contentType]} />*/}
          <h6>{title} </h6>
          <p>{summary}</p>

          {Array.isArray(categories) && categories.length > 0
            ? categories.map((category: Category, i) => <CategoryPill title={category.title} />)
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

          {/*<Authors authors={authors} />*/}
        </div>
      </Link>
    </div>
  )
}
