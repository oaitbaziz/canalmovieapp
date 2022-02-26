import { AppDispatch } from "redux/store";
import { filterMoviesAndSeries } from "utils";
import { FETCH_SEARCH } from "./searchTypes";
import apiInstance from "service/api";

// Action generator
export const fetchSearch = (query: string) => {
  return function fetchSearchThunk(dispatch: AppDispatch) {
    // Loading
    dispatch({
      type: FETCH_SEARCH,
      payload: { loading: true, error: false, notFound: false },
    });
    // Get search results
    const res = apiInstance.getSearchResults({ query });
    res
      .then((response) => {
        if (response.data.results.length) {
          // HTTP 200
          // Filter only movies & series
          const data = response.data.results.filter(filterMoviesAndSeries);
          dispatch({
            type: FETCH_SEARCH,
            payload: {
              data,
              page: response.data.page,
              totalPages: response.data.total_pages,
              error: false,
              notFound: false,
            },
          });
        } else {
          // HTTP 404
          dispatch({
            type: FETCH_SEARCH,
            payload: {
              notFound: true,
              data: [],
            },
          });
        }
      })
      .catch((error) => {
        // HTTP ERROR CODES & 500
        console.error("search error: ", error);
        dispatch({
          type: FETCH_SEARCH,
          payload: {
            error: true,
          },
        });
      })
      .finally(() => {
        dispatch({
          type: FETCH_SEARCH,
          payload: {
            loading: false,
          },
        });
      });
  };
};

export const fetchSeachPage = (query: string) => {
  return function fetchSearchPageThunk(
    dispatch: AppDispatch,
    getState: () => { search: any }
  ) {
    // Loading
    dispatch({
      type: FETCH_SEARCH,
      payload: { loadingMore: true, error: false, notFound: false },
    });
    const state = getState();
    const { search } = state;

    // Get search results
    const res = apiInstance.getSearchResults({ query, page: search.page });
    res
      .then((response) => {
        if (response.data.results.length) {
          // HTTP 200
          // Filter only movies & series
          const data = response.data.results.filter(filterMoviesAndSeries);
          dispatch({
            type: FETCH_SEARCH,
            payload: {
              data: [...search.data, ...data],
              page: search.page + 1,
              totalPages: response.data.total_pages,
              error: false,
              notFound: false,
            },
          });
        }
      })
      .catch((error) => {
        // Handle 500
      })
      .finally(() => {
        dispatch({
          type: FETCH_SEARCH,
          payload: {
            loadingMore: false,
          },
        });
      });
  };
};
