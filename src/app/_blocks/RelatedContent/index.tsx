import Link from "next/link";

import styles from "./styles.module.css";

import ContentCard from "@/app/_components/ContentCard";

export function RelatedContent({ content }) {
  return (
    <div className={styles.container}>

      {content.related && (
        <>
          <h5>You may also like</h5>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "16px",
            }}
          >
            {content.related.map((contentPiece, i) => (
              <div key={i} className={styles.contentCard}>
                <ContentCard contentType={"Blogposts"} content={contentPiece} />
                <br />
                <Link href={`${contentPiece.slug}`}>{contentPiece.title}</Link>
              </div>
            ))}
          </div>
        </>
      )
      }

    </div>
  );
}
