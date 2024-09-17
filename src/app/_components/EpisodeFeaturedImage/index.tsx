import React from "react";

export default function EpisodeFeaturedImage({ src, w = "264px", h = "264px" }) {
  return (
    <div style={{ flexShrink: 0 }}>
      <img style={{ width: w, height: w }} src={src} alt="Featured" />
    </div>
  )
}

