import { MEDIA_FIELDS } from "@/app/_graphql/media";

export const CONTENT_FROM_AUTHOR = `
  query GetContent($authorID: JSON!) {
    PodcastEpisodes(
      limit: 100,
      where: {
        authors: { in: [$authorID] }
      }) {
      docs {
        id
        title
        authors {
          name
        }
        categories {
          title
        }
        authors {
          featuredImage {
            ${MEDIA_FIELDS}
          }
          name
          slug
        }
        publishedAt
        featuredImage {
          ${MEDIA_FIELDS}
        }
        episodeSummary
        episodeFile {
          ${MEDIA_FIELDS}
        }
        slug
      }
    }
    Blogposts(
      limit: 100,
      where: {
        authors: { in: [$authorID] }
      }) {
      docs {
        id
        featuredImage {
          ${MEDIA_FIELDS}
        }
        slug
        title
        summary
        categories {
          title
        }
        publishedAt
        authors {
          featuredImage {
            ${MEDIA_FIELDS}
          }
          name
          slug
        }
      }
    }
    CaseStudies(
      limit: 100,
      where: {
        authors: { in: [$authorID] }
      }) {
      docs {
        id
        title
        authors {
          featuredImage {
            ${MEDIA_FIELDS}
          }
          name
          slug
        }
      }
    }
    TalksAndRoundtables(
      limit: 100,
      where: {
        authors: { in: [$authorID] }
      }) {
      docs {
        id
        title
        authors {
          featuredImage {
            ${MEDIA_FIELDS}
          }
          name
          slug
        }
      }
    }
  }
`
