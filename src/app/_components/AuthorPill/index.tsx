import styles from './styles.module.css';
import FeaturedImage from "@/app/_components/FeaturedImage";
import React from "react";
import { LinkedInIcon, TwitterIcon } from "@/app/_icons/socialIcons";
import Link from "next/link";


export function AuthorPill({ authors }) {

  if (authors.length === 1) {

    const author = Array.isArray(authors) ? authors[0] : authors
    const { name, slug, featuredImage } = author;
    return (
      <Link href={`${process.env.NEXT_PUBLIC_SERVER_URL}/authors/${slug}`}>
        <div className={styles.authorPill}>
          <div className={styles.authorImage}>
            {featuredImage && <FeaturedImage radius={'50%'} src={featuredImage.url} />}
          </div>
          {name}
        </div>
      </Link>
    );
  }

  if (authors.length === 2) {
    const authorOne = authors[0];
    const authorTwo = authors[1];

    return (
      <div className={styles.twoAuthorPill}>
        <div className={`${styles.authorImage} ${styles.authorOne}`}>
          <FeaturedImage radius={'50%'} src={authorOne.featuredImage.url} />
        </div>
        <div className={`${styles.authorImage} ${styles.authorTwo}`}>
          <FeaturedImage radius={'50%'} src={authorTwo.featuredImage.url} />
        </div>
        {`${authorOne.name.split(" ")[0]} & ${authorTwo.name.split(" ")[0]}`}
      </div>
    );

  }

  if (authors.length > 2) {
    const authorOne = authors[0];
    const authorTwo = authors[1];
    const authorThree = authors[2];
    return (
      <div className={styles.twoAuthorPill}>
        <div className={`${styles.authorImage} ${styles.authorOne}`}>
          <FeaturedImage radius={'50%'} src={authorOne.featuredImage.url} />
        </div>
        <div className={`${styles.authorImage} ${styles.authorTwo}`}>
          <FeaturedImage radius={'50%'} src={authorTwo.featuredImage.url} />
        </div>
        <div className={`${styles.authorImage} ${styles.authorThree}`}>
          <FeaturedImage radius={'50%'} src={authorThree.featuredImage.url} />
        </div>
        Various authors
      </div>
    );
  }
}
