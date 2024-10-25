import { fetchAllContentByType, fetchContentBySlug, fetchContentFromAuthorOrCategory } from '@/app/_utilities/contentFetchers';
import ContentGrid from '@/app/_blocks/ContentGrid';
import { Header } from '@/app/_components/Header';
import BackButton from '@/app/_components/BackButton';
import { Category } from '@/payload-types';
import { Subscribe } from '@/app/_blocks/Subscribe';
import CategoryPill from '@/app/_components/CategoryPill';
import styles from './styles.module.css';

const headerStyle = {
  '--dynamic-background': 'var(--sub-blue-100)',
  '--dynamic-color': 'var(--dark-rock-800)',
  '--dynamic-width': 'calc(100% - 40px)',
};

export default async function CategoryPage({ params: paramsPromise }) {
  const { slug } = await paramsPromise;

  const category = await fetchContentBySlug({
    slug: slug,
    type: 'categories',
  }) as Category;

  const content = await fetchContentFromAuthorOrCategory({ type: 'category', target: category });

  const otherCategories = await fetchAllContentByType('categories').then((res: Category[]) => res.map((item: Category) => item.title));

  return (
    <div>
      <Header style={headerStyle} />

      {/* Head block*/}
      <div className={styles.headBlock}>
        <BackButton />
        <h4> {category.title} </h4>
      </div>

      {/* Content Grid */}
      <div className={styles.contentContainer}>
        <ContentGrid content={content} showCount={false}/>
        <div className={styles.otherCategoriesContainer}>
          <p>Recommended categories</p>
          <div className={styles.otherCategories}>
            {otherCategories.map(category => (
              <CategoryPill title={category} />
            ))}
          </div>
        </div>
      </div>

      <Subscribe />
    </div>
  );
}
