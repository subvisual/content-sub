import React from "react";
import Link from "next/link";

import { Blogpost, PodcastEpisode } from "../../../payload/payload-types";
import { formatDateTime } from "../../_utilities/formatDateTime";
import { getImage } from "../../_utilities/getImage";
import { toKebabCase } from "../../_utilities/toKebabCase";
import Authors from "../Authors";
import CategoryPill from "../CategoryPill";
import EpisodeFeaturedImage from "../EpisodeFeaturedImage";

interface ContentSummaryProps {
  contentType: string;
  content: Blogpost | PodcastEpisode; // TODO: Extend to CaseStudy and TalksAndRoundTables once consistency is assured
}

import styles from "./styles.module.css";

export default function ContentCard({ contentType, content }: ContentSummaryProps) {
  const { slug, title, summary, featuredImage, categories, publishedAt, authors } = content;

  return (

    <div className={styles.contentCard}>
      <Link href={`/${toKebabCase(contentType)}/${slug}`}>
        <div>
          {/*<EpisodeFeaturedImage src={getImage(featuredImage)} />*/}
          <p style={{ fontSize: "14px", fontWeight: "bold" }}>{contentType}</p>
          <h1 style={{ fontSize: "18px", margin: "10px 0" }}>{title}</h1>
          <p style={{ fontSize: "16px", color: "#555" }}>{summary}</p>
        </div>
        <div>
          {Array.isArray(categories) && categories.length > 0
            ? categories.map((category, i) => <CategoryPill title={category.title} />)
            : null}
        </div>
        <div>
          <div>
            {formatDateTime(publishedAt)} |{" "}
            {contentType === "PodcastEpisodes" ? <span>Duration</span> : <span>Read Time</span>}
          </div>
        </div>
        <Authors authors={authors} />
      </Link>
    </div>

  );
}
