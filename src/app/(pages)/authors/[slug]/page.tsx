import React from "react";
import { notFound } from "next/navigation";

import { fetchContentFromAuthor } from "../../../_api/fetchContentFromAuthor";
import { fetchDoc } from "../../../_api/fetchDoc";

import AuthorPill from "@/app/_components/AuthorPill";
import BackButton from "@/app/_components/BackButton";
import { formatDateTime } from "@/app/_utilities/formatDateTime";
import { getImage } from "@/app/_utilities/getImage";
import { useEpisodeDuration } from "@/app/_utilities/useEpisodeDuration";
import categories from "@/payload/collections/Categories";
import Authors from "@/app/_components/Authors";
import EpisodeFeaturedImage from "@/app/_components/EpisodeFeaturedImage";
import ContentCard from "../../../_components/ContentCard";
import FeaturedImage from "@/app/_components/FeaturedImage";
import AuthorSummary from "@/app/_components/AuthorSummary";
import AuthorContentGrid from "@/app/_blocks/AuthorContentGrid";

export default async function ContributorPage({ params: { slug } }) {
  let author = null;
  let postsFromContributor = null;

  // TODO: update fetchDoc to include error handling instead of making it on-page
  try {
    author = await fetchDoc({
      collection: "authors",
      slug,
    });
  } catch (err) {
  }

  if (!author) {
    notFound();
  }

  const { id, name, bio, role, featuredImage, linkedin, github, medium, x } = author;

  postsFromContributor = await fetchContentFromAuthor({ authorID: id });
  const totalArticles = Object.values(postsFromContributor).filter(
    innerArray => Array.isArray(innerArray) && innerArray.length > 0,
  ).length;


  return (
    <div>
      <div style={{ background: "purple" }}>
        <BackButton />
        <AuthorSummary author={author} />
      </div>
      <AuthorContentGrid content={postsFromContributor} />
    </div>
  );
}
