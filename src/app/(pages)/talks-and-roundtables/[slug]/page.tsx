import { fetchContentBySlug } from "@/app/_utilities/contentFetchers";

export const dynamic = 'force-dynamic'



export default async function TalksAndRoundTablesPage({params : paramsPromise}) {
  const { slug } = await paramsPromise
  const talk = await fetchContentBySlug({
    slug: slug,
    type: 'talks-and-roundtables',
  })


  return (
    <div>
      {/*<pre>{JSON.stringify(talk, null, 2)}</pre>*!/*/}
    </div>
  )
}
