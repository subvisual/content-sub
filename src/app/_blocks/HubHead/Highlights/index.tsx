import AuthorPill from '../../../_components/AuthorPill'
import CategoryPill from '../../../_components/CategoryPill'
import { SpectaclesIcon } from '../../../_icons/icons'
import { estimateReadTime } from '../../../_utilities/estimateReadTime'
import { formatDateTime } from '../../../_utilities/formatDateTime'
import styles from './styles.module.css'

export function Highlights({ content, main }) {
  const { title, publisedAt, categories, authors } = content

  return (
    <div
      className={`${styles.highlights} ${main ? styles.mainHighlight : styles.secondaryHighlight}`}
    >
      <p className={styles.overline}> HIGHLIGHTS </p>
      <h6> {title} </h6>
      <div className={styles.metadataContainer}>
        {/* TODO: is this a good approach for multi category items? */}
        {categories.length > 5 ? (
          <CategoryPill title={categories[0].title} />
        ) : (
          categories.map((category, i) => <CategoryPill key={i} title={category.title} />)
        )}

        <span className={styles.publishedDate}>{formatDateTime(publisedAt)}</span>
        <span className={styles.readTime}>
          <SpectaclesIcon
            width={'32'}
            color={main ? 'var(--soft-white-100)' : 'var(--dark-rock-800)'}
          />
          {estimateReadTime('Placeholder')}
        </span>
      </div>
      <AuthorPill author={authors[0]} />
    </div>
  )
}
