// import React from 'react'
// import { notFound } from 'next/navigation'
//
// import { fetchDoc } from '../../../_api/fetchDoc'

import { Metadata } from "next";
import { fetchContentBySlug } from "@/app/_utilities/contentFetchers";
import { generateMeta } from "@/utilities/generateMeta";

export const dynamic = 'force-dynamic'

export default async function CaseStudiesPage() {
  // let content = null
  //
  // try {
  //   content = await fetchDoc({
  //     collection: 'case-studies',
  //     slug,
  //   })
  // } catch (err) {}
  //
  // if (!content) {
  //   notFound()
  // }

  return (
    <div>
      {/*<pre>{JSON.stringify(content, null, 2)}</pre>*/}
    </div>
  )
}

export async function generateMetadata({ params: paramsPromise}): Promise<Metadata> {
  const { slug } = await paramsPromise
  const caseStudy = await fetchContentBySlug({
    slug: slug,
    type: "podcasts",
  })
  // @ts-ignore
  return generateMeta({doc: caseStudy})
}
