import { CONTENT_BY_AUTHOR } from "../_graphql/contentFromAuthor";
import { GRAPHQL_API_URL } from "./shared";

export default async function fetchContentFromAuthor<T>({ contributorID }): Promise<T> {
  return await fetch(`${GRAPHQL_API_URL}/api/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: CONTENT_BY_AUTHOR,
      variables: { authorID: contributorID },
    }),
  }).then(res => res.json())
}
