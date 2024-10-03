import Link from 'next/link'

import styles from './styles.module.css'

import ContentCard from '@/app/_components/ContentCard'
export function RelatedContent({ relatedContent }) {
  return (
    <div className={styles.container}>
      <h5>You may also like</h5>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
        }}
      >
        {relatedContent.map((contentPiece, i) => (
          <div key={i} className={styles.contentCard}>
            <ContentCard contentType={'Blogpost'} content={contentPiece} />
            <br />
            <Link href={`${contentPiece.slug}`}>{contentPiece.title}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
