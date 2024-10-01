import { ContentTypes } from "../_interfaces/ContentTypes";

interface ArticleFilterProps {
  articles: ContentTypes
  filter: keyof ContentTypes | 'All'
}

  export function filterArticles<T extends keyof ContentTypes>({ articles, filter = 'All' }: ArticleFilterProps) : { contentType: string, content: ContentTypes | ContentTypes[T] } {
  // redundant?
  const validFilters = ['All', 'Blogposts', 'PodcastEpisodes', 'CaseStudies', 'TalksAndRoundtables']

  if (!validFilters.includes(filter)) {
    throw new Error('Not a valid filter')
  }

  if (filter === 'All') {
    return Object.keys(articles).flatMap(articleType =>
      articles[articleType].map(article => ({
        contentType: articleType,
        content: article,
      })),)
  }

  return articles[filter]?.map(article => ({
    contentType: filter,
    content: article,
  }))
}
