import * as types from "../actions/types";

const initialState = {
  searchResults: null,
  loading: false,
  message: null,
};

const searchReducer = (
  state = initialState,
  action: { type: string; payload: any },
) => {
  const { type, payload } = action;

  switch (type) {
    case types.SEARCH.REQUEST:
      return { ...state, message: null, loading: true };

    case types.SEARCH.SUCCESS:
      return { searchResults: payload, message: null, loading: false };

    case types.SEARCH.FAILURE:
      return { ...state, message: "Error", loading: false };

    default:
      return state;
  }
};

export default searchReducer;
