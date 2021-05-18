import * as types from "./types";
import { getMoviesByCategory } from "../services";

export const _getMovieGenre = (genre: string) => async (dispatch: any) => {
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
