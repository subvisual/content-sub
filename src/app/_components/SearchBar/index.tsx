"use client";
import { CloseIcon, MagnifyingGlass } from "../../_icons/icons";
import styles from "./styles.module.css";
import { DetailedHTMLProps, Ref, useEffect, useRef, useState } from "react";
import { filterContent } from "@/app/_utilities/filterContent";
import Fuse from "fuse.js";
import MicroContentCard from "src/app/_components/SearchBar/Components/MicroContentCard";
import CategoryPill from "@/app/_components/CategoryPill";
import { Blogpost, CaseStudy, Podcast, TalksAndRoundtable } from "@/payload-types";

// Setup Fuse.js search options and weights
const fuseOptions = {
  includeScore: true,
  minMatchCharLength: 3,
  distance: 1000,
  threshold: 0.1,
  keys: [
    { name: "content.title", weight: 0.3 },
    { name: "contentType", weight: 0.3 },
    { name: "content.summary", weight: 0.3 },
    { name: "content.authors.name", weight: 0.3 },
    { name: "content.content.root.children.text", weight: 0.3 },
    { name: "content.content.root.children.children.text", weight: 0.3 },
    { name: "content.content.root.children.children.children.text", weight: 0.3 },
  ],
};

interface SearchResults {
  item: {
    contentType: string,
    content: Blogpost | Podcast | TalksAndRoundtable | CaseStudy
  };
}


export default function SearchBar({ currentContent, highlights, categories }) {
  const [filteredContent, setFilteredContent] = useState(filterContent({ articles: currentContent, filter: "All" }));
  const [isActive, setIsActive] = useState(false);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Array<SearchResults>>([]);

  const mostRecent = filteredContent
    // Given Payload type structure for dates which only considers
    // string | null | undefined a TS error is expected
    // @ts-expect-error
    .sort((a, b) => new Date(b.content.publishedAt) - new Date(a.content.publishedAt))
    .slice(0, 3);

  const dynamicStyles: DetailedHTMLProps<any, any> = {
    "--dynamic-border-radius": isActive ? "0px" : "100px",
    "--dynamic-border-color": isActive ? "1px solid var(--soft-white-100)" : "1px solid var(--dark-rock-800)",
    "--dynamic-position": isActive ? "fixed" : "relative",
  };

  useEffect(() => {
    const fuseSearch = new Fuse(filteredContent, fuseOptions);
    const debouncedSearch = setTimeout(() => {
      setSearchResults(fuseSearch.search(query).slice(0, 3));
    }, 300);

    return () => clearTimeout(debouncedSearch); // Cleanup timeout
  }, [query, filteredContent]);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  const searchBoxRef: Ref<any> = useRef(null);

  useEffect(() => {
    const handleClickoutside = (e) => {
      console.log("event triggered");
      console.log(e.target);
      if (e.target.id === "searchInput" || e.target.id === "searchBox") {
        return;
      }

      if (searchBoxRef.current && !searchBoxRef.current.contains(e.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener("click", handleClickoutside);
    return () => {
      document.removeEventListener("click", handleClickoutside);
    };
  }, []);


  return (
    <div className={styles.container}>
      {/*<pre>{JSON.stringify(searchResults, null, 2)}</pre>*/}
      <div className={styles.searchContainer} style={dynamicStyles}>

        <div className={styles.searchBar} style={dynamicStyles}>
          <MagnifyingGlass />
          <input
            className={styles.searchInput}
            placeholder="What are you looking for?"
            onClick={() => setIsActive(true)}
            onChange={handleChange}
            value={query}
            id={"searchInput"}
          />

          {isActive && (
            <button onClick={() => setIsActive(false)}><CloseIcon /></button>
          )}

        </div>

        {/* Search box */}
        {isActive && (<div
          className={styles.searchBox}
          id={"searchBox"}
          ref={searchBoxRef}
        >
          {query.length < 1 && (
            <div>
              <p>Recommended topics</p>
              <div className={styles.recommendedTopics}>
                {categories.map((category, i) => (
                  <CategoryPill key={i} title={category} />
                ))}
              </div>

              <p style={{ marginTop: "20px" }}>Suggestions</p>
              <div className={styles.mostRecent}>
                {mostRecent.map((article, i) => (
                  <MicroContentCard key={i} article={article} />
                ))}
              </div>
            </div>
          )}

          {/* Render results if there are search results */}
          {query.length >= 1 && (searchResults.length ? (
            <>
              <div className={styles.searchSuggestions}>
                <p>Suggestions</p>
                {mostRecent.map((article, i) => (
                  // Expect Typescript errors given the types that title can assume
                  // @ts-expect-error
                  <p key={i} onClick={() => setQuery(article.content.title)}>
                    {article.content.title}
                  </p>
                ))}
              </div>

              <p>Results</p>
              <div className={styles.searchResults}>
                {searchResults.map((article, i) => (
                  <MicroContentCard key={i} article={article.item} />
                ))}
              </div>
            </>
          ) : (
            <>
              <div className={styles.searchSuggestions}>
                <p>Suggestions</p>
                {mostRecent.map((article, i) => (
                  // Expect Typescript errors given the types that title can assume
                  // @ts-expect-error
                  <p key={i} onClick={() => setQuery(article.content.title)}>
                    {article.content.title}
                  </p>
                ))}
              </div>

              <p>Recommended</p>
              <div className={styles.searchResults}>
                <MicroContentCard article={highlights.mainHighlight} />
                <MicroContentCard article={highlights.secondaryHighlight} />
              </div>
            </>
          ))}
        </div>)}
      </div>
    </div>
  );
}
