export const CONTENT_BY_AUTHOR = `
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
      }
    }
    Blogposts(
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
