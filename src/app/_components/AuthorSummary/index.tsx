import React from "react";

import FeaturedImage from "../FeaturedImage";
import SocialLinks from "../SocialLinks";
import styles from "./styles.module.css";
import { Author } from "@/payload-types";

export default function AuthorSummary({ author }) {
  const { authorName, role, bio, linkedIn, gitHub, medium, x, featuredImage, socials } = author;

  // TODO: Convert this to an array with names in collection config


  return (
    <div className={styles.gridContainer}>
      <div className={styles.authorInfoCard}>
        {featuredImage &&
          <div className={styles.featuredImage}>
            <FeaturedImage src={featuredImage.url} />
          </div>
        }
        <div className={styles.authorInfo}>
          <h5>{authorName}</h5>
          <p>{role}</p>
          <SocialLinks socials={socials} />
        </div>
      </div>
      <div className={styles.authorBio}>{bio}</div>
    </div>
  );
}
