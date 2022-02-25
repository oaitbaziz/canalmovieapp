import React, { useEffect } from "react";
import { useQuery } from "hooks";
import apiInstance from "service/api";
import SearchResultsContainer from "./components/SearchResultsContainer";
import { searchResults } from "data";

const Search: React.FC = () => {
  let q = useQuery();

  useEffect(() => {
    let query = q.get("q") || undefined;
    apiInstance.getSearchResults(query);
  });

  const data = searchResults;

  return (
    <div className="search-page">
      <div className="container">
        <p className="h1 pb-5">
          Vos résultats de recherche pour {`"${q.get("q")}"`}
        </p>
        <SearchResultsContainer data={data} />
      </div>
    </div>
  );
};

export default Search;
