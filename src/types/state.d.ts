interface State {
  movies: { genres: any; loading: boolean; message: null | string };
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
  search: {
    searchResults: any;
    loading: boolean;
    message: string | null;
  };
}
