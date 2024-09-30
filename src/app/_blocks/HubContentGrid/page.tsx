'use client'

import { useState } from 'react'

import ContentCard from '@/app/_components/ContentCard'
import ContentNavBar from '@/app/_components/ContentNavBar/ContentNavBar'
import styles from './styles.module.css'

const colorMap = {
  all: 'var(--dark-rock-800)',
  blogposts: 'var(--sub-blue-600)',
  podcasts: 'var(--sub-purple-600)',
  caseStudies: 'var(--sub-orange-800)',
  talks: 'var(--sub-purple-300)',
}

export default function HubContentGrid({ content }) {
  const [activeButton, setActiveButton] = useState('all')

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
