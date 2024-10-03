import styles from './styles.module.css'

import { MagnifyingGlass } from '@/app/_icons/icons'
export default function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <MagnifyingGlass />
      <input className={styles.searchInput} placeholder={'What are you looking for?'} />
    </div>
  )
}
