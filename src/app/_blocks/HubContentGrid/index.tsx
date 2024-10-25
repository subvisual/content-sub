"use client";

import React, { useState } from "react";

import ContentCard from "../../_components/ContentCard";
import { ContentTypeArrays } from "../../_interfaces/ContentTypeArrays";
import { filterContent } from "../../_utilities/filterContent";
import ContentNavBar from "./NavBar";
import styles from "./styles.module.css";

const colorMap = {
  All: "var(--dark-rock-800)",
  Blogposts: "var(--sub-blue-600)",
  Podcasts: "var(--sub-purple-600)",
  CaseStudies: "var(--sub-orange-800)",
  TalksAndRoundtables: "var(--sub-purple-300)",
};

export default function HubContentGrid({ content }) {
  // todo: fix rendering when there is no content

  const [activeButton, setActiveButton] = useState<keyof ContentTypeArrays | "All">("All");

  const handleActiveButtonChange = (buttonName: keyof ContentTypeArrays) => {
    setActiveButton(buttonName);
  };


  const dynamicStyles = {
    "--dynamic-color": colorMap[activeButton],
  } as React.CSSProperties

  const filteredContent = filterContent({ articles: content, filter: activeButton });


  return (
    <div>
      <ContentNavBar activeButton={activeButton} onActiveButtonChange={handleActiveButtonChange} />
      <div className={styles.contentGridContainer} style={dynamicStyles}>
        <div className={styles.contentGrid}>
          {filteredContent.map((article, i) => (
            <div className={styles.contentCard}>
              <ContentCard contentType={article.contentType} content={article.content} rounded={false} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
