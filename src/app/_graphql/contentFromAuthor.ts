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
          name
        }
        publishedAt
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
        slug
        title
        summary
        categories {
          title
        }
        publishedAt
        authors {
          name
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
          name
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
          name
        }
      }
    }
  }
`
