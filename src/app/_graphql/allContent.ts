import { MEDIA_FIELDS } from "@/app/_graphql/media";

export const ALL_CONTENT = `
query Content {
  PodcastEpisodes {
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
  Blogposts {
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
  CaseStudies {
    docs {
      id
      slug
    }
  }
  TalksAndRoundtables {
    docs {
      id
      slug
    }
  }
}
`
