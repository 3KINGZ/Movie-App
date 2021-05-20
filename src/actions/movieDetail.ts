import * as types from "./types";
import { getMovieCast, getMovieDetail, getReviews } from "../services";

export const _getMovieDetail = (id: string) => async (dispatch: any) => {
  dispatch({ type: types.GET_MOVIE_DETAIL.REQUEST });

  const movieDetail = await getMovieDetail(id);
  const movieCast = await getMovieCast(id);
  const movieReviews = await getReviews(id);

  if (movieDetail.data && movieCast.data && movieReviews.data) {
    // console.log(movieDetail.data);
    // console.log(movieCast.data);
    const { data } = movieCast;
    const { data: detail } = movieDetail;
    const { data: reviews } = movieReviews;

    // console.log("action\n", detail);

    dispatch({
      type: types.GET_MOVIE_DETAIL.SUCCESS,
      payload: { detail, cast: data?.cast, reviews: reviews?.results },
    });

    return;
  }

  dispatch({ type: types.GET_MOVIE_DETAIL.FAILURE });
};
