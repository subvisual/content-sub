import { MEDIA_FIELDS } from "./media";

export const CONTRIBUTORS = `
  query Contributor {
    Contributors(limit: 10) {
      docs {
        id
        name
        }
    }
  }
`

export const CONTRIBUTOR = `
  query Contributor($slug: String) {
   Contributors(where: { slug: { equals: $slug }}) {
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
