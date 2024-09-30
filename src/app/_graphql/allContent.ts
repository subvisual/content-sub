export const ALL_CONTENT = `
query Content {
  PodcastEpisodes (limit: 50){
    docs {
      id
      slug
      title
      summary
      categories {
        title
      }
      publishedAt
      featuredImage {
        filename
      }
      authors {
        name
        featuredImage {
          filename
        }
      }
    }
  }
  Blogposts (limit: 50){
    docs {
      id
      slug
      title
      summary
      categories {
        title
      }
      publishedAt
      featuredImage {
        filename
      }
      authors {
        name
        featuredImage {
          filename
        }
      }
    }
  }
  CaseStudies (limit: 50){
    docs {
      id
      slug
    }
  }
  TalksAndRoundtables (limit: 50){
    docs {
      id
      slug
    }
  }
}
`
