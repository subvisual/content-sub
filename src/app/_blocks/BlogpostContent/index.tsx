'use client'

import { Blogpost } from '@/payload-types'
import FeaturedImage from '../../_components/FeaturedImage'
import { sanitizeAndAddChapters } from '../../_utilities/sanitizeAndAddChapters'
import styles from './styles.module.css'

export default function BlogpostContent({ post }: { post: Blogpost }) {
  const { summary, featuredImage } = post


  return (
    <div className={styles.container}>
      <FeaturedImage className={styles.featuredImage} src={featuredImage} />
      <div className={styles.summary}>{summary}</div>
    </div>
  )
}
