import React from "react";
import { notFound } from "next/navigation";

import { fetchContentFromAuthor } from "../../../_api/fetchContentFromAuthor";
import { fetchDoc } from "../../../_api/fetchDoc";
import BackButton from "@/app/_components/BackButton";
import { getImage } from "@/app/_utilities/getImage";

export default async function ContributorPage({ params: { slug } }) {
  let contributor = null;
  let postsFromContributor = null;

  try {
    contributor = await fetchDoc({
      collection: "authors",
      slug,
    });
  } catch (err) {
  }

  if (!contributor) {
    notFound();
  }

  const {
    id,
    name,
    role,
    featuredImage,
    linkedin,
    github,
    medium,
    x,
    bio,
  } = contributor;

  postsFromContributor = await fetchContentFromAuthor({ authorID: id })
  const totalArticles = postsFromContributor.length

  return (
    <div>
      <div style={{ background: "purple" }}>
        <BackButton />
        <div>
          {/*Left column*/}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* Image container */}
            <div style={{ width: 120, height: 120, marginRight: '20px' }}>
              <img src={getImage(featuredImage)} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
            </div>

            {/* Info container */}
            <div>
              <h5 style={{ margin: 0 }}>{name}</h5>
              <h6 style={{ margin: 0, fontWeight: 'normal' }}>{role}</h6>

              {/* Social links */}
              <div style={{ marginTop: '10px' }}>
                <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a> |
                <a href={github} target="_blank" rel="noopener noreferrer"> GitHub</a> |
                <a href={medium} target="_blank" rel="noopener noreferrer"> Medium</a> |
                <a href={x} target="_blank" rel="noopener noreferrer"> X</a>
              </div>
            </div>
          </div>
          {/*  Right column */}
          <div>
            {bio}
          </div>
        </div>


      </div>

      {/* Content block*/}
      <div style={{ background: "white", color: "black" }}>
        <div>{totalArticles} Articles</div>
        <div>
          <pre>{JSON.stringify(postsFromContributor, null, 2)}</pre>
          <div>

          </div>
        </div>
      </div>
    </div>
  );
}
