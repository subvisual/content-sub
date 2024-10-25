import ContentCard from "../../_components/ContentCard";
import { calculateTotalArticles } from "../../_utilities/calculateTotalArticles";
import styles from "./styles.module.css";

export default function ContentGrid({ content }) {

  return (
    <div className={styles.gridContainer}>
      <div className={styles.articleCounter}>
        <b>{calculateTotalArticles(content)}</b> Articles
      </div>
      <div className={styles.contentGrid}>
        {Object.keys(content).map(key =>
          content[key].map((contentPiece, i) => (
            <ContentCard contentType={key} content={contentPiece} rounded/>
          )),
        )}
      </div>
    </div>
  );
}
