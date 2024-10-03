'use client'

import { useEffect, useState } from 'react'
import styles from './styles.module.css'

export default function BlogpostChapters({ chapters }) {
  const [visibleChapter, setVisibleChapter] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleChapter(entry.target.id) // Update state with the visible chapter's ID
          }
        })
      },
      { threshold: 0.1 }, // Trigger when 10% of the element is visible
    )

    const chapters = document.querySelectorAll('[id^="chapter"]')
    chapters.forEach(chapter => observer.observe(chapter))

    // unmount
    return () => {
      chapters.forEach(chapter => observer.unobserve(chapter))
    }
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <p className={`outline ${styles.title}`}>CHAPTER</p>
        <ul>
          {chapters.map((chapter, i) => (
            <a href={`#${chapter.id}`}>
              <li
                style={{
                  borderColor:
                    visibleChapter === chapter.id
                      ? 'var(--sub-purple-400)'
                      : 'var(--soft-white-100)',
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
  )
}
