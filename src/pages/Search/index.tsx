import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { useQuery } from "hooks";
import { useInfiniteScroll } from "react-infinite-scroll-hook";

import { fetchSeachPage, fetchSearch } from "redux/search/searchActions";
import SearchResultsContainer from "./components/SearchResultsContainer";
import Heading from "components/Heading";
import Loading from "components/Loading";

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const q = useQuery();
  const query = q.get("q") || "";

  const { data, loading, error, notFound, totalPages, page, loadingMore } =
    useSelector((state: RootState) => state.search);

  const handleLoadMore = () => {
    dispatch(fetchSeachPage(query));
  };

  const infiniteRef = useInfiniteScroll<HTMLDivElement>({
    loading: loadingMore,
    hasNextPage: page <= totalPages,
    onLoadMore: handleLoadMore,
  });

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
    <main>
      <div className="search-page">
        <div className="container" ref={infiniteRef}>
          {notFound ? (
            <Heading text="Aucun résultat n'est disponible pour votre recherche" />
          ) : (
            <Heading text={`Vos résultats de recherche pour "${q.get("q")}"`} />
          )}
          <SearchResultsContainer data={data} />
        </div>
      </div>
    </main>
  );
};

export default Search;
