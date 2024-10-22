/* This is a WIP "handmade" weighted search option that attempts to implement
*   weighted content searching prioritizing certain fields over others
*   as an alternative to implemented libraries such as fuse.js */

// Recursive function to check all fields of an object (including subarrays)
const searchInObject = (obj, query) => {
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      // If the field is an object or array, search recursively
      if (searchInObject(obj[key], query)) {
        return true;
      }
    } else if (typeof obj[key] === "string") {
      // If it's a string, check if it contains the query
      if (obj[key].toLowerCase().includes(query.toLowerCase())) {
        return true;
      }
    }
  }
  return false;
};

const stratifiedSearch = (item, query) => {
  // Check in order of priority: author > category > title > contentType > summary > content
  if (item.content.author && item.content.author.toLowerCase().includes(query.toLowerCase())) {
    return 1;  // Highest priority match
  }
  if (item.content.category && item.content.category.toLowerCase().includes(query.toLowerCase())) {
    return 2;
  }
  if (item.title && item.title.toLowerCase().includes(query.toLowerCase())) {
    return 3;
  }
  if (item.contentType && item.contentType.toLowerCase().includes(query.toLowerCase())) {
    return 4;
  }
  if (item.content.summary && item.content.summary.toLowerCase().includes(query.toLowerCase())) {
    return 5;
  }
  if (searchInObject(item.content, query)) {
    return 6;  // Lowest priority match (search in other content fields)
  }
  return null;  // No match
};

// add this hook to search component
// useEffect(() => {
//   // Debounced search
//   const debouncedSearch = setTimeout(() => {
//     if (query.trim() === '') {
//       setSearchResults([]);  // Clear results when query is empty
//       return;
//     }
//
//     const results = filteredContent
//       .map(item => {
//         const priority = stratifiedSearch(item, query);
//         return priority !== null ? { item, priority } : null;  // Keep only matched items
//       })
//       .filter(result => result !== null)  // Remove null results
//       .sort((a, b) => a.priority - b.priority)  // Sort by priority
//       .slice(0, 3)  // Limit to 3 results
//
//     setSearchResults(results.map(result => result.item));  // Extract items from results
//   }, 300);  // Delay of 300ms
//
//   return () => clearTimeout(debouncedSearch);  // Cleanup timeout on query change
//
// }, [query, filteredContent]);  // Re-run the effect whenever `query` or `allContent` changes
