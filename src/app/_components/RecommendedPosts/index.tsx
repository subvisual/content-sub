import styles from './styles.module.css'

import MiniContentCard from '@/app/_components/MiniContentCard'

export default function RecommendedPosts({ posts }) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Recommended</p>

      {posts.map(post => (
        <MiniContentCard post={post} />
      ))}
    </div>
  )
}
