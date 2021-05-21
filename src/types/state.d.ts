/* eslint-disable no-unused-vars */
interface State {
  movies: { genres: any; loading: boolean };
  movieDetail: {
    movieDetail: any;
    movieCast: any;
    loading: boolean;
    message: string | null;
    reviews: any;
  };
  bookmarks: {
    bookmarks: [];
    bookmarksMap: any;
  };
}
