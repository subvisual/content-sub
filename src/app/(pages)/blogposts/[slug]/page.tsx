import { notFound } from 'next/navigation'

import { Blogpost } from '../../../../payload/payload-types'
import { fetchDoc } from '../../../_api/fetchDoc'
import BlogpostContent from '../../../_blocks/Blogpost'
import { RecommendedContent } from '../../../_blocks/RecommendedContent'
import { Subscribe } from '../../../_blocks/Subscribe'
import BackButton from '../../../_components/BackButton'
import ContentCard from '../../../_components/ContentCard'
import PostSummary from '../../../_components/PostSummary'

export default async function BlogpostPage({ params: { slug } }) {
  const blogpost: Blogpost | null = await fetchDoc({
    collection: 'blogposts',
    slug,
  })

  // TODO: implement a fetcher for related content to populate related cards

  if (!blogpost) {
    notFound()
  }

  const { relatedPosts } = blogpost
  return (
    <div>
      <div style={{ background: 'purple' }}>
        {/* Head Block*/}
        <BackButton />
        <PostSummary post={blogpost} />
      </div>
      <div style={{ display: 'flex' }}>
        {/* Left column: Navigation */}
        <div
          style={{
            background: 'white',
            color: 'black',
            flex: '1',
            padding: '10px',
            borderRight: '1px solid black',
          }}
        >
          <h1>Table of contents block</h1>
        </div>

        {/* Middle column: Content block */}
        <div style={{ background: 'white', color: 'black', flex: '2', padding: '10px' }}>
          <BlogpostContent post={blogpost} />
        </div>

        {/* Right column: Social sharing & recommended */}
        <div
          style={{
            background: 'white',
            color: 'black',
            flex: '1',
            padding: '10px',
            borderLeft: '1px solid black',
          }}
        >
          <div>
            <h1>Share block goes here</h1>
            <p>SocialMedia block with links</p>
          </div>
          <div>
            <h1>Category block</h1>
          </div>
          <div>
            <h1>Recommended Block</h1>
            <ContentCard contentType={'Blogpost'} content={blogpost} />
            <ContentCard contentType={'Blogpost'} content={blogpost} />
          </div>
        </div>
      </div>
      <RecommendedContent relatedContent={relatedPosts} />
      <Subscribe />
    </div>
  )
}
