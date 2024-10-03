'use client'

import DOMPurify from 'isomorphic-dompurify'

import { Blogpost } from '../../../payload/payload-types'
import EpisodeFeaturedImage from '../../_components/EpisodeFeaturedImage'
import styles from './styles.module.css'

import { getImage } from '@/app/_utilities/getImage'
import { sanitizeAndAddChapters } from "@/app/_utilities/sanitizeAndAddChapters";

export default function BlogpostContent({ post }: { post: Blogpost }) {
  const { summary, content_html, featuredImage } = post
  const sanitizedContent = sanitizeAndAddChapters(content_html)
  const imageSource = getImage(featuredImage)

  return (
    <div className={styles.container}>
      <img className={styles.featuredImage} src={imageSource} />
      <div className={styles.summary}>{summary}</div>
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
    </div>
  )
}
