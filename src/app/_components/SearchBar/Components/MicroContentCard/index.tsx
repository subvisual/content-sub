import Link from "next/link";
import styles from "./styles.module.css";
import FeaturedImage from "@/app/_components/FeaturedImage";
import ArchiveButton from "@/app/_components/ArchiveButton";
import { toKebabCase } from "@/app/_utilities/toKebabCase";

export default function MicroContentCard({ article }) {

  const contentType = article["contentType"] || article["relationTo"];
  const { title, slug, featuredImage } = article["content"] || article["value"] || article;
  const collection = toKebabCase(contentType);


  return (
    <div className={styles.container}>

      {featuredImage && (
        <div className={styles.featuredImage}>
          <Link href={`${collection}/${slug}`}>
            <FeaturedImage src={featuredImage.url} />
          </Link>
        </div>
      )}
      <div className={styles.summary}>
        <ArchiveButton collection={contentType} />
        <Link href={`${collection}/${slug}`}><p>Read more...</p></Link>
      </div>
    </div>

  );
}
