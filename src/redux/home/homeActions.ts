import { AppDispatch } from "redux/store";
import { FETCH_TRENDING } from "./homeTypes";
import apiInstance from "service/api";

export function fetchTrending() {
  return async function fetchTrendingThunk(dispatch: AppDispatch) {
    //Loading
    dispatch({
      type: FETCH_TRENDING,
      payload: { loading: true, error: false },
    });

    // Fetch data
    const res = apiInstance.getWeeklyTrending();

    res
      .then((response) => {
        if (response.data.results.length) {
          dispatch({
            type: FETCH_TRENDING,
            payload: {
              data: response.data.results,
              error: false,
            },
          });
        } else {
          dispatch({
            type: FETCH_TRENDING,
            payload: {
              error: true,
              data: [],
            },
          });
        }
      })
      .catch(() => {
        dispatch({
          type: FETCH_TRENDING,
          payload: {
            error: true,
          },
        });
      })
      .finally(() => {
        dispatch({
          type: FETCH_TRENDING,
          payload: {
            loading: false,
          },
        });
      });
  };
}
