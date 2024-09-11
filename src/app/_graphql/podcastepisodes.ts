// TODO: Figure out refering to contributors and media files.

export const PODCAST_EPISODES = `
  query PodcastEpisodes {
    PodcastEpisodes(limit: 300) {
      docs {
        slug
      }
    }
  }
`

export const PODCAST_EPISODE = `
  query PodcastEpisode ($slug: String) {
    PodcastEpisodes(where: { slug: { equals: $slug }}) {
      docs {
        id
        title
        slug
        category {
          title
        }
        contributors {
          name
          role
        }
        publishedAt
        createdAt
        updatedAt
      }
    }
  }
`
