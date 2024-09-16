"use client"

import React from "react";

import {notFound} from "next/navigation";
import {fetchContent } from "@/app/_api/fetchContent";
import { fetchDoc } from "@/app/_api/fetchDoc";

export default async function ContributorPage({params: {slug}}) {

  let episode = null;

  try {
    episode = await fetchDoc({
      collection: "contributors",
      slug,
    });
  } catch (err) {
    console.error(err);
  }

  if (!episode) {
    notFound();
  }

  return (
    <div>
      <pre>{JSON.stringify(episode, null, 2)}</pre>
    </div>
  )
}
