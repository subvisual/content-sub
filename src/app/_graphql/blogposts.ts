import { MEDIA_FIELDS } from "./media"

export const BLOGPOST = `
  query Blogpost {
    Blogposts {
      docs {
        id
        title
        slug
        summary
        content
        featuredImage {
          ${MEDIA_FIELDS}
        }
        authors {
          name
          role
        }
        categories {
          title
        }
        relatedPosts {
          id
          slug
          title
        }
        publishedAt
        featuredImage {
          ${MEDIA_FIELDS}
        }
        createdAt
        updatedAt
      }
    }
  }
`
