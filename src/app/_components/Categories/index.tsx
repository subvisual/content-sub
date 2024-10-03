import styles from "./styles.module.css";
import CategoryPill from "@/app/_components/CategoryPill";

export default function Categories( {categories}) {
    return (
      <div className={styles.categoriesContainer}>
        <p className='outline'>CATEGORY</p>
        <div className={styles.categories}>
          {categories.map((category) => (
            <CategoryPill key={category.id} title={category.title} />
          ))}
        </div>
      </div>
    )
}
