// import { notFound } from 'next/navigation'
//
// import { Blogpost } from '../../../../payload/payload-types'
// import { fetchDoc } from '../../../_api/fetchDoc'
import BlogpostChapters from '../../../_blocks/BlogpostChapters'
import BlogpostContent from '../../../_blocks/BlogpostContent'
import { RelatedContent } from '../../../_blocks/RelatedContent'
import { Subscribe } from '../../../_blocks/Subscribe'
import BackButton from "../../../_components/BackButton";
import Categories from "../../../_components/Categories";
import PostSummary from "../../../_components/PostSummary";
import RecommendedPosts from "../../../_components/RecommendedPosts";
import Share from "../../../_components/Share";
// import { getChapters } from '../../../_utilities/sanitizeAndAddChapters'
import styles from "./styles.module.css";


import { fetchContentBySlug } from "@/app/_utilities/contentFetchers";
import categories from "@/collections/Categories";

export default async function BlogpostPage({ params: paramsPromise }) {
  const { slug } = await paramsPromise;
  const blogpost = await fetchContentBySlug({
    slug: slug,
    type: "blogposts",
    depth: 3,
  });

  function getChapters (blogpost) {
    const chapters = []
    blogpost.content.root.children.map(child => {
      if (child.tag) chapters.push(child.children[0].text)
    })
    return chapters
  }


  return (
    <div>


      {<pre>{JSON.stringify(getChapters(blogpost), null, 2)}</pre>}

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
          {blogpost.relatedPosts?.length > 0 && <RecommendedPosts posts={blogpost.relatedPosts} />}
        </div>
      </div>
      {blogpost.relatedPosts?.length > 0 && <RelatedContent relatedContent={blogpost.relatedPosts} />}
      <Subscribe />

    </div>
  );
}
