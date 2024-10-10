// import { notFound } from 'next/navigation'
//
// import { fetchContentFromAuthor } from '../../../_api/fetchContentFromAuthor'
// import { fetchDoc } from '../../../_api/fetchDoc'
// import AuthorContentGrid from '../../../_blocks/AuthorContentGrid'
// import { Subscribe } from '../../../_blocks/Subscribe'
// import AuthorSummary from '../../../_components/AuthorSummary'
// import BackButton from '../../../_components/BackButton'
// import styles from './styles.module.css'

export const dynamic = 'force-dynamic'

export default async function ContributorPage() {
  // // TODO: update fetchDoc to include error handling instead of making it on-page
  // const author = await fetchDoc({ collection: 'authors', slug })
  // const contentFromAuthor = await fetchContentFromAuthor({ authorID: author.id })
  //
  // if (!author) {
  //   notFound()
  // }

  return (
    <div>


      {/*<div className={styles.container}>
        <BackButton className={styles.backButton} />
        <AuthorSummary author={author} />
        <div></div>
      </div>
      <AuthorContentGrid content={contentFromAuthor} />
      <Subscribe />*/}

    </div>
  )
}
