import React from "react";
import { notFound } from "next/navigation";

import { fetchContentFromAuthor } from "../../../_api/fetchContentFromAuthor";
import { fetchDoc } from "../../../_api/fetchDoc";

import AuthorPill from "@/app/_components/AuthorPill";
import BackButton from "@/app/_components/BackButton";
import { formatDateTime } from "@/app/_utilities/formatDateTime";
import { getImage } from "@/app/_utilities/getImage";
import { useEpisodeDuration } from "@/app/_utilities/useEpisodeDuration";
import categories from "@/payload/collections/Categories";
import Authors from "@/app/_components/Authors";
import EpisodeFeaturedImage from "@/app/_components/EpisodeFeaturedImage";
import ContentSummary from "@/app/_components/ContentSummary";
import FeaturedImage from "@/app/_components/FeaturedImage";

export default async function ContributorPage({ params: { slug } }) {
  let author = null;
  let postsFromContributor = null;

  try {
    author = await fetchDoc({
      collection: "authors",
      slug,
    });
  } catch (err) {
  }

  if (!author) {
    notFound();
  }

  const { id, name, bio, role, featuredImage, linkedin, github, medium, x } = author;
  
  postsFromContributor = await fetchContentFromAuthor({ authorID: id });
  const totalArticles = Object.values(postsFromContributor).filter(
    innerArray => Array.isArray(innerArray) && innerArray.length > 0,
  ).length;

  return (
    <div>
      <div style={{ background: "purple" }}>
        <BackButton />
        <div>
          {/*Left column*/}
          <div style={{ display: "flex", alignItems: "center" }}>
            {/* Image container */}
            <FeaturedImage src={featuredImage}/>            

            {/* Info container */}
            <div>
              <h5 style={{ margin: 0 }}>{name}</h5>
              <h6 style={{ margin: 0, fontWeight: "normal" }}>{role}</h6>

              {/* Social links */}
              <div style={{ marginTop: "10px" }}>
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>{" "}
                |
                <a href={github} target="_blank" rel="noopener noreferrer">
                  {" "}
                  GitHub
                </a>{" "}
                |
                <a href={medium} target="_blank" rel="noopener noreferrer">
                  {" "}
                  Medium
                </a>{" "}
                |
                <a href={x} target="_blank" rel="noopener noreferrer">
                  {" "}
                  X
                </a>
              </div>
            </div>
          </div>
          {/*  Right column */}
          <div>{bio}</div>
        </div>
      </div>
      {/* ContentGrid */}
      <div style={{ background: "white", color: "black" }}>
        <div style={{ textAlign: "right" }}>{totalArticles} Articles</div>
        <div>
          <div style={{ display: "flex" }}>
            {/*<pre>{JSON.stringify(postsFromContributor, null, 2)}</pre>*/}

            {Object.keys(postsFromContributor).map(key =>
              postsFromContributor[key].map((item, i) => (
                <div
                  key={i}
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    margin: "10px",
                    padding: "15px",
                    backgroundColor: "#fff",
                    transition: "transform 0.2s",
                    cursor: "pointer",
                  }}
                >
                  <EpisodeFeaturedImage src={getImage(item.featuredImage)} />
                  <ContentSummary contentType={key} content={item}/>
                  <Authors authors={item.authors} />

                </div>
              )),
            )}
          </div>
        </div>
      </div>


      {/* Content block*/}
      <div style={{ background: "white", color: "black" }}>
        <div style={{ textAlign: "right" }}>{totalArticles} Articles</div>
        <div>
          <div style={{ display: "flex" }}>
            {/*<pre>{JSON.stringify(postsFromContributor, null, 2)}</pre>*/}

            {Object.keys(postsFromContributor).map(key =>
              postsFromContributor[key].map((item, i) => (
                <div
                  key={i}
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    margin: "10px",
                    padding: "15px",
                    backgroundColor: "#fff",
                    transition: "transform 0.2s",
                    cursor: "pointer",
                  }}
                >
                  <div>{item.featuredImage ? (<img style={{ width: 324, height: 319 }} src={getImage(item.featuredImage)} />) : null}</div>
                  <p style={{ fontSize: "14px", fontWeight: "bold" }}>{key}</p>
                  <h1 style={{ fontSize: "18px", margin: "10px 0" }}>{item.title}</h1>
                  {/* TODO: Update collections so all use "summary" */}
                  {key === "Blogposts" ? (
                    <p style={{ fontSize: "16px", color: "#555" }}>{item.summary}</p>
                  ) : (
                    <p style={{ fontSize: "16px", color: "#555" }}>{item.episodeSummary}</p>
                  )}

                  <div>
                    {Array.isArray(item.categories) && item.categories.length > 0
                      ? item.categories.map((category, i) => (
                        <p key={i} style={{ fontSize: "14px", color: "#007bff" }}>
                          {category.title}
                        </p>
                      ))
                      : null}
                  </div>
                  <div>
                    <div>
                      {formatDateTime(item.publishedAt)} |{" "}
                      {key === "Blogposts" ? <span>ReadTime</span> : <span>Duration</span>}
                    </div>
                  </div>
                  <div>
                    <div style={{ display: "flex" }}>
                      {item.authors.map((author, i) => (
                        <AuthorPill key={i} author={author} />
                      ))}
                    </div>
                  </div>
                </div>
              )),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
