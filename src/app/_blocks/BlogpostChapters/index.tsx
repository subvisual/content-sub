"use client";

import { useEffect, useState } from "react";

import styles from "./styles.module.css";

export default function BlogpostChapters() {
  const [visibleChapter, setVisibleChapter] = useState("");
  const [chapters, setChapters] = useState<string[]>([]);
  // TODO: Fix chapter navigator
  useEffect(() => {
    const extractHeadings = () => {
      // Query all headings in the DOM (e.g., h1, h2, h3...)
      const chapterList: string[] = [];
      const headings = Array.from(document.querySelectorAll("h1, h2, h3"));
      headings.map(i => chapterList.push(i.innerHTML.trim()));

      setChapters(chapterList);
    };

    extractHeadings();


  }, []);


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
