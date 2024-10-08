import React from 'react'

import { PodcastEpisode } from '../../../payload/payload-types'
import styles from './styles.module.css'

import Contributors from '@/app/_blocks/EpisodeContent/Contributors'
import ListenOn from '@/app/_blocks/EpisodeContent/ListenOn'
import RSSFeed from '@/app/_blocks/EpisodeContent/RSSFeed'
import AuthorPill from '@/app/_components/AuthorPill'
import Categories from '@/app/_components/Categories'
import Share from '@/app/_components/Share'

export default function EpisodeContent({ episode }: { episode: PodcastEpisode }) {
  const { authors, spotify, apple, summary, notes, categories } = episode

  return (
    <div className={styles.container}>
      {/* ListenOn & Authors Column */}
      <div className={styles.listenOnAndAuthors}>
        <ListenOn className={styles.listenOn} spotify={spotify} apple={apple} />
        <Contributors className={styles.contributors} authors={authors} />
      </div>

      {/* EpisodeContent Column */}
      <div className={styles.content}>
        <p>Episode Summary</p>
        <span>{summary}</span>
        <p>Episode Notes</p>
        <span>{notes}</span>
      </div>

      {/* Share/Category Column */}
      <div className={styles.sharingAndCategories}>
        <hr />
        <Share />
        <Categories categories={categories} />
        <RSSFeed className={styles.RSSFeed} />
      </div>
    </div>
  )
}
