import { combineReducers } from "redux";

import movies from "./movie.reducer";
import movieDetail from "./movieDetail.reducer";
import bookmarks from "./bookmark.reducer";

const rootReducer = combineReducers({ movies, movieDetail, bookmarks });

export default rootReducer;
