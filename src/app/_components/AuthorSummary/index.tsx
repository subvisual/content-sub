import React from 'react'

import FeaturedImage from '../FeaturedImage'
import SocialLinks from '../SocialLinks'
import { Author } from '../../../payload/payload-types'

export default function AuthorSummary({ author }: { author: Author }) {
  const { name, role, bio, linkedIn, gitHub, medium, x, featuredImage } = author

  // TODO: Convert this to an array with names in collection config
  const socials: string[] = [linkedIn, gitHub, medium, x].filter(Boolean)

  return (
    <div style={{ display: 'flex' }}>
      {/* Left column - Name, role and socials*/}
      <div style={{ display: 'flex', alignItems: 'center', flex: '1' }}>
        <FeaturedImage src={featuredImage} />
        <div style={{ marginLeft: '10px' }}>
          <h5 style={{ margin: 0 }}>{name}</h5>
          <h6 style={{ margin: 0, fontWeight: 'normal' }}>{role}</h6>
          <SocialLinks socials={socials} />
        </div>
      </div>

      {/* Right column - Bio */}
      <div style={{ marginLeft: 'auto', flex: '1' }}>{bio}</div>
    </div>
  )
}
