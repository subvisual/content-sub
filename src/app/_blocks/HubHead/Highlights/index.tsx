import CategoryPill from "../../../_components/CategoryPill";
import { SpectaclesIcon } from "../../../_icons/icons";
import { estimateReadTime } from "../../../_utilities/estimateReadTime";
import { formatDateTime } from "../../../_utilities/formatDateTime";
import styles from "./styles.module.css";
import Authors from "@/app/_components/Authors";
import Link from "next/link";

const placeholder = {
  title: "Placeholder",
  publishedAt: "Placeholder",
  categories: "Placeholder",
  authors: "Placeholder",
};

export async function Highlights({ content, main }) {
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
        {/* TODO: Adapt to other types of content as well */}
        <Link href={`./blogposts/${content.slug}`}>
          <h6> {title} </h6>
        </Link>
        {content === placeholder ? (<h5>Please setup the highlights</h5>) : (
          <>
            <div className={styles.metadataContainer}>

              <span className={styles.categories}>
              {categories.map((category, i) => <CategoryPill key={i} title={category.title} />)}
              </span>


              <span className={styles.readTime}>
                {formatDateTime(publishedAt)}
                <SpectaclesIcon
                  width={"32"}
                  color={main ? "var(--soft-white-100)" : "var(--dark-rock-800)"}
                />
                {estimateReadTime("Placeholder")}
        </span>
            </div>
            <Authors authors={authors} />
          </>
        )
        }
      </div>

    </>
  );
}
