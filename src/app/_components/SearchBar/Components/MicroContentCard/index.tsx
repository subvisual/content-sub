import Link from "next/link";
import styles from "./styles.module.css";
import FeaturedImage from "@/app/_components/FeaturedImage";
import ArchiveButton from "@/app/_components/ArchiveButton";

export default function MicroContentCard({ article }) {

  const contentType = article["contentType"] || article["relationTo"];
  const { title, slug, featuredImage } = article["content"] || article["value"] || article;


  return (
    <div className={styles.container}>

      {featuredImage && (
        <div className={styles.featuredImage}>
          <Link href={`${contentType.toLowerCase()}/${slug}`}>
            <FeaturedImage src={featuredImage.url} />
          </Link>
        </div>
      )}
      <div className={styles.summary}>
        <ArchiveButton collection={contentType} />
        <p>{title}</p>
        <Link href={`${contentType.toLowerCase()}/${slug}`}><p>Read more...</p></Link>
      </div>
    </div>

  );
}
