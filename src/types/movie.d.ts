/* eslint-disable no-unused-vars */
interface IMovie {
  id?: string;
  title?: string;
  poster_path?: string;
  genre_ids?: [string];
  vote_average?: string;
  loading: boolean;
  movieDetail: {};
  movieCast: {};
  message: string;
}
