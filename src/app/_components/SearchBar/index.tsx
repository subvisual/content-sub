"use client";
import { MagnifyingGlass } from "../../_icons/icons";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { filterContent } from "@/app/_utilities/filterContent";
import Fuse from "fuse.js";
import ArchiveButton from "@/app/_components/ArchiveButton";
import Link from "next/link";
import MicroContentCard from "@/app/_components/SearchBar/MicroContentCard";

// setup Fuse.js search options and weights
const fuseOptions = {
  includeScore: true,
  minMatchCharLength: 3,
  distance: 1000,
  threshold: 0.1,
  keys: [
    {
      name: "content.title",
      weight: 0.3,
    },
    {
      name: "contentType",
      weight: 0.3,
    },
    {
      name: "content.summary",
      weight: 0.3,
    },
    {
      name: "content.authors.name",
      weight: 0.3,
    },
    // parses varying levels of lexical text nodes
    // use this instead of content_html to avoid using high distance
    // values which in turn dilute search result quality
    {
      name: "content.content.root.children.text",
      weight: 0.3,
    },
    {
      name: "content.content.root.children.children.text",
      weight: 0.3,
    },
    {
      name: "content.content.root.children.children.children.text",
      weight: 0.3,
    },
  ],
};

export default function SearchBar({ currentContent, highlights }) {

  const [filteredContent, setFilteredContent] = useState(filterContent({ articles: currentContent, filter: "All" }));

  const [isActive, setIsActive] = useState(false);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const mostRecent = filteredContent.sort((a, b) =>
    // @ts-ignore
    b.content.publishedAt - a.content.publishedAt)
    .slice(0, 3)
    .map(article => article.content.title);


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
  }, [query]);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <div className={styles.container}>
      <div className={styles.searchBar} style={dynamicBorder}>
        <MagnifyingGlass />
        <input
          className={styles.searchInput}
          placeholder={"What are you looking for?"}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(true)}
          onChange={handleChange}
          value={query}
        />
      </div>
      {/*  Search box */}
      <div className={styles.searchBox} style={dynamicDisplay}>

        <div className={styles.searchSuggestions}>
          <p>Suggestions</p>
          {mostRecent && mostRecent.map((article) => (
            <p onClick={() => setQuery(article)}>{article}</p>

          ))}

        </div>


        {/*
        Render results if and only if there are search results to show
        Otherwise render the highlights as mini cards and the most recent
        contents as search term suggestions
        */}
        {searchResults.length > 0 ? (
          <>
            <p>Results</p>
            <div className={styles.searchResults}>

              {searchResults.map((item, i) => (
                <MicroContentCard article={item.item} />
              ))}
            </div>
          </>
        ) : (
          <>
            <p>Recommended</p>
            {/*<MicroContentCard article={highlights['mainHighlight']} />*/}


          </>
        )

        }


      </div>
    </div>

  )
    ;
}
