import styles from "@/app/_components/Authors/AuthorPills/styles.module.css";
import FeaturedImage from "@/app/_components/FeaturedImage";
import React from "react";
import { LinkedInIcon, TwitterIcon } from "@/app/_icons/socialIcons";
import Link from "next/link";

export function AuthorPill({ author }) {
  const { name, featuredImage, linkedIn, x } = author;
  return (
    <Link href={`${process.env.NEXT_PUBLIC_SERVER_URL}/authors/${author.slug}`}>
      <div className={styles.authorPill}>
        <div className={styles.authorImage}>
          {featuredImage && <FeaturedImage src={featuredImage.url} />}
        </div>
        {name}
      </div>
    </Link>
  );
}

export function TwoAuthorPill({ authors }) {

  const authorOne = authors[0];
  const authorTwo = authors[1];

  return (
    <div className={styles.twoAuthorPill}>
      <div className={`${styles.authorImage} ${styles.authorOne}`}>
        <FeaturedImage src={authorOne.featuredImage.url} />
      </div>
      <div className={`${styles.authorImage} ${styles.authorTwo}`}>
        <FeaturedImage src={authorTwo.featuredImage.url} />
      </div>
      {`${authorOne.name.split(" ")[0]} & ${authorTwo.name.split(" ")[0]}`}
    </div>
  );
}

export function VariousAuthorsPill({ authors }) {
  const authorOne = authors[0];
  const authorTwo = authors[1];
  const authorThree = authors[2];
  return (
    <div className={styles.twoAuthorPill}>
      <div className={`${styles.authorImage} ${styles.authorOne}`}>
        <FeaturedImage src={authorOne.featuredImage.url} />
      </div>
      <div className={`${styles.authorImage} ${styles.authorTwo}`}>
        <FeaturedImage src={authorTwo.featuredImage.url} />
      </div>
      <div className={`${styles.authorImage} ${styles.authorThree}`}>
        <FeaturedImage src={authorThree.featuredImage.url} />
      </div>
      Various authors
    </div>
  );
}
