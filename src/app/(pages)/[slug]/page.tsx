import { Metadata } from 'next'
import { draftMode } from 'next/headers'

import { Page } from '../../../payload/payload-types'
import { fetchDoc } from '../../_api/fetchDoc'
import HubContentGrid from '../../_blocks/HubContentGrid/page'
import { Subscribe } from '../../_blocks/Subscribe'
import SearchBar from '../../_components/SearchBar'
import { ALL_CONTENT } from '../../_graphql/allContent'
import { fetcher } from '../../_utilities/fetcher'
import { generateMeta } from '../../_utilities/generateMeta'
import styles from './styles.module.css'
import { AllIcon } from "@/app/_icons/icons";

// Payload Cloud caches all files through Cloudflare, so we don't need Next.js to cache them as well
// This means that we can turn off Next.js data caching and instead rely solely on the Cloudflare CDN
// To do this, we include the `no-cache` header on the fetch requests used to get the data for this page
// But we also need to force Next.js to dynamically render this page on each request for preview mode to work
// See https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
// If you are not using Payload Cloud then this line can be removed, see `../../../README.md#cache`
export const dynamic = 'force-dynamic'

export default async function Page({ params: { slug = 'home' } }) {
  const articles = await fetcher({ query: ALL_CONTENT })

  return (
    <>
      
      {/* Head Block*/}
      <div className={styles.headBlock}>
        <div className={styles.hubLogo}>
          <p>
            Content
            <br />
            <span style={{ fontFamily: 'var(--acta-bold)' }}>Hub</span>
          </p>
        </div>

        {/*  Top Highlight  */}
        <div className={`${styles.highlights} ${styles.topHighlight}`}>
          <p> HIGHLIGHTS </p>
          <h6> From nutritionist to product designer: Reinvinting my carrer at 30</h6>
          <p>
            <span className={styles.categoryPill}>Inside subvisual</span> Date and Readtime{' '}
          </p>
          <div className={styles.authorPill}>
            <img className={styles.authorImage} src={'/static-image.jpg'} />
            Rui Sousa
          </div>
        </div>

        {/*  Bottom Highlight */}
        <div className={`${styles.highlights} ${styles.bottomHighlight}`}>
          <p> HIGHLIGHTS </p>
          <p>
            {' '}
            From nutritionist to product designer: <br /> Reinvinting my carrer at 30
          </p>
          <p>
            <span className={styles.categoryPill}>Inside subvisual</span> Date and Readtime{' '}
          </p>
          <div className={styles.authorPill}>
            <img className={styles.authorImage} src={'/static-image.jpg'} />
            Rui Sousa
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <SearchBar />
      {/* Content Grid */}
      <HubContentGrid articles={articles} />

      <Subscribe />
    </>
  )
}

export async function generateMetadata({ params: { slug = 'home' } }): Promise<Metadata> {
  const { isEnabled: isDraftMode } = draftMode()

  let page: Page | null = null

  try {
    page = await fetchDoc<Page>({
      collection: 'pages',
      slug,
      draft: isDraftMode,
    })
  } catch (error) {
    // don't throw an error if the fetch fails
    // this is so that we can render static fallback pages for the demo
    // when deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // in production you may want to redirect to a 404  page or at least log the error somewhere
  }

  return generateMeta({ doc: page })
}
