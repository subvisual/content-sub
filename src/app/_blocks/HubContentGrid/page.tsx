'use client'

import { useState } from 'react'

import ContentCard from '../../_components/ContentCard'
import ContentNavBar from '../../_components/ContentNavBar/ContentNavBar'
import { filterArticles } from '../../_utilities/filterArticles'
import styles from './styles.module.css'

import { ContentTypes } from '../../_interfaces/ContentTypes'

const colorMap = {
  All: 'var(--dark-rock-800)',
  Blogposts: 'var(--sub-blue-600)',
  PodcastEpisodes: 'var(--sub-purple-600)',
  CaseStudies: 'var(--sub-orange-800)',
  TalksAndRoundtables: 'var(--sub-purple-300)',
}

interface HubContentGridProps {
  articles: ContentTypes
}

/* 
content = [{
  type: 'blogpost,
  ...
},
{
  type: 'podcast,
  ...
}]

content.filter(item => item.type === filter)
*/

export default function HubContentGrid({ articles }: HubContentGridProps) {
  // todo: fix rendering when there is no content

  const [activeButton, setActiveButton] = useState<keyof ContentTypes | 'All'>('All')
  const filteredArticles = filterArticles({
    articles: articles,
    filter: activeButton,
  })

  const handleActiveButtonChange = buttonName => {
    setActiveButton(buttonName)
  }

  console.log(filteredArticles)

  return (
    <>
      <ContentNavBar activeButton={activeButton} onActiveButtonChange={handleActiveButtonChange} />
      <div className={styles.contentGridContainer} style={{ borderColor: colorMap[activeButton] }}>
        <div className={styles.contentGrid}>
          {filteredArticles.content.map((article, i) => (
            <div className={styles.contentCard} key={i}>
              <ContentCard
                key={article.id}
                contentType={filteredArticles.contentType}
                content={article}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
