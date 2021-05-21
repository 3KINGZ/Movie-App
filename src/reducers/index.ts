import { combineReducers } from "redux";

import movies from "./movie.reducer";
import movieDetail from "./movieDetail.reducer";
import bookmarks from "./bookmark.reducer";
import search from "./search.reducer";

const rootReducer = combineReducers({ movies, movieDetail, bookmarks, search });

export default rootReducer;
