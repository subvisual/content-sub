import { notFound } from "next/navigation";
import { fetchDoc } from "../../../_api/fetchDoc";
import BackButton from "@/app/_components/BackButton";
import EpisodeFeaturedImage from "@/app/_components/EpisodeFeaturedImage";
import PostSummary from "@/app/_components/PostSummary";

import { getImage } from "@/app/_utilities/getImage";
import { Blogpost } from "@/payload/payload-types";

import BlogpostContent from "@/app/_blocks/Blogpost";
import { Subscribe } from "@/app/_blocks/Subscribe";
import { RecommendedContent } from "@/app/_blocks/RecommendedContent";
import Categories from "@/payload/collections/Categories";
import CategoryPill from "@/app/_components/CategoryPill";
import ContentCard from "@/app/_components/ContentCard";

export default async function BlogpostPage({ params: { slug } }) {
  const blogpost: Blogpost | null = await fetchDoc({
    collection: "blogposts",
    slug,
  });

  if (!blogpost) {
    notFound();
  }
  console.log(blogpost.content_html);
  const { relatedPosts } = blogpost;
  return (
    <div>
      <div style={{ background: "purple" }}>
        {/* Head Block*/}
        <BackButton />
        <PostSummary post={blogpost} />
      </div>
      <div style={{ display: "flex" }}>
        {/* Left column: Navigation */}
        <div style={{ background: "white", color: "black", flex: "1", padding: "10px", borderRight: "1px solid black" }}>
          <h1>Table of contents block</h1>
        </div>

        {/* Middle column: Content block */}
        <div style={{ background: "white", color: "black", flex: "2", padding: "10px" }}>
          <BlogpostContent post={blogpost} />
        </div>

        {/* Right column: Social sharing & recommended */}
        <div style={{ background: "white", color: "black", flex: "1", padding: "10px", borderLeft: "1px solid black" }}>
          <div>
            <h1>Share block goes here</h1>
            <p>SocialMedia block with links</p>
          </div>
          <div>
            <h1>Category block</h1>
          </div>
          <div>
            <h1>Recommended Block</h1>
            <ContentCard contentType={'Blogpost'} content={blogpost}/>
            <ContentCard contentType={'Blogpost'} content={blogpost}/>
          </div>
        </div>
      </div>
      <RecommendedContent relatedContent={relatedPosts} />
      <Subscribe />
    </div>
  );
}
