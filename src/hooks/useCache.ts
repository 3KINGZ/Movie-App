import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { syncBookmarks } from "../actions";
import { storeData, getData } from "../utils";

export const useCache = () => {
  const dispatch = useDispatch();

  const { bookmarks } = useSelector((state: State) => state.bookmarks);

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
    storeData("bookmarks", bookmarks);
  }, [bookmarks]);
};
