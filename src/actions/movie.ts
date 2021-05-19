import * as types from "./types";
import { getMoviesByCategory, getMoviesByGenre } from "../services";

export const _getMovieCategory = (genre: string) => async (dispatch: any) => {
  dispatch({ type: types.GET_MOVIES.REQUEST });

  const response: any = await getMoviesByCategory(genre);

  if (response.data) {
    dispatch({
      type: types.GET_MOVIES.SUCCESS,
      payload: { genre, data: response.data?.results },
    });
    return;
  }

  dispatch({ type: types.GET_MOVIES.FAILURE });
};

export const _getMovieGenre =
  (genre: string, genreId: string) => async (dispatch: any) => {
    dispatch({ type: types.GET_MOVIES.REQUEST });

    const response: any = await getMoviesByGenre(genreId);

    if (response.data) {
      dispatch({
        type: types.GET_MOVIES.SUCCESS,
        payload: { genre, data: response.data?.results },
      });
      return;
    }

    dispatch({ type: types.GET_MOVIES.FAILURE });
  };
