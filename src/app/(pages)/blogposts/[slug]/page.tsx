import { notFound } from "next/navigation";

import { Blogpost } from "../../../../payload/payload-types";
import { fetchDoc } from "../../../_api/fetchDoc";
import BlogpostContent from "../../../_blocks/BlogpostContent";
import { RelatedContent } from "../../../_blocks/RelatedContent";
import { Subscribe } from "../../../_blocks/Subscribe";
import BackButton from "../../../_components/BackButton";
import ContentCard from "../../../_components/ContentCard";
import PostSummary from "../../../_components/PostSummary";

import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import Share from "../../../_components/Share";
import CategoryPill from "@/app/_components/CategoryPill";
import categories from "@/payload/collections/Categories";
import BlogpostChapters from "../../../_blocks/BlogpostChapters";
import Categories from "@/app/_components/Categories";


export default async function BlogpostPage({ params: { slug } }) {
  const blogpost: Blogpost | null = await fetchDoc({
    collection: "blogposts",
    slug,
  });


  // TODO: implement a fetcher for related content to populate related cards

  if (!blogpost) {
    notFound();
  }

  const { categories, relatedPosts } = blogpost;


  return (
    <div>
      <div className={styles.container}>
        {/* Head Block*/}
        <BackButton className={styles.backButton} color={"var(--soft-white-100)"} />
        <PostSummary post={blogpost} />
      </div>
      <div className={styles.contentContainer}>
        {/* Left column: Navigation */}
        <div className={styles.chapters}>
          <BlogpostChapters content={blogpost}/>
        </div>

        {/* Middle column: Content block */}
        <div className={styles.content}>
          <BlogpostContent post={blogpost} />
        </div>

        {/* Right column: Social sharing & recommended */}
        <div className={styles.sharingAndCategories}>
          <Share />
          <Categories categories={categories}/>


          {/*<div className={styles.recommended}>*/}
          {/*  <h1>Recommended Block</h1>*/}
          {/*  <ContentCard contentType={"Blogpost"} content={blogpost} />*/}
          {/*  <ContentCard contentType={"Blogpost"} content={blogpost} />*/}
          {/*</div>*/}
        </div>
      </div>
      <RelatedContent relatedContent={relatedPosts} />
      <Subscribe />
    </div>
  );
}
