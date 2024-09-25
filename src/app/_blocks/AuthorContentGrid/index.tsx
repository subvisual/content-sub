import {
  Blogpost,
  CaseStudy,
  PodcastEpisode,
  TalksAndRoundtable,
} from "../../../payload/payload-types";
import ContentCard from "../../_components/ContentCard";
import { calculateTotalArticles } from "../../_utilities/calculateTotalArticles";

import styles from "./styles.module.css";

interface AuthorContentGridProps {
  content: Blogpost[] | PodcastEpisode[] | CaseStudy[] | TalksAndRoundtable[];
}

export default function AuthorContentGrid({ content }: AuthorContentGridProps) {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.articleCounter}><b>{calculateTotalArticles(content)}</b> Articles</div>
      <div className={styles.contentGrid}>
        {Object.keys(content).map(key =>
          content[key].map((contentPiece, i) => (
            <div
              key={i}
              className={styles.contentCard}
            >
              <ContentCard contentType={key} content={contentPiece} />
            </div>
          )))}
      </div>

    </div>
  );
}
