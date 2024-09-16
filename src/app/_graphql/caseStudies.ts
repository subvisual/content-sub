export const CASE_STUDY = `
  query CaseStudy($slug: String) {
    CaseStudies(where: { slug: { equals: $slug } }) {
      docs {
        id
        slug
        title
        summary
        categories {
          title
        }
        createdAt
        updatedAt
      }
    }
  }
`
