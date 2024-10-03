import styles from './styles.module.css'
export default function BlogpostChapters({content}) {

  const { content_html } = content

  const chapters = [...content_html.matchAll(/<h[1-6]>(.*?)<\/h[1-6]>/g)].map(match => match[1])
  console.log(chapters)


  return (
        <div className={styles.container}>
          <div className={styles.navbar}></div>
          <p className={`outline ${styles.title}`}>CHAPTER</p>
          <ul>
            {chapters.map((chapter, i) => (
              <li key={i}>{chapter}</li>
            ))}
          </ul>

        </div>
    )
}
