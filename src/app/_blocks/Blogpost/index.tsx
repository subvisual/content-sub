import EpisodeFeaturedImage from "@/app/_components/EpisodeFeaturedImage";
import { Blogpost } from "@/payload/payload-types";
import DOMPurify from "isomorphic-dompurify";

export default function BlogpostContent({ post }: { post: Blogpost }) {

  const { summary, content_html, featuredImage } = post;
  const sanitizedContent = DOMPurify.sanitize(content_html);

  return (
    <div>
      <EpisodeFeaturedImage src={featuredImage} />
      <div>{summary}</div>
      <div dangerouslySetInnerHTML={{__html: sanitizedContent}}/>

    </div>
  );
}
