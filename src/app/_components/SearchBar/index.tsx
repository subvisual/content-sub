'use client'
import { MagnifyingGlass } from "../../_icons/icons";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";



export default function SearchBar() {
  const [isActive, setIsActive] = useState(true);

  const dynamicBorder = {
    '--dynamic-border-radius': isActive ? '0px' : '100px',
    '--dynamic-border-color': isActive ? '1px solid var(--soft-white-100)' : '1px solid var(--dark-rock-800)'
  }

  const dynamicDisplay = {
    '--dynamic-display': isActive ? 'flex' : 'none',
  }

  useEffect(() => {

  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.searchBar} style={dynamicBorder}>
        <MagnifyingGlass />
        <input
          className={styles.searchInput}
          placeholder={"What are you looking for?"}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
        />
      </div>
    {/*  Search box */}
      <div className={styles.searchBox} style={dynamicDisplay}>

        <div className={styles.searchSuggestions}>
          <p>Suggestions</p>
          <p>Suggestion 1</p>
          <p>Suggestion 2</p>
          <p>Suggestion 3</p>
        </div>
        <p>Results</p>
        <div className={styles.searchResults}>

          <div>
            <h5>Result 1</h5>
          </div>
          <div>
            <h5>Result 2</h5>
          </div>
        </div>


      </div>
    </div>

  );
}
