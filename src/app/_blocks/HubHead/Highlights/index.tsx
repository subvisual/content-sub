import styles from "./styles.module.css";
import { formatDateTime } from "@/app/_utilities/formatDateTime";
import { SpectaclesIcon } from "@/app/_icons/icons";
import { estimateReadTime } from "@/app/_utilities/estimateReadTime";
import CategoryPill from "@/app/_components/CategoryPill";
import AuthorPill from "@/app/_components/AuthorPill";

export function Highlights({ content, main }) {

  const {
    title,
    publisedAt,
    categories,
    authors,
  } = content;

  return (
    <div className={`${styles.highlights} ${main ? styles.mainHighlight : styles.secondaryHighlight}`}>
      <p className={styles.overline}> HIGHLIGHTS </p>
      <h6> {title} </h6>
      <div className={styles.metadataContainer}>
        {/* TODO: is this a good approach for multi category items? */}
        {categories.length > 1 ?
          <CategoryPill title={categories[0].title} />
          : categories.map((category, i) => (
            <CategoryPill key={i} title={category.title} />
          ))}

        <span className={styles.publishedDate}>
          {formatDateTime(publisedAt)}
        </span>
        <span className={styles.readTime}>
          <SpectaclesIcon width={32} fill={main ? "var(--soft-white-100)" : "var(--dark-rock-800)"} />
          {estimateReadTime("Placeholder")}
        </span>
      </div>
      <AuthorPill author={authors[0]} />
    </div>

  );
}
