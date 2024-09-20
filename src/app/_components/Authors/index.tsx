import AuthorPill from "@/app/_components/AuthorPill";
import React from "react";

export default function Authors({authors}) {
  return (
    <div>
      <div style={{ display: 'flex' }}>
        {authors.map((author, i) => (
          <AuthorPill key={i} author={author} />
        ))}
      </div>
    </div>
  )
}
