import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { syncBookmarks, syncBookmarksMap } from "../actions";
import { storeData, getData } from "../utils/cache";

export const useCache = () => {
  const dispatch = useDispatch();

  const { bookmarks, bookmarksMap } = useSelector(
    (state: State) => state.bookmarks,
  );

  useEffect(() => {
    getData("bookmarks")
      .then(resp => {
        console.log("bookmarks", resp);
        dispatch(syncBookmarks(resp));
      })
      .catch(() => {
        console.log("error");
      });
  }, []);

  useEffect(() => {
    getData("bookmarksMap")
      .then(resp => {
        console.log("bookmarksMap", resp);
        dispatch(syncBookmarksMap(resp));
      })
      .catch(() => {
        console.log("error");
      });
  }, []);

  useEffect(() => {
    storeData("bookmarks", bookmarks);
    storeData("bookmarksMap", bookmarksMap);
  }, [bookmarks, bookmarksMap]);
};
