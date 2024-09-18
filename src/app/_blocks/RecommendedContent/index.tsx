import Link from 'next/link'

export function RecommendedContent({ relatedContent }) {
  return (
    <div style={{ backgroundColor: '#F6F6F6', color: '#403F4C', marginTop: '20px' }}>
      <h1>You may also like</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
        }}
      >
        {relatedContent.map((contentPiece, i) => (
          <div key={i} style={{ border: 'black solid 1px', padding: '16px' }}>
            Content card placeholder
            <br />
            <Link href={`${contentPiece.slug}`}>{contentPiece.title}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
