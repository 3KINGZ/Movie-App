import * as types from "./types";
import { getMovieGenre } from "../services";

export const _getMovieGenre = (genre: string) => async (dispatch: any) => {
  dispatch({ type: types.GET_MOVIES.REQUEST });

  const response: any = await getMovieGenre(genre);

  if (response.data) {
    dispatch({
      type: types.GET_MOVIES.SUCCESS,
      payload: { genre, data: response.data?.results },
    });
    return;
  }

  dispatch({ type: types.GET_MOVIES.FAILURE });
};
