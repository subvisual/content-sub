'use client'

import React from 'react'
import { notFound } from 'next/navigation'

import fetchContentFromAuthor from '@/app/_api/fetchContentFromAuthor'
import { fetchDoc } from '@/app/_api/fetchDoc'

export default async function ContributorPage({ params: { slug } }) {
  let contributor = null
  let postsFromContributor = null

  try {
    contributor = await fetchDoc({
      collection: 'authors',
      slug,
    })
  } catch (err) {
    console.error(err)
  }

  if (!contributor) {
    notFound()
  }

  const contributorID = contributor.id

  try {
    postsFromContributor = await fetchContentFromAuthor({ authorID: contributorID })
  } catch (err) {
    console.error(err)
  }

  return (
    <div>
      <div>
        Hello "{contributor.name}"!
        <div>
          <h1>Posts by "{contributor.name}</h1>
          <pre>{JSON.stringify(postsFromContributor, null, 2)}</pre>
        </div>
      </div>
    </div>
  )
}
