import React, { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { useQuery } from "hooks";

import { fetchSearch } from "redux/search/searchActions";
import SearchResultsContainer from "./components/SearchResultsContainer";
import Heading from "components/Heading";
import Loading from "components/Loading";

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const q = useQuery();
  const query = q.get("q") || "";

  const { data, loading, error, notFound } = useSelector(
    (state: RootState) => state.search
  );

  const fetchData = useCallback(() => {
    dispatch(fetchSearch(query));
  }, [dispatch, query]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (error) {
    history.push("/error");
    return <></>;
  }

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <div className="search-page">
      <div className="container">
        {notFound ? (
          <Heading text="Aucun résultat n'est disponible pour votre recherche" />
        ) : (
          <Heading text={`Vos résultats de recherche pour "${q.get("q")}"`} />
        )}
        <SearchResultsContainer data={data} />
      </div>
    </div>
  );
};

export default Search;
