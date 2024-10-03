'use client'

import DOMPurify from 'isomorphic-dompurify'

import { Blogpost } from '../../../payload/payload-types'
import EpisodeFeaturedImage from '../../_components/EpisodeFeaturedImage'
import styles from './styles.module.css'

import { getImage } from '@/app/_utilities/getImage'
import { sanitizeAndAddChapters } from "@/app/_utilities/sanitizeAndAddChapters";
import FeaturedImage from "@/app/_components/FeaturedImage";

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
