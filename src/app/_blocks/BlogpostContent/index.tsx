'use client'

import { Blogpost } from '../../../payload/payload-types'
import FeaturedImage from '../../_components/FeaturedImage'
import { sanitizeAndAddChapters } from '../../_utilities/sanitizeAndAddChapters'
import styles from './styles.module.css'

export default function BlogpostContent({ post }: { post: Blogpost }) {
  const { summary, content_html, featuredImage } = post
  const sanitizedContent = sanitizeAndAddChapters(content_html)

  return (
    <div className={styles.container}>
      <FeaturedImage className={styles.featuredImage} src={featuredImage} />
      <div className={styles.summary}>{summary}</div>
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
    </div>
  )
}
