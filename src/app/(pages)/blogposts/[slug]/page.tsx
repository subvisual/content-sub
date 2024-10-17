
import BlogpostChapters from "../../../_blocks/BlogpostChapters";
import BlogpostContent from "../../../_blocks/BlogpostContent";
import { RelatedContent } from "../../../_blocks/RelatedContent";
import { Subscribe } from "../../../_blocks/Subscribe";
import BackButton from "../../../_components/BackButton";
import Categories from "../../../_components/Categories";
import PostSummary from "../../../_components/PostSummary";
import RecommendedPosts from "../../../_components/RecommendedPosts";
import Share from "../../../_components/Share";
import styles from "./styles.module.css";


import { fetchContentBySlug } from "@/app/_utilities/contentFetchers";
import { Blogpost } from "@/payload-types";
import { Header } from "@/app/_components/Header";
import { Metadata } from "next";

const headerStyle = {
  '--dynamic-background': 'var(--sub-purple-400)',
  '--dynamic-color': 'var(--soft-white-100)',
  '--dynamic-width': 'calc(100% - 40px)',
}

export default async function BlogpostPage({ params: paramsPromise }) {
  const { slug } = await paramsPromise;
  // @ts-ignore
  const blogpost : Blogpost = await fetchContentBySlug({
    slug: slug,
    type: "blogposts",
    depth: 3,
  });



  return (
    <div>
      <Header style={headerStyle}/>
      <div className={styles.headContainer}>
        <BackButton className={styles.backButton} color={"var(--soft-white-100)"} />
        <PostSummary post={blogpost} />
      </div>

      <div className={styles.contentContainer}>
        {/*   Left column: Navigation*/}
        <BlogpostChapters />

        {/*   Middle column: Content block*/}
        <BlogpostContent blogpost={blogpost} />

        <div className={styles.sharingAndCategories}>
          <Share />
          <Categories categories={blogpost.categories} />

          {// @ts-ignore
            blogpost.relatedPosts?.length > 0 && <RecommendedPosts posts={blogpost.relatedPosts} />
          }
        </div>
      </div>
      {// @ts-ignore
        blogpost.related?.length > 0 && <RelatedContent content={blogpost} />
      }
      <Subscribe />

    </div>
  );
}

export async function generateMetadata({ params: paramsPromise}): Promise<Metadata> {
  const { slug } = await paramsPromise
  const blogpost = await fetchContentBySlug({
    slug: slug,
    type: "blogposts",
  })

  return {
    // @ts-ignore
    title: `Subvisual | ${blogpost.title}`
  }
}
