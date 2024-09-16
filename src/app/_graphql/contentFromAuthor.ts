export const CONTENT_BY_AUTHOR = `
  query GetContent($authorID: JSON!) {
    PodcastEpisodes(
      limit: 100,
      where: {
        contributors: { in: [$authorID] }
      }) {
      docs {
        id
        title
        contributors {
          name
        }
      }
    }
    Blogposts(
      limit: 100,
      where: {
        contributors: { in: [$authorID] }
      }) {
      docs {
        id
        title
        contributors {
          name
        }
      }
    }
    CaseStudies(
      limit: 100,
      where: {
        contributors: { in: [$authorID] }
      }) {
      docs {
        id
        title
        contributors {
          name
        }
      }
    }
    TalksAndRoundtables(
      limit: 100,
      where: {
        contributors: { in: [$authorID] }
      }) {
      docs {
        id
        title
        contributors {
          name
        }
      }
    }
  }
`
