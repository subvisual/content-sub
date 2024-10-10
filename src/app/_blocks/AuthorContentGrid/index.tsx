import {
  Blogpost,
  CaseStudy,
  Podcast,
  TalksAndRoundtable,
} from '@/payload-types'
import ContentCard from '../../_components/ContentCard'
import { calculateTotalArticles } from '../../_utilities/calculateTotalArticles'
import styles from './styles.module.css'

export default function AuthorContentGrid({
  content,
}: {
  content: {
    Blogposts: Blogpost[]
    PodcastEpisodes: Podcast[]
    CaseStudies: CaseStudy[]
    TalksAndRoundtables: TalksAndRoundtable[]
  }
}) {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.articleCounter}>
        <b>{calculateTotalArticles(content)}</b> Articles
      </div>
      <div className={styles.contentGrid}>
        {Object.keys(content).map(key =>
          content[key].map((contentPiece, i) => (
            <div key={i} className={styles.contentCard}>
              <ContentCard contentType={key} content={contentPiece} />
            </div>
          )),
        )}
      </div>
    </div>
  )
}
