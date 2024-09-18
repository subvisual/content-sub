import React from "react";
import { fetchDoc } from "@/app/_api/fetchDoc";
import { notFound } from "next/navigation";

export default async function TalksAndRoundTablesPage({ params: { slug } }) {

  let content = null;

  try {
    content = await fetchDoc({
        collection: "talks-and-roundtables",
        slug: slug,
      },
    );
  } catch (err) {
    console.error(err);
  }

  if (!content) {
    notFound()
  }

  return (
    <div>
      Hello, world!
      <pre>{JSON.stringify(content, null, 2)}</pre>
    </div>
  );
}
