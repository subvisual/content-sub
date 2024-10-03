'use client'

import DOMPurify from "isomorphic-dompurify";

import { Blogpost } from "../../../payload/payload-types";
import EpisodeFeaturedImage from "../../_components/EpisodeFeaturedImage";
import { getImage } from "@/app/_utilities/getImage";
import styles from "./styles.module.css";

export default function BlogpostContent({ post }: { post: Blogpost }) {
  const { summary, content_html, featuredImage } = post;

  let sectionCounter = 1

  const sanitizedContent = (
    DOMPurify.sanitize(content_html)
      .replace(/<h[1-6]>/g, () => {
        return `<h5 id="chapter${sectionCounter++}">`
      })
      .replace(/<\/h[1-6]>/g, '</h5>')
      .replace(/%nbsp;/g, " ")
      .replace(/<p>\s*<\/p>/g, "")
  );

  let x = document.getElementById('chapter1')


  const imageSource = getImage(featuredImage);
  console.log(imageSource)

  return (
    <div className={styles.container}>
      <img className={styles.featuredImage} src={imageSource} />
      <div className={styles.summary}>{summary}</div>
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
    </div>
  );
}
