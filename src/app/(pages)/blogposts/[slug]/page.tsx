import { notFound } from 'next/navigation'

import { Blogpost } from '../../../../payload/payload-types'
import { fetchDoc } from '../../../_api/fetchDoc'
import BlogpostChapters from '../../../_blocks/BlogpostChapters'
import BlogpostContent from '../../../_blocks/BlogpostContent'
import { RelatedContent } from '../../../_blocks/RelatedContent'
import { Subscribe } from '../../../_blocks/Subscribe'
import BackButton from '../../../_components/BackButton'
import Categories from '../../../_components/Categories'
import PostSummary from '../../../_components/PostSummary'
import RecommendedPosts from '../../../_components/RecommendedPosts'
import Share from '../../../_components/Share'
import { getChapters } from '../../../_utilities/sanitizeAndAddChapters'
import styles from './styles.module.css'


export default async function BlogpostPage({ params: { slug } }) {
  const blogpost: Blogpost | null = await fetchDoc({
    collection: 'blogposts',
    slug,
  })

  // TODO: implement a fetcher for related content to populate related cards
  if (!blogpost) {
    notFound()
  }

  // instead of destructuring post multiple times, destructure just once here?
  const { content_html, categories, relatedPosts } = blogpost
  const chapters = getChapters(content_html)

  return (
    <div>
      <div className={styles.headContainer}>
        {/* Head Block*/}
        <BackButton className={styles.backButton} color={'var(--soft-white-100)'} />
        <PostSummary post={blogpost} />
      </div>
      <div className={styles.contentContainer}>
        {/* Left column: Navigation */}
        <BlogpostChapters chapters={chapters} />

        {/* Middle column: Content block */}
        <BlogpostContent post={blogpost} />

        {/* Right column: Social sharing & recommended */}
        <div className={styles.sharingAndCategories}>
          <Share />
          <Categories categories={categories} />
          <RecommendedPosts posts={relatedPosts} />
        </div>
      </div>
      <RelatedContent relatedContent={relatedPosts} />
      <Subscribe />
    </div>
  )
}
