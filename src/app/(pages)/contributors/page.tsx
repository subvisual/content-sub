import React from "react";

import type { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { GRAPHQL_API_URL } from "../../_api/shared";
import { notFound } from "next/navigation";

import { payloadToken } from "@/app/_api/token";

const query = `
  query Contributor {
   Contributors {
    docs {
     id,
     name
     }
    }
   }
`;

async function fetchContributors() {

  let token: RequestCookie | undefined

  try {
    const response = await fetch(`${GRAPHQL_API_URL}/api/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null; // Or handle error as needed
  }
}


export default async function ContributorsPage() {

  let contributors = null
  let theMessage = undefined

  try {
    contributors = await fetchContributors();

  } catch (err) {
    theMessage = "Nope!";
    console.error(err);
  }

  if (!contributors) {
    notFound()
  }

  return (

    <div>
      Contributors Page
      <pre>{JSON.stringify(contributors, null, 2)}</pre>
    </div>

  )
}
