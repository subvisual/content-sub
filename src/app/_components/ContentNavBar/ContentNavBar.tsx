"use client";

import { useState } from "react";
import styles from "./styles.module.css";

import {
  AllContent,
  Blogposts,
  CaseStudies,
  Podcasts,
  Talks,
} from "@/app/_components/ContentNavBar/Buttons";
import { AllIcon, BlogpostIcon, CaseStudiesIcon, ChevronDownIcon, ChevronUpIcon, PodcastIcon, TalksIcon } from "@/app/_icons/icons";
import DropdownMenu from "@/app/_components/ContentNavBar/DropdownMenu";



export default function ContentNavBar({ activeButton, onActiveButtonChange }) {

  const handleButtonClick = (buttonName) => {
    onActiveButtonChange(buttonName);
  };

  return (
    // todo: make whole button clickable?


    <div className={styles.contentNav}>

      <DropdownMenu activeButton={activeButton} onActiveButtonChange={handleButtonClick} />

      <button
        className={`${styles.button}  ${styles.allButton} ${activeButton === "All" ? styles.activeButton : ""}`}
        onClick={() => handleButtonClick("All")}
      >
        <AllContent
          fill={activeButton === "All" ? "var(--soft-white-100)" : "var(--dark-rock-800)"}
          textColor={activeButton === "All" ? "var(--dark-rock-800)" : "var(--soft-white-100)"} />
      </button>
      <button
        className={`${styles.button} ${styles.blogpostsButton} ${activeButton === "Blogposts" ? styles.activeButton : ""} `}
        onClick={() => handleButtonClick("Blogposts")}

      >
        <Blogposts
          fill={activeButton === "Blogposts" ? "var(--soft-white-100)" : "var(--sub-blue-600)"}
          textColor={activeButton === "Blogposts" ? "var(--dark-rock-800)" : "var(--soft-white-100)"} />
      </button>
      <button
        className={`${styles.button} ${styles.podcastsButton} ${activeButton === "PodcastEpisodes" ? styles.activeButton : ""} `}
        onClick={() => handleButtonClick("PodcastEpisodes")}

      >
        <Podcasts
          fill={activeButton === "PodcastEpisodes" ? "var(--soft-white-100)" : "var(--sub-purple-600"}
          textColor={activeButton === "PodcastEpisodes" ? "var(--dark-rock-800)" : "var(--soft-white-100)"} />
      </button>
      <button
        className={`${styles.button} ${styles.caseStudiesButton} ${activeButton === "CaseStudies" ? styles.activeButton : ""} `}
        onClick={() => handleButtonClick("CaseStudies")} // Use the correct name

      >
        <CaseStudies
          fill={activeButton === "CaseStudies" ? "var(--soft-white-100)" : "var(--sub-orange-800"}
          textColor={activeButton === "CaseStudies" ? "var(--dark-rock-800)" : "var(--soft-white-100)"} />
      </button>
      <button
        className={`${styles.button} ${styles.talksButton} ${activeButton === "TalksAndRoundtables" ? styles.activeButton : ""} `}
        onClick={() => handleButtonClick("TalksAndRoundtables")}

      >
        <Talks
          fill={activeButton === "TalksAndRoundtables" ? "var(--soft-white-100)" : "var(--sub-purple-300"}
          textColor={activeButton === "TalksAndRoundtables" ? "var(--dark-rock-800)" : "var(--soft-white-100)"} />
      </button>
    </div>
  );
}
