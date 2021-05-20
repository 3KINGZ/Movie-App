import * as types from "../actions/types";

const initialState = {
  genres: {},
  loading: false,
  message: "",
};

const movieReducer = (
  state = initialState,
  action: { type: string; payload: any },
) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_MOVIES.REQUEST:
      return { ...state, loading: true };

    case types.GET_MOVIES.SUCCESS: {
      const genres = { ...state.genres, [payload.genre]: payload.data };
      return { loading: false, genres };
    }

    case types.GET_MOVIES.FAILURE:
      return { ...state, message: "Unable to fetch movies", loading: false };

    default:
      return state;
  }
};

export default movieReducer;
