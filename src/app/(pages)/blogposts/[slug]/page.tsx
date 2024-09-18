import React from 'react'
import { notFound } from 'next/navigation'

import { fetchDoc } from "../../../_api/fetchDoc"

export default async function BlogpostPage({ params: { slug } }) {
  let episode = null

  try {
    episode = await fetchDoc({
      collection: 'blogposts',
      slug,
    })
  } catch (err) {
    console.error(err)
  }

  if (!episode) {
    notFound()
  }

  return (
    <div>
      hello, world!
      <pre>{JSON.stringify(episode, null, 2)}</pre>
    </div>
  )
}
