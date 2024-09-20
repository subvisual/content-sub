import { notFound } from 'next/navigation'

import { fetchContentFromAuthor } from '../../../_api/fetchContentFromAuthor'
import { fetchDoc } from '../../../_api/fetchDoc'
import AuthorContentGrid from '../../../_blocks/AuthorContentGrid'
import AuthorSummary from '../../../_components/AuthorSummary'
import BackButton from '../../../_components/BackButton'

export default async function ContributorPage({ params: { slug } }) {
  // TODO: update fetchDoc to include error handling instead of making it on-page
  const author = await fetchDoc({ collection: 'authors', slug })
  const contentFromAuthor = await fetchContentFromAuthor({ authorID: author.id })

  if (!author) {
    notFound()
  }

  return (
    <div>
      <div style={{ background: 'purple' }}>
        <BackButton />
        <AuthorSummary author={author} />
      </div>
      <AuthorContentGrid content={contentFromAuthor} />
    </div>
  )
}
