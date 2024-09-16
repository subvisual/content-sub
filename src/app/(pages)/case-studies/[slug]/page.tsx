import React from "react";
import { fetchDoc } from "@/app/_api/fetchDoc";
import { notFound } from "next/navigation";

export default async function CaseStudiesPage ({params: { slug }}) {

  let casestudy = null

  try {
    casestudy = await fetchDoc({
      collection: "case-studies",
      slug,
      });
  } catch (err) {
    console.error(err);
  }

  if (!casestudy) {
    notFound()
  }

  return (
    <div>
      This is the "case-studies/{casestudy.slug}" page.
      <pre>{JSON.stringify(casestudy, null, 2)}</pre>
    </div>
  )
}
