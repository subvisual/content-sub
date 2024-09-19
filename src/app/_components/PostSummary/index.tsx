import React from 'react'

import ArchiveButton from '@/app/_components/BlogPostArchiveButton'
import { estimateReadTime } from '@/app/_utilities/estimateReadTime'
import { formatDateTime } from '@/app/_utilities/formatDateTime'
import { Blogpost } from '@/payload/payload-types'

export default function PostSummary({ post }: { post: Blogpost }) {
  const { title, publishedAt, content, authors } = post

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {/* Left column */}
      <div style={{ flex: 1 }}>
        <ArchiveButton collection="blogposts" />
        <h5>{title}</h5>
        <div>
          {formatDateTime(publishedAt)} | {estimateReadTime('Placeholder')}
        </div>
      </div>

      {/* Right column */}
      <div style={{ flex: 1, textAlign: 'right' }}>
        <p style={{ fontSize: 20 }}>WRITTEN BY</p>
        <p>(AuthorPill with SocialLinks)</p>
      </div>
    </div>
  )
}
