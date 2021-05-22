import * as types from "./types";
import { getMovieCast, getMovieDetail, getReviews } from "../services";

export const _getMovieDetail = (id: string) => async (dispatch: any) => {
  dispatch({ type: types.GET_MOVIE_DETAIL.REQUEST });

  const movieDetail = await getMovieDetail(id);
  const movieCast = await getMovieCast(id);
  const movieReviews = await getReviews(id);

  if (movieDetail?.data && movieCast?.data && movieReviews?.data) {
    const { data: detail } = movieDetail;
    const { data: reviews } = movieReviews;
    const { data: casts } = movieCast;

    dispatch({
      type: types.GET_MOVIE_DETAIL.SUCCESS,
      payload: { detail, cast: casts?.cast, reviews: reviews?.results },
    });

    return;
  }

  dispatch({ type: types.GET_MOVIE_DETAIL.FAILURE });
};
