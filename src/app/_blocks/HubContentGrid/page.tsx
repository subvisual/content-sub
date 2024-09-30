'use client'

import { useState } from 'react'

import ContentCard from '@/app/_components/ContentCard'
import ContentNavBar from '@/app/_components/ContentNavBar/ContentNavBar'
import styles from './styles.module.css'
import { filterContent } from "@/app/_utilities/filterContent";

const colorMap = {
  All: 'var(--dark-rock-800)',
  Blogposts: 'var(--sub-blue-600)',
  PodcastEpisodes: 'var(--sub-purple-600)',
  CaseStudies: 'var(--sub-orange-800)',
  TalksAndRoundtables: 'var(--sub-purple-300)',
}

export default function HubContentGrid({ content }) {

  // todo: fix rendering when there is no content

  const [activeButton, setActiveButton] = useState('All')
  content = filterContent({
    articles: content,
    filter: activeButton,
  })

  const handleActiveButtonChange = buttonName => {
    setActiveButton(buttonName)
  }

  return (
    <>
      <ContentNavBar activeButton={activeButton} onActiveButtonChange={handleActiveButtonChange} />
      <div className={styles.contentGridContainer} style={{borderColor: colorMap[activeButton]}}>
        <div className={styles.contentGrid}>
          {content.map((article, i) => (
            <div className={styles.contentCard} key={i}>
              <ContentCard key={i} contentType={article.key} content={article.content} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
