import * as types from "../actions/types";

const initialState = {
  bookmarks: [],
  bookmarksMap: {},
};

const bookmarkReducer = (
  state = initialState,
  action: { type: string; payload: any },
) => {
  const { type, payload } = action;

  switch (type) {
    case types.ADD_TO_BOOKMARK: {
      return {
        bookmarksMap: { ...state.bookmarksMap, [payload.id]: true },
        bookmarks: [...state.bookmarks, payload],
      };
    }

    case types.DELETE_FROM_BOOKMARK: {
      const bookmarks = state.bookmarks.filter(
        (bookmark: any) => bookmark.id !== payload,
      );

      const map: { [key: string]: any } = state.bookmarksMap;

      delete map[payload];

      return { bookmarksMap: map, bookmarks };
    }

    default:
      return state;
  }
};

export default bookmarkReducer;
