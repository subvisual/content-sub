import type {
  Blogpost,
  CaseStudy,
  Podcast,
  TalksAndRoundtable,
} from '@/payload-types'

interface ArticleFilterProps {
  articles: {
    Blogposts: Blogpost[]
    Podcasts: Podcast[]
    CaseStudies: CaseStudy[]
    TalksAndRoundtables: TalksAndRoundtable[]
  }
  filter: 'All' | 'Blogposts' | 'Podcasts' | 'TalksAndRoundtables' | 'CaseStudies'
}

export function filterContent({ articles, filter = 'All' }: ArticleFilterProps): Array<{
  contentType: 'Blogposts' | 'Podcasts' | 'CaseStudies' | 'TalksAndRoundtables'
  content: Blogpost | Podcast | CaseStudy | TalksAndRoundtable
}> {
  if (filter === 'All') {


    return Object.keys(articles).flatMap(
      articleType =>
        articles[articleType].map(article => ({
          contentType: articleType,
          content: article,
        })),
      undefined,
    )
  }

  return articles[filter]?.map(article => ({
    contentType: filter,
    content: article,
  }))
}
