import React from "react";

import { notFound } from "next/navigation";
import { fetchContent } from "@/app/_api/fetchContent";
import { formatDateTime } from "@/app/_utilities/formatDateTime";
import { EpisodeHead } from "../../../_blocks/EpisodeHead";
import { EpisodeContent } from "@/app/_blocks/EpisodeContent";
import { RecommendedContent } from "@/app/_blocks/RecommendedContent";
import { Subscribe } from "@/app/_blocks/Subscribe";
import { fetchDoc } from "@/app/_api/fetchDoc";

export default async function PodcastEpisodesPage({ params: { slug } }) {



  let episode = null;

  try {
    episode = await fetchDoc({
      collection: "podcast-episodes",
      slug,
    });
  } catch (err) {
    console.error(err);
  }

  if (!episode) {
    notFound();
  }

  const {
    id,
    title,
    episodeSummary,
    episodeNotes,
    contributors,
    category,
    populatedContributors,
    episodeFile,
    publishedAt,
    featuredImage,
    relatedEpisodes,
    spotify,
    apple,
  } = episode;

  const featuredImageSource = `${process.env.NEXT_PUBLIC_SERVER_URL}/media/${featuredImage.filename}`;

  const audioFileSource = `${process.env.NEXT_PUBLIC_SERVER_URL}/media/${episodeFile.filename}`
  // const audio = new Audio(audioFileSource);
  // audio.addEventListener("loadedmetadata", () => {console.log(audio.duration)})

  return (

    <div>
      <div>
        <EpisodeHead episode={episode} />
        <EpisodeContent episode={episode}/>
        <RecommendedContent collection={"podcast-episodes"} relatedContent={relatedEpisodes}/>
        <Subscribe />
      </div>

    </div>

  );
}
