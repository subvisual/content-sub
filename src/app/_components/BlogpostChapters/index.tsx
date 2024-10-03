"use client";
import styles from "./styles.module.css";
import DOMPurify from "isomorphic-dompurify";
import { useEffect, useState } from "react";

export default function BlogpostChapters({ content }) {

  const { content_html } = content;

  let sectionCounter = 1;

  const sanitizedContent = (
    DOMPurify.sanitize(content_html)
      .replace(/<h[1-6]>/g, () => {
        return `<h5 id="chapter${sectionCounter++}">`;
      })
      .replace(/<\/h[1-6]>/g, "</h5>")
      .replace(/%nbsp;/g, " ")
      .replace(/<p>\s*<\/p>/g, "")
  );

  const [visibleChapter, setVisibleChapter] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleChapter(entry.target.id); // Update state with the visible chapter's ID
          }
        });
      },
      { threshold: 0.1 }, // Trigger when 10% of the element is visible
    );

    const chapters = document.querySelectorAll("[id^=\"chapter\"]");
    chapters.forEach((chapter) => observer.observe(chapter));

    // Cleanup on unmount
    return () => {
      chapters.forEach((chapter) => observer.unobserve(chapter));
    };
  }, []);

  console.log(visibleChapter)


  const chapters = [...sanitizedContent.matchAll(/<h[1-6] id="([^"]*)">(.*?)<\/h[1-6]>/g)]
    .map(match => ({ id: match[1], title: match[2] }));

  const [activeChapter, setActiveChapter] = useState("chapter1");

  return (
    <div className={styles.container}>

      <div style={{ position: "sticky", top: "20px" }}>
        <p className={`outline ${styles.title}`}>CHAPTER</p>
        <ul>
          {chapters.map((chapter, i) => (
            <a href={`#${chapter.id}`}>
              <li
                style={{ borderColor: visibleChapter === chapter.id ? "var(--sub-purple-400)" : "var(--soft-white-100)" }}
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
