/* eslint-disable no-undef */
import * as types from "./types";

export const addToBookmark = (movie: any) => (dispatch: any) => {
  dispatch({ type: types.ADD_TO_BOOKMARK, payload: movie });
};

export const deleteFromBookmark = (id: string) => (dispatch: any) => {
  dispatch({ type: types.DELETE_FROM_BOOKMARK, payload: id });
};

export const syncBookmarks = (bookmarks: IMovie[]) => (dispatch: any) => {
  console.log("from action", bookmarks);
  dispatch({ types: types.SYNC_BOOKMARKS, payload: bookmarks });
};

export const syncBookmarksMap = (bookmarksMap: {}) => (dispatch: any) => {
  dispatch({ types: types.SYNC_BOOKMARKS_MAP, payload: bookmarksMap });
};
