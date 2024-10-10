import { notFound } from 'next/navigation'

import { fetchContentFromAuthor } from '@/app/_utilities/contentFetchers'
import { fetchDoc } from '../../../_api/fetchDoc'
import AuthorContentGrid from '../../../_blocks/AuthorContentGrid'
import { Subscribe } from '../../../_blocks/Subscribe'
import AuthorSummary from '../../../_components/AuthorSummary'
import BackButton from '../../../_components/BackButton'
import styles from './styles.module.css'

import { fetchContentBySlug } from "@/app/_utilities/contentFetchers";

export const dynamic = 'force-dynamic'

export default async function ContributorPage({ params: { slug } }) {

  const author = await fetchContentBySlug({ slug: slug, type: "authors" })
  const contentFromAuthor = await fetchContentFromAuthor(author)

  return (
    <div>
      <div className={styles.container}>
        <BackButton className={styles.backButton} />
        <AuthorSummary author={author} />
        <div></div>
      </div>
      <AuthorContentGrid content={contentFromAuthor} />
      <Subscribe />

    </div>
  )
}
