import React from 'react'

import { formatDateTime } from '@/app/_utilities/formatDateTime'
import categories from '@/payload/collections/Categories'
import { Blogpost, CaseStudy, PodcastEpisode, TalksAndRoundtable } from "@/payload/payload-types";

interface ContentSummaryProps {
  key: string,
  content: Blogpost | PodcastEpisode
}

export default function ContentSummary({ key, content } : ContentSummaryProps) {
  const { title, summary, categories, publishedAt } = content

  return (
    <div>
      <p style={{ fontSize: '14px', fontWeight: 'bold' }}>{key}</p>
      <h1 style={{ fontSize: '18px', margin: '10px 0' }}>{title}</h1>
      <p style={{ fontSize: '16px', color: '#555' }}>{summary}</p>
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
    </div>
  )
}
