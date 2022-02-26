import { FETCH_SEARCH } from "./searchTypes";

const initialState = {
  data: [],
  loading: false,
  error: false,
  notFound: false,
};

const searchReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case FETCH_SEARCH:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
