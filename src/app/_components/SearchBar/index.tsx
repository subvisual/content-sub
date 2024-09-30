import { MagnifyingGlass } from "@/app/_icons/icons";

import styles from './styles.module.css'
export default function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <MagnifyingGlass />
      <input className={styles.searchInput} placeholder={"What are you looking for?"} />
    </div>
)
}
