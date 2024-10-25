import Link from "next/link";

import {
  Blogpost,
  CaseStudy,
  Category,
  Podcast,
  TalksAndRoundtable,
} from "@/payload-types";
import { HeadphonesIcon, SpectaclesIcon } from "../../_icons/icons";
import { estimateReadTime } from "../../_utilities/estimateReadTime";
import { formatDateTime } from "../../_utilities/formatDateTime";
import { toKebabCase } from "../../_utilities/toKebabCase";
import ArchiveButton from "../ArchiveButton";

import CategoryPill from "../CategoryPill";
import FeaturedImage from "../FeaturedImage";
import styles from "./styles.module.css";
import { AuthorPill } from "@/app/_components/AuthorPill";

interface ContentSummaryProps {
  contentType: string;
  content: Blogpost | Podcast | CaseStudy | TalksAndRoundtable;
  rounded: boolean;
}

const archiveMap = {
  Blogposts: "blogposts",
  Podcasts: "podcasts",
  CaseStudies: "case-studies",
  TalksAndRoundtables: "talks-and-roundtables",
};

export default function ContentCard({ contentType, content, rounded }: ContentSummaryProps) {
  const { slug, title, summary, featuredImage, categories, publishedAt, authors } = content;
  const borderStyle = {
    "--dynamic-border": rounded ? "45px" : "",
  };

  // Given Payload type structure an error is expected as content_html only exists in Blogposts
  // @ts-expect-error
  const readTime = contentType === 'Blogposts' ? estimateReadTime(content.content_html) : ''

  return (
    // @ts-ignore
    <div className={styles.contentCard} style={borderStyle}>
      <div className={styles.contentMetaContainer}>
        <Link href={`/${toKebabCase(contentType)}/${slug}`}>
          {featuredImage && (
            <div className={styles.imageContainer}>
              {/*  @ts-ignore */}
              <FeaturedImage src={featuredImage.url} />
            </div>
          )}
          <ArchiveButton collection={archiveMap[contentType]} />

          <h6>{title} </h6>

          <p>{summary}</p>
        </Link>

        {Array.isArray(categories) && categories.length > 0
          ? categories.map((category: Category, i) => <CategoryPill title={category.title} />)
          : null}

        <div className={styles.dateAndDuration}>
          {formatDateTime(publishedAt)}
          {contentType === "Podcasts" && (
            <span>
                <HeadphonesIcon width={"20"} /> 1h
              </span>
          )}
          {contentType === "Blogposts" && (
            <span>
                <SpectaclesIcon width={"20"} />
              {readTime}
              </span>
          )}
        </div>
        <AuthorPill authors={authors} />
      </div>

    </div>
  );
}
