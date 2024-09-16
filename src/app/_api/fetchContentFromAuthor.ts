import { GRAPHQL_API_URL } from "@/app/_api/shared";
import { CONTENT_BY_AUTHOR } from "@/app/_graphql/contentFromAuthor";

export default async function fetchContentFromAuthor(contributorID) {
  const docs = await fetch(`${GRAPHQL_API_URL}/api/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: CONTENT_BY_AUTHOR,
      variables: { authorID: contributorID },
    }),
  })
    .then(res => res.json())

  return docs
}
