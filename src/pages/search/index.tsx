import { useState } from "react";
import Header from "../../components/Header";
import SearchResults from "../../components/SearchResults";
import useSearchForItem from "../../hooks/useSearchForItem";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SearchResultsAlbums from "../../components/SearchResultsAlbums";
import SearchResultsArtists from "../../components/SearchResultsArtists";
import SearchResultsTracks from "../../components/SearchResultsTracks";

function Search() {
  const [query, setQuery] = useState<string | null>(null);
  const { searchResults } = useSearchForItem(query);

  return (
    <>
      <Header showArrow />

      <div className="page-wrapper">
        <input
          autoFocus
          type="text"
          className="w-full p-1 border-b-2 border-gray-300 rounded-sm outline-none"
          placeholder="Search here"
          value={query ?? ""}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />

        {/* <p className="dark:text-white">Search result</p> */}

        <Tabs className="mt-6">
          <TabList>
            <Tab>Albums</Tab>
            <Tab>Artists</Tab>
            <Tab>Tracks</Tab>
          </TabList>

          <TabPanel>
            <SearchResultsAlbums albums={searchResults?.albums} />
          </TabPanel>
          <TabPanel>
            <SearchResultsArtists artists={searchResults?.artists} />
          </TabPanel>
          <TabPanel>
            <SearchResultsTracks tracks={searchResults?.tracks} />
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}

export default Search;
