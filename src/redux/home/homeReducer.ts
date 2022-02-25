import { FETCH_TRENDING } from "./homeTypes";

const initialState = {
  data: [],
  loading: false,
  error: false,
};

const photoReducer = (
  state = initialState,
  action: { type: string; payload: object }
) => {
  switch (action.type) {
    case FETCH_TRENDING:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default photoReducer;
