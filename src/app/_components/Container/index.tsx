import React from "react";

export default function Container({ totalArticles, children }) {
  return <div style={{ background: "white", color: "black" }}>
    <div style={{ textAlign: "right" }}>{totalArticles} Articles</div>
    {children}
  </div>
}
