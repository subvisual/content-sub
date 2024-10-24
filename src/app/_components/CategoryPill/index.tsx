import styles from './styles.module.css'
export default function CategoryPill({ title, id }: { title: string, id?: string }) {
  return <div id={id} className={styles.categoryPill}>{title}</div>
}
