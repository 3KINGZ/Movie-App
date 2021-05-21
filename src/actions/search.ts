import { searchMovies } from "../services";
import * as types from "./types";

export const searchMovie = (searchString: string) => async (dispatch: any) => {
  dispatch({ type: types.SEARCH.REQUEST });

  const resp = await searchMovies(searchString);

  if (resp.data) {
    dispatch({ type: types.SEARCH.SUCCESS, payload: resp.data?.results });
    return;
  }

  dispatch({ type: types.SEARCH.FAILURE });
};
