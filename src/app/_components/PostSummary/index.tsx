import { Blogpost } from "@/payload-types";
import { estimateReadTime } from "../../_utilities/estimateReadTime";
import { formatDateTime } from "../../_utilities/formatDateTime";
import ArchiveButton from "../ArchiveButton";

import styles from "./styles.module.css";
import Authors from '@/app/_components/Authors'
import SocialLinks from "@/app/_components/SocialLinks";

export default function PostSummary({ post }) {
  const { title, publishedAt, content, authors } = post;

  return (
    <div className={styles.gridContainer}>
      {/* Post info */}
      <div className={styles.leftColumn}>
        <ArchiveButton collection="blogposts" color={"var(--soft-white-100)"} />
        <h5>{title}</h5>
        <div className={styles.postMeta}>
          <span>{formatDateTime(publishedAt)}</span>
          <span>{estimateReadTime("Placeholder")}</span>
        </div>
      </div>

      {/* Author info */}
      <div className={styles.authorInfo}>
        <p className={styles.outline}>WRITTEN BY</p>
        <Authors authors={authors} />
        { authors.length === 1 && <SocialLinks socials={authors[0].socials}/>}
      </div>
    </div>
  );
}
