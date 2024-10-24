"use client";
import { CloseIcon, MagnifyingGlass } from "../../_icons/icons";
import styles from "./styles.module.css";
import React, { DetailedHTMLProps, Ref, useEffect, useRef, useState } from "react";
import { filterContent } from "../../_utilities/filterContent";
import Fuse from "fuse.js";
import MicroContentCard from "./Components/MicroContentCard";
import CategoryPill from "../../_components/CategoryPill";
import { Blogpost, CaseStudy, Podcast, TalksAndRoundtable } from "@/payload-types";
import MobileCloseButton from "@/app/_components/SearchBar/Components/CloseButton";

// Setup Fuse.js search options and weights
// Detailed information on Fuse.JS metrics can be found on the docs
// here: https://www.fusejs.io/api/options.html
const fuseOptions = {
  includeScore: true,
  minMatchCharLength: 3,
  distance: 1000,
  threshold: 0.1,
  keys: [
    { name: "content.title", weight: 0.3 },
    { name: "contentType", weight: 0.3 },
    { name: "content.summary", weight: 0.3 },
    { name: "content.authors.name", weight: 0.1 },
    { name: "content.categories.title", weight: 0.8 },
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

function setupDynamicCSS(condition) {
  return {
    "--dynamic-border-width": condition ? "0 0 1px" : "1px",
    "--dynamic-border-radius": condition ? "0px" : "25px",
    "--dynamic-border-color": condition ? "1px solid var(--soft-white-100)" : "1px solid var(--dark-rock-800)",
    "--dynamic-position": condition ? "fixed" : "relative",
    "--dynamic-height": condition ? "80vh" : "auto",
  } as React.CSSProperties;
}


export default function SearchBar({ currentContent, highlights, categories }) {
  // TODO: refactor content filtering to prompt "load more" on content hub by increasing content limit instead of refetching data via 2 different components
  const [filteredContent, setFilteredContent] = useState(filterContent({ articles: currentContent, filter: "All" }));
  const [searching, setSearching] = useState(false);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Array<SearchResults>>([]);
  const [filtering, setFiltering] = useState(false);
  const [activeCategory, setActiveCategory] = useState("");
  const dynamicCSS = setupDynamicCSS(searching);

  // Isolate the 3 most recent content pieces to display as suggested content
  const mostRecentContent = filteredContent
    // Given Payload type structure for dates which only considers
    // string | null | undefined a TS error is expected
    // @ts-expect-error
    .sort((a, b) => new Date(b.content.publishedAt) - new Date(a.content.publishedAt))
    .slice(0, 3);


  // Handle content searching and filtering

  // Generate a new instance of Fuse.JS to parse preloaded content
  const fuseSearch = new Fuse(filteredContent, fuseOptions);

  function handleInputChange(e) {
    setQuery(e.target.value);
  }

  useEffect(() => {
    const debouncedSearch = setTimeout(() => {
      setSearchResults(fuseSearch.search(query).slice(0, 3));
    }, 300);

    return () => clearTimeout(debouncedSearch); // Cleanup timeout
    // supressing ESLint error as fuseSearch is not required as a dependency as it is static
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);


  // Handle search box state management when clicking outside the component
  const searchBoxRef: Ref<any> = useRef(null);
  useEffect(() => {

    const handleClickOutsideBox = (e) => {
      console.log(e.target);
      if (e.target.id === "searchInput" || e.target.id === "searchBox" || e.target.id === "categoryPill") {
        return;
      }

      if (searchBoxRef.current && !searchBoxRef.current.contains(e.target)) {
        setQuery("");
        setSearching(false);

      }
    };

    document.addEventListener("click", handleClickOutsideBox);
    return () => {
      document.removeEventListener("click", handleClickOutsideBox);
    };
  }, []);

  // Handle content filtering when clicking category pills
  function handleCategoryClick(e) {
    const title = e.target.innerText;
    setFiltering(true);
    setActiveCategory(title);
    setSearchResults(fuseSearch.search(title ?? "").slice(0, 3));
  }

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer} style={dynamicCSS} ref={searchBoxRef}>

        {/* Conditionally render Close Button component for mobile search menu */}
        {searching && (
          <div className={styles.closeButtonContainer}>
            <button onClick={() => {
              setSearching(false);
              setActiveCategory("");
              setFiltering(false);
            }}>
              <MobileCloseButton />
            </button>
          </div>
        )}

        {/* Search bar */}
        <div className={styles.searchBar} style={dynamicCSS}>
          <MagnifyingGlass width={"34px"} height={"34px"} />
          <input
            className={styles.searchInput}
            placeholder="What are you looking for?"
            onClick={() => setSearching(true)}
            onChange={handleInputChange}
            value={query}
            id="searchInput"
          />
          {searching && (
            <button className={styles.closeIcon} onClick={() => setSearching(false)}>
              <CloseIcon />
            </button>
          )}
        </div>

        {/* Conditionally render Search Bar expansion and Search Box */}
        {searching && (
          <div className={styles.searchBox} id="searchBox">

            {/* If a search session is initialized show only most recent content
              and list categories that can be used to filter content, performing
              a quick search for the selected category name.
              */}
            {query.length < 1 ? (
              <>
                <p>Recommended topics</p>
                <div className={styles.recommendedTopics}>
                  {categories.map((category, i) => (
                    <button key={i} onClick={(e) => handleCategoryClick(e)}>
                      <CategoryPill
                        id="categoryPill"
                        title={category}
                        selected={filtering && activeCategory === category}
                        setActiveFilter={setFiltering}
                        setActiveCategory={setActiveCategory}
                      />
                    </button>
                  ))}
                </div>

                {/*  Handle content filtering by category. If filtering is disabled then
                     reset the search results to show only the most recent content  */}
                {filtering ? (
                  <>
                    <p>Results</p>
                    <div className={styles.searchResults}>
                      {searchResults.map((article, i) => (
                        <MicroContentCard key={i} article={article.item} />
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <p>Suggestions</p>
                    <div className={styles.mostRecent}>
                      {mostRecentContent.map((article, i) => (
                        <MicroContentCard key={i} article={article} />
                      ))}
                    </div>
                  </>
                )}
              </>
            ) : (

              /* On user input the most recent content morphs from card to title and is displayed
              * as content suggestions. While no search matches are found the selected highlighted content
              * that typically shows on the head of the content hub is rendered as recommended content
              * */

              <>
                {searchResults.length ? (
                  <>
                    <div className={styles.searchSuggestions}>
                      <p>Suggestions</p>
                      {mostRecentContent.map((article, i) => (
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
                      {mostRecentContent.map((article, i) => (
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
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );

}
