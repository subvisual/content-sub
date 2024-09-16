import React from "react";
import { fetchDoc } from "@/app/_api/fetchDoc";
import { notFound } from "next/navigation";

export default async function TalksAndRoundTablesPage({ params: { slug } }) {

  let talk = null;

  try {
    talk = await fetchDoc({
        collection: "talks-and-roundtables",
        slug: slug,
      },
    );
  } catch (err) {
    console.error(err);
  }

  return (
    <div>
      This is the "talks-and-roundtables/{talk.slug}" page.
      <pre>{JSON.stringify(talk, null, 2)}</pre>
    </div>
  );
}
