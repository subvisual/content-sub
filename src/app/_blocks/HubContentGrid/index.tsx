'use client'

import { useState } from 'react'

import ContentCard from '../../_components/ContentCard'
import { ContentTypeArrays } from '../../_interfaces/ContentTypeArrays'
import { filterArticles } from '../../_utilities/filterArticles'
import ContentNavBar from './NavBar'
import styles from './styles.module.css'

const colorMap = {
  All: 'var(--dark-rock-800)',
  Blogposts: 'var(--sub-blue-600)',
  PodcastEpisodes: 'var(--sub-purple-600)',
  CaseStudies: 'var(--sub-orange-800)',
  TalksAndRoundtables: 'var(--sub-purple-300)',
}

interface HubContentGridProps {
  articles: ContentTypeArrays
}

export default function HubContentGrid({ articles }: HubContentGridProps) {
  // todo: fix rendering when there is no content

  const [activeButton, setActiveButton] = useState<keyof ContentTypeArrays | 'All'>('All')

  const handleActiveButtonChange = (buttonName: keyof ContentTypeArrays) => {
    setActiveButton(buttonName)
  }

  const filteredArticles = filterArticles({
    articles: articles,
    filter: activeButton,
  })

  return (
    <>
      {/* ToDo: add conditional management of border-top-right-radius based on dropdown toggle */}
      <ContentNavBar activeButton={activeButton} onActiveButtonChange={handleActiveButtonChange} />
      <div
        className={styles.contentGridContainer}
        style={{ '--dynamic-color': colorMap[activeButton] }}
      >
        <div className={styles.contentGrid}>
          {filteredArticles.map((article, i) => (
            <div className={styles.contentCard} key={i}>
              <ContentCard
                key={article.content.id}
                contentType={article.contentType}
                content={article.content}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
