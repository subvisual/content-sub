import { fetchAllContentByType, fetchGlobals } from "@/app/_utilities/contentFetchers";
import HubContentGrid from "@/app/_blocks/HubContentGrid";
import HubHead from "@/app/_blocks/HubHead";
import SearchBar from "@/app/_components/SearchBar";
import { Header } from "@/app/_components/Header";
import { Metadata } from "next";
import { Category } from "@/payload-types";

export const dynamic = "force-dynamic";
export const revalidate = 0;


export default async function Page() {

  const content = {
    Blogposts: await fetchAllContentByType("blogposts"),
    Podcasts: await fetchAllContentByType("podcasts"),
    CaseStudies: await fetchAllContentByType("case-studies"),
    TalksAndRoundtables: await fetchAllContentByType("talks-and-roundtables"),
  };

  const highlights = await fetchGlobals("homepage-settings", 3);
  const categories = await fetchAllContentByType('categories').then((res: Category[]) => res.map((item: Category) => item.title))


  return (

    <div>
      <Header />

      <HubHead highlights={highlights} />

      {/* Search Bar*/}
      <SearchBar currentContent={content} highlights={highlights} categories={categories}/>


      {/* Content Grid*/}
      <HubContentGrid content={content} />

    </div>
  );
}
