import { fetchContentFromAuthor } from '@/app/_utilities/contentFetchers'
import AuthorContentGrid from '../../../_blocks/AuthorContentGrid'
import { Subscribe } from '../../../_blocks/Subscribe'
import AuthorSummary from '../../../_components/AuthorSummary'
import BackButton from '../../../_components/BackButton'
import styles from './styles.module.css'

import { Header } from "../../../_components/Header";
import { fetchContentBySlug } from "@/app/_utilities/contentFetchers";
import { Author } from "@/payload-types";

export const dynamic = 'force-dynamic'

const headerStyle = {
  backgroundColor: 'var(--sub-purple-50)',
  color: 'var(--dark-rock-800)'
}

export default async function ContributorPage({ params: paramsPromise }) {
  const { slug } = await paramsPromise
  const author = await fetchContentBySlug({ slug: slug, type: 'authors' })
  const contentFromAuthor = await fetchContentFromAuthor(author)

  return (
    <div>
      <Header style={headerStyle}/>
      <div className={styles.container}>
        <BackButton className={styles.backButton} />
        <AuthorSummary author={author} />
      </div>
      <AuthorContentGrid content={contentFromAuthor} />
      <Subscribe />

    </div>
  )
}
