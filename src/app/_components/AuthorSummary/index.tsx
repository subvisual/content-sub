import React from "react";
import FeaturedImage from "@/app/_components/FeaturedImage";


export default function AuthorSummary({ author }) {

  const {
    name, role, bio, linkedin, github, medium, x, featuredImage,
  } = author;

  return (
    <div style={{ display: "flex" }}>
      {/* Left column */}
      <div style={{ display: "flex", alignItems: "center", flex: "1" }}>
        {/* Image container */}
        <FeaturedImage src={featuredImage} />
        <div style={{ marginLeft: "10px" }}>
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

      {/* Right column */}
      <div style={{ marginLeft: "auto", flex: "1" }}>{bio}</div>
    </div>
  );
}
