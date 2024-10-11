"use client";

import { useEffect, useState } from "react";

import styles from "./styles.module.css";

export default function BlogpostChapters() {
  const [visibleChapter, setVisibleChapter] = useState("");
  const [chapters, setChapters] = useState([]);
  // TODO: Fix chapter navigator
  useEffect(() => {
    // Function to extract headings and match them with chapters
    const extractHeadings = () => {
      // Query all headings in the DOM (e.g., h1, h2, h3...)
      const chapterList = []
      const headings = Array.from(document.querySelectorAll("h1, h2, h3"));
      headings.map(i => chapterList.push(i.innerHTML.trim()));

      setChapters(chapterList);
    };

    // Run the function to extract and match headings
    extractHeadings();

    // You could also set a listener for any dynamic changes in headings here, if needed

  }, []); // Re-run the effect if `chapters` changes


  console.log(chapters);
  return (
    <div className={styles.container}>
      {/*{<pre>{JSON.stringify(chapters, null, 2)}</pre>}*/}
      <div className={styles.navbar}>
        <p className={`outline ${styles.title}`}>CHAPTER</p>
        <ul>
          {chapters.map((chapter, i) => (
            // <a key={i} href={`#${chapter.id}`}>
              <li
                style={{
                  borderColor:
                    visibleChapter === chapter
                      ? "var(--sub-purple-400)"
                      : "var(--soft-white-100)",
                }}
                key={i}
              >
                {chapter}
              </li>
            // </a>
          ))}
        </ul>
      </div>
    </div>
  );
}
