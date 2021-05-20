import * as types from "../actions/types";

const initialState = {
  loading: false,
  movieDetail: {},
  movieCast: [],
  message: null,
  reviews: [],
};

const movieDetailReducer = (
  state = initialState,
  action: { type: string; payload: any },
) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_MOVIE_DETAIL.REQUEST:
      return { loading: true };

    case types.GET_MOVIE_DETAIL.SUCCESS: {
      const { detail, cast, reviews } = payload;
      return {
        ...state,
        movieDetail: detail,
        movieCast: cast,
        reviews,
        loading: false,
      };
    }

    case types.GET_MOVIES.FAILURE:
      return { ...state, message: "Unable to fetch movies", loading: false };

    default:
      return state;
  }
};

export default movieDetailReducer;
