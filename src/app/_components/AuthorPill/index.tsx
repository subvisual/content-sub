import { getImage } from '@/app/_utilities/getImage'
import styles from "./styles.module.css";

export default function AuthorPill({ author }) {

  const imageSource = getImage(author.featuredImage)

  return (
    <div className={styles.authorPill}>
      <img className={styles.authorImage} src={imageSource} />
      {author.name}
    </div>
  )
}

