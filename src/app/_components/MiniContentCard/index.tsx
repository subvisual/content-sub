import styles from './styles.module.css'

import ArchiveButton from '@/app/_components/BlogPostArchiveButton'
import CategoryPill from '@/app/_components/CategoryPill'
import { formatDateTime } from '@/app/_utilities/formatDateTime'

export default function MiniContentCard({ post }) {
  const { title, categories, publishedAt } = post
  return (
    <div className={styles.miniCard}>
      <ArchiveButton collection={'blogpost'} />
      <h6>{title}</h6>
      <ul>
        {categories.map(category => (
          <li>
            <CategoryPill title={category.title} />
          </li>
        ))}
      </ul>
      <div className={styles.readTime}>
        {formatDateTime(publishedAt)}
        <span>20 min read</span>
      </div>
    </div>
  )
}
