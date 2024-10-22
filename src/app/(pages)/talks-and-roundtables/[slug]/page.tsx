// import { notFound } from 'next/navigation'
//
// import { fetchDoc } from '../../../_api/fetchDoc'

import { Metadata } from "next";
import { fetchContentBySlug } from "@/app/_utilities/contentFetchers";
import { generateMeta } from "@/utilities/generateMeta";

export const dynamic = 'force-dynamic'

export default async function TalksAndRoundTablesPage() {
 /* let content = null

  try {
    content = await fetchDoc({
      collection: 'talks-and-roundtables',
      slug: slug,
    })
  } catch (err) {}

  if (!content) {
    notFound()
  }
*/
  return (
    <div>
      {/*Hello, world!
      <pre>{JSON.stringify(content, null, 2)}</pre>*/}
    </div>
  )
}

export async function generateMetadata({ params: paramsPromise}): Promise<Metadata> {
  const { slug } = await paramsPromise
  const talk = await fetchContentBySlug({
    slug: slug,
    type: "talks-and-roundtables",
  })
  // @ts-ignore
  return generateMeta({doc: talk})
}
