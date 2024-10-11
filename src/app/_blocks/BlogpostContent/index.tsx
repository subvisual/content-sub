"use client";

import { Blogpost } from "@/payload-types";
import FeaturedImage from "../../_components/FeaturedImage";
import styles from "./styles.module.css";
import RichText from "@/components/RichText";

export default function BlogpostContent({ blogpost }) {
  const { summary, featuredImage } = blogpost;
  return (
    <div className={styles.container}>
      <div className={styles.featuredImage}>
        {featuredImage && <FeaturedImage src={featuredImage} />}
      </div>
      <div className={styles.summary}>{summary}</div>
      <RichText content={blogpost.content} />
    </div>
  );
}
