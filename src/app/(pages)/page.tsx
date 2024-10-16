import PageTemplate from './[slug]/page'

export const dynamic = 'auto'
export const revalidate = 10

export default PageTemplate

// export { generateMetadata }
//
// import configPromise from '@payload-config'
// import { getPayloadHMR } from "@payloadcms/next/utilities";
// import FeaturedImage from "@/app/_components/FeaturedImage";
// export default async function Page() {
//
//   const payload = await getPayloadHMR({config: configPromise})
//   const media = await payload.find({
//     collection: 'media'
//   })
//   const authors = await payload.find({
//     collection: 'authors'
//   }).then(res => res.docs[0])
//
//   return (
//         <div>
//           <h5>Hello</h5>
//           {/*{media && <pre>{JSON.stringify(media, null, 2)}</pre>}*/}
//           {authors && <pre>{JSON.stringify(authors.featuredImage.url, null, 2)}</pre>}
//           <FeaturedImage src={authors.featuredImage.url}/>
//
//
//
//         </div>
//     )
// }
