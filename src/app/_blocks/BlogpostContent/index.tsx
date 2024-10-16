"use client";

import FeaturedImage from "../../_components/FeaturedImage";
import styles from "./styles.module.css";
import RichText from "@/components/RichText";

export default function BlogpostContent({ blogpost }) {
  const { summary, featuredImage } = blogpost;
  return (
    <div className={styles.container}>
      {featuredImage && (
        <div className={styles.featuredImage}>
         <FeaturedImage src={featuredImage.url} />
      </div>
        )}
      <div className={styles.summary}>{summary}</div>
      <div className={styles.content}>
        <RichText content={blogpost.content} />
      </div>
    </div>
  );
}
