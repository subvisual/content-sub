import DOMPurify from "isomorphic-dompurify";

import { Blogpost } from "../../../payload/payload-types";
import EpisodeFeaturedImage from "../../_components/EpisodeFeaturedImage";
import { getImage } from "@/app/_utilities/getImage";
import styles from "./styles.module.css";

export default function BlogpostContent({ post }: { post: Blogpost }) {
  const { summary, content_html, featuredImage } = post;
  const sanitizedContent = (
    DOMPurify.sanitize(content_html)
      .replace(/%nbsp;/g, " ")
      .replace(/<p>\s*<\/p>/g, "")
  );

  const imageSource = getImage(featuredImage);
  console.log(imageSource)

  return (
    <div className={styles.container}>
      <img className={styles.featuredImage} src={imageSource} />
      <div className={styles.summary}>{summary}</div>
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
    </div>
  );
}
