import React from 'react'

import Authors from '@/app/_components/Authors'
import EpisodeFeaturedImage from '@/app/_components/EpisodeFeaturedImage'
import { formatDateTime } from '@/app/_utilities/formatDateTime'
import { getImage } from '@/app/_utilities/getImage'
import { Blogpost, CaseStudy, PodcastEpisode, TalksAndRoundtable } from '@/payload/payload-types'

interface ContentSummaryProps {
  key: string
  content: Blogpost | PodcastEpisode
}

export default function ContentCard({ key, content }: ContentSummaryProps) {
  const { title, summary, featuredImage, categories, publishedAt, authors } = content

  return (
    <div>
      <div>
        <EpisodeFeaturedImage src={getImage(featuredImage)} />
        <p style={{ fontSize: '14px', fontWeight: 'bold' }}>{key}</p>
        <h1 style={{ fontSize: '18px', margin: '10px 0' }}>{title}</h1>
        <p style={{ fontSize: '16px', color: '#555' }}>{summary}</p>
      </div>
      <div>
        {Array.isArray(categories) && categories.length > 0
          ? categories.map((category, i) => (
              <p key={i} style={{ fontSize: '14px', color: '#007bff' }}>
                {category.title}
              </p>
            ))
          : null}
      </div>
      <div>
        <div>
          {formatDateTime(publishedAt)} |{' '}
          {key === 'PodcastEpisodes' ? <span>Duration</span> : <span>Read Time</span>}
        </div>
      </div>
      <Authors authors={authors} />
    </div>
  )
}
