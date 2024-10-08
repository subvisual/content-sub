import React from 'react'
import { notFound } from 'next/navigation'

import { fetchDoc } from '../../../_api/fetchDoc'

export const dynamic = 'force-dynamic'

export default async function CaseStudiesPage({ params: { slug } }) {
  let content = null

  try {
    content = await fetchDoc({
      collection: 'case-studies',
      slug,
    })
  } catch (err) {}

  if (!content) {
    notFound()
  }

  return (
    <div>
      <pre>{JSON.stringify(content, null, 2)}</pre>
    </div>
  )
}
