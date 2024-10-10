import { fetchAllContentByType } from "@/app/_utilities/contentFetchers";
import { filterContent } from "@/app/_utilities/filterContent";
import HubContentGrid from "@/app/_blocks/HubContentGrid";
import HubHead from "@/app/_blocks/HubHead";

export default async function Page() {


  const content = {
    Blogposts: await fetchAllContentByType("blogposts"),
    Podcasts: await fetchAllContentByType("podcasts"),
  };

  const filtered = filterContent({ articles: content });

  console.log(content);




  return (

    <div>
      {/*<pre>{JSON.stringify(await fetchContentBySlug({ slug: 'socorro', type: "blogposts" }), null, 2)}</pre>*/}
      {/*<pre>{JSON.stringify(filtered*/}
      {/*  , null, 2)}</pre>*/}

      {/*{Object.keys(content).map(docs => (*/}
      {/*  docs.map(doc => (*/}
      {/*      <pre>{JSON.stringify(doc.title, null, 2)}</pre>*/}
      {/*    ),*/}
      {/*  )*/}

      {/*))}*/}


      {/*<HubHead highlights={highglights} />*/}

      {/* Search Bar*/}
      {/*<SearchBar />*/}

      {/*<pre>{JSON.stringify(articles, null, 2)}</pre>*/}

      {/* Content Grid*/}
      <HubContentGrid content={content} />
      {/*<Subscribe />*/}
    </div>


  );
}
