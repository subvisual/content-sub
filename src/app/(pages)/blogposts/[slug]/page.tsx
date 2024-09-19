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

export default async function BlogpostPage({ params: { slug } }) {
  const blogpost: Blogpost | null = await fetchDoc({
    collection: "blogposts",
    slug,
  });

  if (!blogpost) {
    notFound();
  }

  const { relatedPosts } = blogpost;
  return (
    <div>
      <div>
        {/* Head Block*/}
        <BackButton />
        <PostSummary post={blogpost} />
      </div>
      <div>
        {/* Content Block*/}
        <BlogpostContent post={blogpost} />
      </div>
      <RecommendedContent relatedContent={relatedPosts} />
      <Subscribe />
    </div>
  );
}
