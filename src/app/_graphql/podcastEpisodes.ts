import { MEDIA_FIELDS } from './media'

// TODO: Figure out refering to authors and media files.

export const PODCAST_EPISODES = `
  query PodcastEpisodes {
    PodcastEpisodes(limit: 300) {
      docs {
        id
        title
        slug
        episodeSummary
        episodeNotes
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

export const PODCAST_EPISODE = `
  query PodcastEpisode ($slug: String) {
    PodcastEpisodes(where: { slug: { equals: $slug }}) {
      docs {
        id
        title
        slug
        summary
        notes
        categories {
          title
        }
        authors {
          id
          name
          role
          featuredImage {
            filename
          }
          linkedIn
          gitHub
          x
          medium


        }
        featuredImage {
          ${MEDIA_FIELDS}
        }
        episodeFile {
          ${MEDIA_FIELDS}
        }
        relatedEpisodes {
          id
          slug
          title
        }
        publishedAt
        createdAt
        updatedAt
        spotify
        apple
      }
    }
  }
`
