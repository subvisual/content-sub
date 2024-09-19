import EpisodeFeaturedImage from "@/app/_components/EpisodeFeaturedImage";
import { getImage } from "@/app/_utilities/getImage";
import { Blogpost } from "@/payload/payload-types";
import ContentRenderer from "@/app/_components/ContentRenderer";

export default function BlogpostContent({ post }: { post: Blogpost }) {

  const { summary, content_html, featuredImage } = post;

  console.log(featuredImage);
  return (
    <div>

      <div>{summary}</div>
      <ContentRenderer content_html={content_html} />

    </div>
  );
}
