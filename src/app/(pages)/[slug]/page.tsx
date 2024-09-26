import { Metadata } from "next";
import { draftMode } from "next/headers";


import { Page } from "../../../payload/payload-types";
import { fetchDoc } from "../../_api/fetchDoc";

import { generateMeta } from "../../_utilities/generateMeta";

import styles from "./styles.module.css";


import { Subscribe } from "@/app/_blocks/Subscribe";
import { ALL_CONTENT } from "@/app/_graphql/allContent";
import ContentCard from "@/app/_components/ContentCard";
import { fetcher } from "@/app/_utilities/fetcher";

// Payload Cloud caches all files through Cloudflare, so we don't need Next.js to cache them as well
// This means that we can turn off Next.js data caching and instead rely solely on the Cloudflare CDN
// To do this, we include the `no-cache` header on the fetch requests used to get the data for this page
// But we also need to force Next.js to dynamically render this page on each request for preview mode to work
// See https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
// If you are not using Payload Cloud then this line can be removed, see `../../../README.md#cache`
export const dynamic = "force-dynamic";


export default async function Page({ params: { slug = "home" } }) {
  const content = await fetcher({ query: ALL_CONTENT });

  const content_list = Object.keys(content).flatMap(key =>
    content[key].map(content => ({
      contentType: key,
      content: content,
    })));


  return (
    <div>
      {/* Head Block*/}
      <div className={styles.headBlock}>
        <div className={styles.imageContainer}>
          <img className={styles.topImage} src={"/contenthub-top-img.png"} />
        </div>

        {/*  Top Highlight  */}
        <div className={`${styles.highlights} ${styles.topHighlight}`}>
          <p> HIGHLIGHTS </p>
          <h5> From nutritionist to product designer: Reinvinting my carrer at 30</h5>
          <p>
            <span className={styles.categoryPill}>Inside subvisual</span> Date and Readtime{" "}
          </p>
          <div className={styles.authorPill}>
            <img className={styles.authorImage} src={"/static-image.jpg"} />
            Rui Sousa
          </div>
        </div>

        {/*  Bottom Highlight */}
        <div className={`${styles.highlights} ${styles.bottomHighlight}`}>
          <p> HIGHLIGHTS </p>
          <p>
            {" "}
            From nutritionist to product designer: <br /> Reinvinting my carrer at 30
          </p>
          <p>
            <span className={styles.categoryPill}>Inside subvisual</span> Date and Readtime{" "}
          </p>
          <div className={styles.authorPill}>
            <img className={styles.authorImage} src={"/static-image.jpg"} />
            Rui Sousa
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div>
        {content_list.map((article, i) => (
          <ContentCard key={i} contentType={article.key} content={article.content} />
        ))}
      </div>
      <Subscribe />
    </div>
  );
}

export async function generateMetadata({ params: { slug = "home" } }): Promise<Metadata> {
  const { isEnabled: isDraftMode } = draftMode();

  let page: Page | null = null;

  try {
    page = await fetchDoc<Page>({
      collection: "pages",
      slug,
      draft: isDraftMode,
    });
  } catch (error) {
    // don't throw an error if the fetch fails
    // this is so that we can render static fallback pages for the demo
    // when deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // in production you may want to redirect to a 404  page or at least log the error somewhere
  }

  return generateMeta({ doc: page });
}
