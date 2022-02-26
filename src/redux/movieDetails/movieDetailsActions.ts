import { AppDispatch } from "redux/store";
import { FETCH_DETAILS } from "./movieDetailsTypes";
import apiInstance from "service/api";

export const fetchDetails = (id: string, type: string) => {
  return async function fetchDetailsThunk(dispatch: AppDispatch) {
    // Loading
    dispatch({
      type: FETCH_DETAILS,
      payload: { loading: true, error: false, notFound: false },
    });

    // Fetch data
    const res = apiInstance.getDetails({ id }, type);
    res
      .then((response) => {
        if ("id" in response.data) {
          // HTTP 200
          dispatch({
            type: FETCH_DETAILS,
            payload: {
              data: response.data,
              error: false,
            },
          });
        } else {
          // HTTP 404
          dispatch({
            type: FETCH_DETAILS,
            payload: {
              data: [],
              notFound: false,
            },
          });
        }
      })
      .catch(() => {
        //HTTP ERROR CODES & 500
        dispatch({
          type: FETCH_DETAILS,
          payload: {
            error: true,
          },
        });
      })
      .finally(() => {
        dispatch({
          type: FETCH_DETAILS,
          payload: {
            loading: false,
          },
        });
      });
  };
};
