"use client";

import { useState } from "react";

import ContentCard from "../../_components/ContentCard";
import { ContentTypeArrays } from "../../_interfaces/ContentTypeArrays";
import { filterArticles } from "../../_utilities/filterArticles";
import ContentNavBar from "./NavBar";
import styles from "./styles.module.css";

const colorMap = {
  All: "var(--dark-rock-800)",
  Blogposts: "var(--sub-blue-600)",
  PodcastEpisodes: "var(--sub-purple-600)",
  CaseStudies: "var(--sub-orange-800)",
  TalksAndRoundtables: "var(--sub-purple-300)",
};

interface HubContentGridProps {
  articles: ContentTypeArrays;
}

export default function HubContentGrid({ articles }) {
  // todo: fix rendering when there is no content

  const [activeButton, setActiveButton] = useState<keyof ContentTypeArrays | "All">("All");

  const handleActiveButtonChange = (buttonName: keyof ContentTypeArrays) => {
    setActiveButton(buttonName);
  };

  const filter = articles["Blogposts"].docs;

  const dynamicColor = {
    "--dynamic-color": colorMap[activeButton],
  };

  return (
    <div>

    {filter.map((i) => (
      <div key={i}>Cenas aqui!</div>
    ))}


    {/*<pre>{*/}
    {/*    JSON.stringify(filter, null, 2)*/}
    {/*  }</pre>*/}

      <ContentNavBar activeButton={activeButton} onActiveButtonChange={handleActiveButtonChange} />
       TODO: fix dynamic color
      <div className={styles.contentGridContainer}>
        <div className={styles.contentGrid}>
          {filter.map((article, i) => (
            <div className={styles.contentCard} key={i}>
              <ContentCard
                key={article.content.id}
                contentType={article.contentType}
                content={article}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
