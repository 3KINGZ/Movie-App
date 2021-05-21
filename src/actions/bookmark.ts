import * as types from "./types";

export const addToBookmark = (movie: any) => (dispatch: any) => {
  dispatch({ type: types.ADD_TO_BOOKMARK, payload: movie });
};

export const deleteFromBookmark = (id: string) => (dispatch: any) => {
  dispatch({ type: types.DELETE_FROM_BOOKMARK, payload: id });
};
