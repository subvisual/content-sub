"use client";
import { MagnifyingGlass } from "../../_icons/icons";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { filterContent } from "@/app/_utilities/filterContent";
import Fuse from "fuse.js";
import MicroContentCard from "@/app/_components/SearchBar/MicroContentCard";
import CategoryPill from "@/app/_components/CategoryPill";

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

export default function SearchBar({ currentContent, highlights, categories }) {
  const [filteredContent, setFilteredContent] = useState(filterContent({ articles: currentContent, filter: "All" }));
  const [isActive, setIsActive] = useState(false);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const mostRecent = filteredContent
    .sort((a, b) => new Date(b.content.publishedAt) - new Date(a.content.publishedAt))
    .slice(0, 3);

  const dynamicBorder = {
    "--dynamic-border-radius": isActive ? "0px" : "100px",
    "--dynamic-border-color": isActive ? "1px solid var(--soft-white-100)" : "1px solid var(--dark-rock-800)",
  };

  const dynamicDisplay = {
    "--dynamic-display": isActive ? "flex" : "none",
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

  return (
    <div className={styles.container} onFocus={() => setIsActive(!isActive)} onBlur={() => setIsActive(!isActive)}>
      <div className={styles.searchBar} style={dynamicBorder} >
        <MagnifyingGlass />
        <input
          className={styles.searchInput}
          placeholder="What are you looking for?"

          // onBlur={() => setIsActive(false)}
          onChange={handleChange}
          value={query}
        />
      </div>

      {/* Search box */}
      <div className={styles.searchBox} style={dynamicDisplay}>
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
                <p key={i} onClick={() => setQuery(article.content.title)}>
                  {article.content.title}
                </p>
              ))}
            </div>

            <p>Results</p>
            <div className={styles.searchResults}>
              {searchResults.map((item, i) => (
                <MicroContentCard key={i} article={item.item} />
              ))}
            </div>
          </>
        ) : (
          <>
            <div className={styles.searchSuggestions}>
              <p>Suggestions</p>
              {mostRecent.map((article, i) => (
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
      </div>
    </div>
  );
}
