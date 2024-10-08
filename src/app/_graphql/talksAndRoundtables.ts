export const TALK = `
  query TalksAndRoundtable($slug: String) {
    TalksAndRoundtables(where: { slug: { equals: $slug } }) {
      docs {
        id
        slug
        title
        about
        authors {
          id
          name
          role
        }
        categories {
          title
        }
        url
      }
    }
  }
`
