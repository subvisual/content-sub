import {
  Blogpost,
  CaseStudy,
  PodcastEpisode,
  TalksAndRoundtable,
} from '../../../payload/payload-types'
import ContentCard from '../../_components/ContentCard'
import { calculateTotalArticles } from '../../_utilities/calculateTotalArticles'

interface AuthorContentGridProps {
  content: Blogpost[] | PodcastEpisode[] | CaseStudy[] | TalksAndRoundtable[]
}

export default function AuthorContentGrid({ content }: AuthorContentGridProps) {
  return (
    <div style={{ background: 'white', color: 'black' }}>
      <div style={{ textAlign: 'right' }}>{calculateTotalArticles(content)} Articles</div>
      <div>
        <div style={{ display: 'flex' }}>
          {Object.keys(content).map(key =>
            content[key].map((contentPiece, i) => (
              <div
                key={i}
                style={{
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  margin: '10px',
                  padding: '15px',
                  backgroundColor: '#fff',
                  transition: 'transform 0.2s',
                  cursor: 'pointer',
                }}
              >
                <ContentCard contentType={key} content={contentPiece} />
              </div>
            )),)}
        </div>
      </div>
    </div>
  )
}
