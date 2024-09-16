import React from "react";
import { fetchDoc } from "@/app/_api/fetchDoc";
import { notFound } from "next/navigation";

export default async function CaseStudiesPage ({params: { slug }}) {

  let content = null

  try {
    content = await fetchDoc({
      collection: "case-studies",
      slug,
      });
  } catch (err) {
    console.error(err);
  }

  if (!content) {
    notFound()
  }

  return (
    <div>
      <pre>{JSON.stringify(content, null, 2)}</pre>
    </div>
  )
}
