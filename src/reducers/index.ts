import { combineReducers } from "redux";

import movies from "./movie.reducer";
import movieDetail from "./movieDetail.reducer";

const rootReducer = combineReducers({ movies, movieDetail });

export default rootReducer;
