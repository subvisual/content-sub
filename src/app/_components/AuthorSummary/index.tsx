import React from 'react'

import FeaturedImage from '../FeaturedImage'
import SocialLinks from '../SocialLinks'
import styles from './styles.module.css'
import { Author } from "@/payload-types";

export default function AuthorSummary({ author }) {
  const { name, role, bio, linkedIn, gitHub, medium, x, featuredImage } = author

  // TODO: Convert this to an array with names in collection config
  const socials = [linkedIn, gitHub, medium, x].filter(Boolean)

  return (
    <div className={styles.gridContainer}>
      <div className={styles.authorInfoCard}>
        {featuredImage && <FeaturedImage className={styles.featuredImage} src={featuredImage} />}
        <div className={styles.authorInfo}>
          <h5>{name}</h5>
          <p>{role}</p>
          <SocialLinks socials={socials} />
        </div>
      </div>
      <div className={styles.authorBio}>{bio}</div>
    </div>
  )
}
