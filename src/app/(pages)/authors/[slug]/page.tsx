import React from 'react'
import { notFound } from 'next/navigation'

import { fetchContentFromAuthor } from '../../../_api/fetchContentFromAuthor'
import { fetchDoc } from '../../../_api/fetchDoc'

import BackButton from '@/app/_components/BackButton'
import { formatDateTime } from '@/app/_utilities/formatDateTime'
import { getImage } from '@/app/_utilities/getImage'
import categories from '@/payload/collections/Categories'
import { useEpisodeDuration } from "@/app/_utilities/useEpisodeDuration";

export default async function ContributorPage({ params: { slug } }) {
  let contributor = null
  let postsFromContributor = null

  try {
    contributor = await fetchDoc({
      collection: 'authors',
      slug,
    })
  } catch (err) {}

  if (!contributor) {
    notFound()
  }

  const { id, name, role, featuredImage, linkedin, github, medium, x, bio } = contributor

  postsFromContributor = await fetchContentFromAuthor({ authorID: id })
  const totalArticles = Object.values(postsFromContributor).filter(
          innerArray => Array.isArray(innerArray) && innerArray.length > 0,
        ).length

  return (
    <div>
      <div style={{ background: 'purple' }}>
        <BackButton />
        <div>
          {/*Left column*/}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* Image container */}
            <div style={{ width: 120, height: 120, marginRight: '20px' }}>
              <img
                src={getImage(featuredImage)}
                alt={name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
              />
            </div>

            {/* Info container */}
            <div>
              <h5 style={{ margin: 0 }}>{name}</h5>
              <h6 style={{ margin: 0, fontWeight: 'normal' }}>{role}</h6>

              {/* Social links */}
              <div style={{ marginTop: '10px' }}>
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>{' '}
                |
                <a href={github} target="_blank" rel="noopener noreferrer">
                  {' '}
                  GitHub
                </a>{' '}
                |
                <a href={medium} target="_blank" rel="noopener noreferrer">
                  {' '}
                  Medium
                </a>{' '}
                |
                <a href={x} target="_blank" rel="noopener noreferrer">
                  {' '}
                  X
                </a>
              </div>
            </div>
          </div>
          {/*  Right column */}
          <div>{bio}</div>
        </div>
      </div>

      {/* Content block*/}
      <div style={{ background: 'white', color: 'black' }}>
        <div>{totalArticles} Articles</div>
        <div>
          <div>
            {/*<pre>{JSON.stringify(postsFromContributor, null, 2)}</pre>*/}

            {Object.keys(postsFromContributor).map(key =>
              postsFromContributor[key].map((item, i) => (
                <div
                  key={i}
                  style={{
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    margin: '10px',
                    padding: '15px',
                    backgroundColor: '#fff',
                    transition: 'transform 0.2s',
                    cursor: 'pointer',
                  }}
                >
                  <p style={{ fontSize: '14px', fontWeight: 'bold' }}>{key}</p>
                  <h1 style={{ fontSize: '18px', margin: '10px 0' }}>{item.title}</h1>
                  {/* TODO: Update collections so all use "summary" */}
                  {key === 'Blogposts' ? (
                    <p style={{ fontSize: '16px', color: '#555' }}>{item.summary}</p>
                  ) : (
                    <p style={{ fontSize: '16px', color: '#555' }}>{item.episodeSummary}</p>
                  )}

                  <div>
                    {Array.isArray(item.categories) && item.categories.length > 0
                      ? item.categories.map((category, i) => (
                          <p key={i} style={{ fontSize: '14px', color: '#007bff' }}>
                            {category.title}
                          </p>
                        ))
                      : null}
                  </div>
                  <div>
                    <div>
                      {formatDateTime(item.publishedAt)} | {key === 'Blogposts' ? (<span>ReadTime</span>) : (<span>Duration</span>)}
                    </div>
                  </div>
                  <div>

                    <div>
                      <p>AuthorPill {name}</p>
                    </div>
                  </div>
                </div>
              )),
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
