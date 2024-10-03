import { useEffect, useState } from 'react'
import { notFound } from 'next/navigation'

import { Blogpost } from '../../../../payload/payload-types'
import { fetchDoc } from '../../../_api/fetchDoc'
import BlogpostChapters from '../../../_blocks/BlogpostChapters'
import BlogpostContent from '../../../_blocks/BlogpostContent'
import { RelatedContent } from '../../../_blocks/RelatedContent'
import { Subscribe } from '../../../_blocks/Subscribe'
import BackButton from '../../../_components/BackButton'
import ContentCard from '../../../_components/ContentCard'
import PostSummary from '../../../_components/PostSummary'
import Share from '../../../_components/Share'
import styles from './styles.module.css'

import Categories from '@/app/_components/Categories'
import CategoryPill from '@/app/_components/CategoryPill'
import { getChapters, sanitizeAndAddChapters } from '@/app/_utilities/sanitizeAndAddChapters'
import categories from '@/payload/collections/Categories'

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
      <div className={styles.container}>
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

          {/*<div className={styles.recommended}>*/}
          {/*  <h1>Recommended Block</h1>*/}
          {/*  <ContentCard contentType={"Blogpost"} content={blogpost} />*/}
          {/*  <ContentCard contentType={"Blogpost"} content={blogpost} />*/}
          {/*</div>*/}
        </div>
      </div>
      <RelatedContent relatedContent={relatedPosts} />
      <Subscribe />
    </div>
  )
}
