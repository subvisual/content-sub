import CategoryPill from "../../../_components/CategoryPill";
import { SpectaclesIcon } from "../../../_icons/icons";
import { estimateReadTime } from "../../../_utilities/estimateReadTime";
import { formatDateTime } from "../../../_utilities/formatDateTime";
import styles from "./styles.module.css";
import { AuthorPill } from '@/app/_components/AuthorPill'
import Link from "next/link";
import ArchiveButton from "@/app/_components/ArchiveButton";

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

  const { title, publishedAt, categories, authors, slug } = content.value;
  const contentType = content.relationTo
  return (
    <>

      <div
        className={`${styles.highlights} ${main ? styles.mainHighlight : styles.secondaryHighlight}`}
      >
        <p className={styles.overline}> HIGHLIGHTS </p>
        <ArchiveButton color={main ? 'var(--soft-white-100)' : 'var(--dark-rock-800)'} collection={contentType}/>
        <Link href={`./${contentType}/${slug}`}>
          <h6> {title} </h6>
        </Link>
        {content === placeholder ? (<h5>Please setup the highlights</h5>) : (
          <>
            <div className={styles.metadataContainer}>

              <span className={styles.categories}>
              {categories && categories.map((category, i) => <CategoryPill key={i} title={category.title} />)}
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
            <AuthorPill authors={authors} />
          </>
        )
        }
      </div>

    </>
  );
}
