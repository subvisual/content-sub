import type {
  Blogpost,
  CaseStudy,
  PodcastEpisode,
  TalksAndRoundtable,
} from '../../payload/payload-types'

interface ArticleFilterProps {
  articles: {
    Blogposts: Blogpost[]
    PodcastEpisodes: PodcastEpisode[]
    CaseStudies: CaseStudy[]
    TalksAndRoundtables: TalksAndRoundtable[]
  }
  filter: 'All' | 'Blogposts' | 'PodcastEpisodes' | 'CaseStudies' | 'TalksAndRoundtables'
}

export function filterArticles({ articles, filter = 'All' }: ArticleFilterProps) {
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
