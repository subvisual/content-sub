import Link from "next/link";
import styles from "./styles.module.css";
import FeaturedImage from "@/app/_components/FeaturedImage";

export default function MicroContentCard({ article }) {

  const { contentType, content } = article;
  const { title, slug, featuredImage } = content;


  return (
    <div className={styles.container}>

      {featuredImage && (
        <div className={styles.featuredImage}>
          <FeaturedImage src={featuredImage.url} />
        </div>
      )}
      <div className={styles.summary}>
        <h6>{contentType}</h6>
        <p>{title}</p>
        <Link href={`${contentType.toLowerCase()}/${slug}`}><p>Read more...</p></Link>
      </div>
    </div>

  );
}
