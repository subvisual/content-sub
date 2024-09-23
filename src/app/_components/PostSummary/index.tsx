import { Blogpost } from '../../../payload/payload-types'
import { estimateReadTime } from '../../_utilities/estimateReadTime'
import { formatDateTime } from '../../_utilities/formatDateTime'
import AuthorPill from '../AuthorPill'
import ArchiveButton from '../BlogPostArchiveButton'

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
        <AuthorPill author={post.authors[0]} />
      </div>
    </div>
  )
}
