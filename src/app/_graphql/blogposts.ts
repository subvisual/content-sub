import { MEDIA_FIELDS } from './media'

export const BLOGPOST = `
  query Blogpost ($slug: String) {
    Blogposts(where: { slug: { equals: $slug }}) {
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
          featuredImage {
            ${MEDIA_FIELDS}
          }
        }
        categories {
          title
        }
        relatedPosts {
          id
          slug
          title
          summary
          authors {
            name
            featuredImage {
              filename
            }
          }
          categories {
            title
          }
          featuredImage {
            filename
          }
        }
        publishedAt
        featuredImage {
          ${MEDIA_FIELDS}
        }
        content_html
        createdAt
        updatedAt
      }
    }
  }
`
