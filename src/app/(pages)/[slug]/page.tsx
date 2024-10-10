import { fetchAllContentByType, fetchAllMedia, fetchContentBySlug, fetchGlobals, fetchMediaByID } from "@/app/_utilities/contentFetchers";
import { filterContent } from "@/app/_utilities/filterContent";
import HubContentGrid from "@/app/_blocks/HubContentGrid";
import HubHead from "@/app/_blocks/HubHead";
import { getImage } from "@/app/_utilities/getImage";

export default async function Page() {

  const content = {
    Blogposts: await fetchAllContentByType("blogposts"),
    Podcasts: await fetchAllContentByType("podcasts"),
  };


  const highlights = await fetchGlobals("homepage-settings", 3);

  return (

    <div>

      <HubHead highlights={highlights} />

      {/* Search Bar*/}
      {/*<SearchBar />*/}

      {/*<pre>{JSON.stringify(articles, null, 2)}</pre>*/}

      {/* Content Grid*/}
      <HubContentGrid content={content} />
      {/*<Subscribe />*/}
    </div>


  );
}
