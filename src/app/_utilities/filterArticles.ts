import type { ContentTypeArrays } from '../_interfaces/ContentTypeArrays'

import type {
  Blogpost,
  CaseStudy,
  PodcastEpisode,
  TalksAndRoundtable,
} from '@/payload/payload-types'

interface ArticleFilterProps {
  articles: {
    Blogposts: Blogpost[]
    PodcastEpisodes: PodcastEpisode[]
    CaseStudies: CaseStudy[]
    TalksAndRoundtables: TalksAndRoundtable[]
  }
  filter: 'All' | 'Blogposts' | 'PodcastEpisodes' | 'TalksAndRoundtables' | 'CaseStudies'
}

export function filterArticles({ articles, filter = 'All' }: ArticleFilterProps): Array<{
  contentType: 'Blogposts' | 'PodcastEpisodes' | 'CaseStudies' | 'TalksAndRoundtables'
  content: Blogpost | PodcastEpisode | CaseStudy | TalksAndRoundtable
}> {
  if (filter === 'All') {
    const keys = Object.keys(articles) as Array<keyof ArticleFilterProps['articles']>

    return keys.flatMap(articleType =>
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
