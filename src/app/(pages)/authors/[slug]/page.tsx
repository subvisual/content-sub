import { notFound } from 'next/navigation'

import { fetchContentFromAuthor } from '../../../_api/fetchContentFromAuthor'
import { fetchDoc } from '../../../_api/fetchDoc'
import AuthorContentGrid from '../../../_blocks/AuthorContentGrid'
import AuthorSummary from '../../../_components/AuthorSummary'
import BackButton from '../../../_components/BackButton'

export default async function ContributorPage({ params: { slug } }) {
  let author = null
  let contentFromAuthor = null

  // TODO: update fetchDoc to include error handling instead of making it on-page
  try {
    author = await fetchDoc({
      collection: 'authors',
      slug,
    })
  } catch (err) {}

  if (!author) {
    notFound()
  }

  contentFromAuthor = await fetchContentFromAuthor({ authorID: author.id })

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
