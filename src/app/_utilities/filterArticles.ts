import { ContentTypes } from '../_interfaces/ContentTypes'

interface ArticleFilterProps<T extends keyof ContentTypes> {
  articles: ContentTypes
  filter: T | 'All'
}

export function filterArticles<T extends keyof ContentTypes>({
  articles,
  filter = 'All',
}: ArticleFilterProps<T>) {
  // redundant?
  /* const validFilters = ['All', 'Blogposts', 'PodcastEpisodes', 'CaseStudies', 'TalksAndRoundtables']

  if (!validFilters.includes(filter)) {
    throw new Error('Not a valid filter')
  } */

  if (filter === 'All') {
    //let k = Object.keys(articles) as unknown as keyof ContentTypes[]

    /* return Object.keys(articles).flatMap(articleType =>
      articles[articleType as keyof ContentTypes].map(article => ({
        contentType: articleType,
        content: article,
      })),
    ) */

    return {
      contentType: 'All',
      content: Object.keys(articles).flatMap(
        articleType => articles[articleType as keyof ContentTypes],
      ),
    }
  }

  return {
    contentType: filter,
    content: articles[filter],
  }

  /* return articles[filter].map(article => ({
    contentType: filter,
    content: article,
  })) */
}
