"use client";

import { useState } from "react";
import styles from "./styles.module.css";

import {
  AllContent,
  Blogposts,
  CaseStudies,
  Podcasts,
  Talks,
} from "@/app/_components/ContentNavButtons/ContentNavButtons";

export default function ContentNavBar({activeButton, onActiveButtonChange}  ) {


  const handleButtonClick = (buttonName) => {
    onActiveButtonChange(buttonName)
  };

   return (
     // todo: make whole button clickable?
    <div className={styles.contentNav}>
      <button
        className={`${styles.button}  ${styles.allButton} ${activeButton === 'all' ? styles.activeButton : ''}`}
        onClick={() => handleButtonClick("all")}
      >
        <AllContent
          fill={activeButton === "all" ? 'var(--soft-white-100)' : 'var(--dark-rock-800)'}
          textColor={activeButton === 'all' ? 'var(--dark-rock-800)' : 'var(--soft-white-100)'}/>
      </button>
      <button
        className={`${styles.button} ${styles.blogpostsButton} ${activeButton === 'blogposts' ? styles.activeButton : ''} `}
        onClick={() => handleButtonClick("blogposts")}

      >
        <Blogposts
          fill={activeButton === "blogposts" ? 'var(--soft-white-100)' : 'var(--sub-blue-600)'}
          textColor={activeButton === 'blogposts' ? 'var(--dark-rock-800)' : 'var(--soft-white-100)'}/>
      </button>
      <button
        className={`${styles.button} ${styles.podcastsButton} ${activeButton === 'podcasts' ? styles.activeButton : ''} `}
        onClick={() => handleButtonClick("podcasts")}

      >
        <Podcasts
          fill={activeButton === "podcasts" ? 'var(--soft-white-100)' : "var(--sub-purple-600"}
          textColor={activeButton === 'podcasts' ? 'var(--dark-rock-800)' : 'var(--soft-white-100)'}/>
      </button>
      <button
        className={`${styles.button} ${styles.caseStudiesButton} ${activeButton === 'caseStudies' ? styles.activeButton : ''} `}
        onClick={() => handleButtonClick("caseStudies")} // Use the correct name

      >
        <CaseStudies
          fill={activeButton === "caseStudies" ? 'var(--soft-white-100)' : "var(--sub-orange-800"}
          textColor={activeButton === 'caseStudies' ? 'var(--dark-rock-800)' : 'var(--soft-white-100)'}/>
      </button>
      <button
        className={`${styles.button} ${styles.talksButton} ${activeButton === 'talks' ? styles.activeButton : ''} `}
        onClick={() => handleButtonClick("talks")}

      >
        <Talks
          fill={activeButton === "talks" ? 'var(--soft-white-100)' : "var(--sub-purple-300"}
          textColor={activeButton === 'talks' ? 'var(--dark-rock-800)' : 'var(--soft-white-100)'}/>
      </button>
    </div>
  );
}
