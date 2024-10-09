import HubContentGrid from '../../_blocks/HubContentGrid'
import { Subscribe } from '../../_blocks/Subscribe'
import SearchBar from '../../_components/SearchBar'
import { ALL_CONTENT } from '../../_graphql/allContent'
import { fetcher } from '../../_utilities/fetcher'
import styles from './styles.module.css'

import { fetchSettings } from '@/app/_api/fetchGlobals'
import HubHead from '@/app/_blocks/HubHead'

// Payload Cloud caches all files through Cloudflare, so we don't need Next.js to cache them as well
// This means that we can turn off Next.js data caching and instead rely solely on the Cloudflare CDN
// To do this, we include the `no-cache` header on the fetch requests used to get the data for this page
// But we also need to force Next.js to dynamically render this page on each request for preview mode to work
// See https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
// If you are not using Payload Cloud then this line can be removed, see `../../../README.md#cache`

export default async function Page({ params: { slug = 'home' } }) {
  // const articles = await fetcher({ query: ALL_CONTENT })
  // const highglights = await fetchSettings()

  return (
    // <>
    //   <HubHead highlights={highglights} />
    //
    //   {/* Search Bar */}
    //   <SearchBar />
    //
    //   {/* Content Grid */}
    //   <HubContentGrid articles={articles} />
    //   <Subscribe />
    // </>

    <div>
      <h5>Hello Payload 3.0</h5>
    </div>
  )
}
