import { Blogpost } from "@/payload-types";
import { estimateReadTime } from "../../_utilities/estimateReadTime";
import { formatDateTime } from "../../_utilities/formatDateTime";
import ArchiveButton from "../ArchiveButton";
import AuthorPill from "../AuthorPill";
import styles from "./styles.module.css";

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
        <AuthorPill author={post.authors[0]} />
        Social Links
      </div>
    </div>
  );
}
