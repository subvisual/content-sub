"use client";

import { JSX, useEffect, useState } from "react";

import styles from "./styles.module.css";
import { getChapters, sanitizeAndAddChapters } from "@/app/_utilities/sanitizeAndAddChapters";

export default function BlogpostChapters({ content_html }: { content_html: string }): JSX.Element {
  const [visibleChapter, setVisibleChapter] = useState("");

  const chapters = getChapters(content_html);
useEffect(() => {
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

  const observer = new IntersectionObserver((entries) => {
    let visibleId = "";

    entries.forEach((entry) => {
      if (entry.isIntersecting || entry.boundingClientRect.bottom < 0) {
        visibleId = entry.target.id;
      }
    });

    setVisibleChapter(visibleId);
  }, {
    root: null,
    threshold: 0.5,
  });

  headings.forEach((heading) => observer.observe(heading));

  return () => {
    headings.forEach((heading) => observer.unobserve(heading));
  };
}, [chapters]);


  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <p className={`outline ${styles.title}`}>CHAPTER</p>
        <ul>
          {chapters.map((chapter, i) => (
            <a key={i} href={`#${chapter.id}`}>
              <li
                style={{
                  borderColor:
                    visibleChapter === chapter.id
                      ? "var(--sub-purple-400)"
                      : "var(--soft-white-100)",
                }}
                key={i}
              >
                {chapter.title}
              </li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
}
