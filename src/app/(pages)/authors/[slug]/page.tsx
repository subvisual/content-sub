import { fetchContentFromAuthor } from '@/app/_utilities/contentFetchers'
import AuthorContentGrid from '../../../_blocks/AuthorContentGrid'
import { Subscribe } from '../../../_blocks/Subscribe'
import AuthorSummary from '../../../_components/AuthorSummary'
import BackButton from '../../../_components/BackButton'
import styles from './styles.module.css'

import { fetchContentBySlug } from "@/app/_utilities/contentFetchers";
import { Author } from "@/payload-types";

export const dynamic = 'force-dynamic'

export default async function ContributorPage({ params: paramsPromise }) {
  const { slug } = await paramsPromise
  const author = await fetchContentBySlug({ slug: slug, type: 'authors' })
  const contentFromAuthor = await fetchContentFromAuthor(author)

  return (
    <div>
      <div className={styles.container}>
        <BackButton className={styles.backButton} />
        <AuthorSummary author={author} />
      </div>
      <AuthorContentGrid content={contentFromAuthor} />
      <Subscribe />

    </div>
  )
}
