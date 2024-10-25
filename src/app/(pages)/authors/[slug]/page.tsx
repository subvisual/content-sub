import { fetchContentFromAuthorOrCategory } from '@/app/_utilities/contentFetchers'
import AuthorContentGrid from '../../../_blocks/AuthorContentGrid'
import { Subscribe } from '../../../_blocks/Subscribe'
import AuthorSummary from '../../../_components/AuthorSummary'
import BackButton from '../../../_components/BackButton'
import styles from './styles.module.css'

import { Header } from "../../../_components/Header";
import { fetchContentBySlug } from "@/app/_utilities/contentFetchers";
import { Author } from "@/payload-types";
import { Metadata } from "next";
import { generateMeta } from "@/utilities/generateMeta";

export const dynamic = 'force-dynamic'

const headerStyle = {
  '--dynamic-background': 'var(--sub-purple-50)',
  '--dynamic-color': 'var(--dark-rock-800)',
  '--dynamic-width': 'calc(100% - 40px)',
}

export default async function ContributorPage({ params: paramsPromise }) {
  const { slug } = await paramsPromise
  const author = await fetchContentBySlug({ slug: slug, type: 'authors' })

  // Given payload typing structure an error is expected as we're passing multiple possible types
  // to a function that only accepts 2 (Authors | Categories).
  // @ts-expect-error
  const contentFromAuthor = await fetchContentFromAuthorOrCategory({ type: 'authors', target: author })

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

export async function generateMetadata({ params: paramsPromise}): Promise<Metadata> {
  const { slug } = await paramsPromise
  const author = await fetchContentBySlug({
    slug: slug,
    type: "authors",
  })
  // @ts-ignore
  return generateMeta({doc: author})

}
