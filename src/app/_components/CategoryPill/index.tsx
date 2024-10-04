import styles from './styles.module.css'
export default function CategoryPill({ title }: { title: string }) {
  return <div className={styles.categoryPill}>{title}</div>
}
