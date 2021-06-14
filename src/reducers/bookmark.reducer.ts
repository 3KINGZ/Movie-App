import * as types from "../actions/types";

const initialState = {
  bookmarks: [],
};

const bookmarkReducer = (
  state = initialState,
  action: { type: string; payload: any },
) => {
  const { type, payload } = action;

  switch (type) {
    case types.ADD_TO_BOOKMARK: {
      return {
        bookmarks: [...state.bookmarks, payload],
      };
    }

    case types.DELETE_FROM_BOOKMARK: {
      const bookmarks = state.bookmarks.filter(
        (bookmark: any) => bookmark.id !== payload,
      );

      return { bookmarks };
    }

    case types.SYNC_BOOKMARKS:
      return {
        bookmarks: [...payload],
      };

    default:
      return state;
  }
};

export default bookmarkReducer;
