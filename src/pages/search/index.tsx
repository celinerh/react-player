import { useState } from "react";
import SearchResults from "../../components/SearchResults";
import useSearchForItem from "../../hooks/useSearchForItem";

function Search() {
  const [query, setQuery] = useState<string | null>(null);
  const { searchResults } = useSearchForItem(query);
  console.log("query:", query);

  return (
    <div className="page-wrapper">
      <input
        autoFocus
        type="text"
        className="w-full p-1 rounded-sm outline-none"
        value={query ?? ""}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />

      <p className="dark:text-white">Search result</p>
      <SearchResults results={searchResults} />
    </div>
  );
}

export default Search;
