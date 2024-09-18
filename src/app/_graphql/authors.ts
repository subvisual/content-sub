import { MEDIA_FIELDS } from './media'

export const Authors = `
  query Author {
    Authors(limit: 10) {
      docs {
        id
        name
        }
    }
  }
`

export const AUTHOR = `
  query Author($slug: String) {
   Authors(where: { slug: { equals: $slug }}) {
    docs {
     id
     name
     featuredImage {
          ${MEDIA_FIELDS}
        }
     role
     bio
     linkedIn
     x
     gitHub
     medium
     slug
     }
   }
  }
`
