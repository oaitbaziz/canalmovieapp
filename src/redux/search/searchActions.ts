import { AppDispatch } from "redux/store";
import { filterMoviesAndSeries } from "utils";
import { FETCH_SEARCH } from "./searchTypes";
import apiInstance from "service/api";

// Action generator
export const fetchSearch = (query: string) => {
  return function fetchSearchThunk(dispatch: AppDispatch) {
    //Loading
    dispatch({
      type: FETCH_SEARCH,
      payload: { loading: true, error: false, notFound: false },
    });
    // Get search results
    const res = apiInstance.getSearchResults(query);
    res
      .then((response) => {
        if (response.data.results.length) {
          // Filter only movies & series
          const data = response.data.results.filter(filterMoviesAndSeries);
          dispatch({
            type: FETCH_SEARCH,
            payload: {
              data,
              error: false,
              notFound: false,
            },
          });
        } else {
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
