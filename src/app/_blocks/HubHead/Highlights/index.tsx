import AuthorPill from "../../../_components/AuthorPill";
import CategoryPill from "../../../_components/CategoryPill";
import { SpectaclesIcon } from "../../../_icons/icons";
import { estimateReadTime } from "../../../_utilities/estimateReadTime";
import { formatDateTime } from "../../../_utilities/formatDateTime";
import styles from "./styles.module.css";

const placeholder = {
  title: "Placeholder",
  publishedAt: "Placeholder",
  categories: "Placeholder",
  authors: "Placeholder",
};

export function Highlights({ content, main }) {
  if (!content) {
    content = placeholder;
  }

  const { title, publishedAt, categories, authors } = content;


  return (
    <>

      <div
        className={`${styles.highlights} ${main ? styles.mainHighlight : styles.secondaryHighlight}`}
      >
        <p className={styles.overline}> HIGHLIGHTS </p>
        <h6> {title} </h6>
        {content === placeholder ? (<h5>Please setup the highlights</h5>) : (
          <>
            <div className={styles.metadataContainer}>
              {/* TODO: is this a good approach for multi category items? */}
              {categories.length > 5 ? (
                <CategoryPill title={categories[0].title} />
              ) : (
                categories.map((category, i) => <CategoryPill key={i} title={category.title} />)
              )}

              <span className={styles.publishedDate}>{formatDateTime(publishedAt)}</span>
              <span className={styles.readTime}>
          <SpectaclesIcon
            width={"32"}
            color={main ? "var(--soft-white-100)" : "var(--dark-rock-800)"}
          />
                {estimateReadTime("Placeholder")}
        </span>
            </div>
            <AuthorPill author={authors[0]} />
          </>
        )
        }
      </div>

    </>
  );
}
