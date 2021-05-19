import { genres } from "../constants";

export const generateTypes = (
  type: string,
): { REQUEST: string; SUCCESS: string; FAILURE: string } => {
  return {
    REQUEST: type + " REQUEST",
    SUCCESS: type + " SUCCESS",
    FAILURE: type + " FAILURE",
  };
};

export const mapGenres = (movieGenres: [string] | undefined) => {
  const genreStrings = movieGenres.map(genre => genres["_" + genre]);
  return genreStrings.join(" ");
};

export const parseRating = (rating: number) => {
  if (rating >= 8) {
    return 4.5;
  } else if (rating >= 7) {
    return 4;
  } else if (rating >= 6) {
    return 3.5;
  } else if (rating >= 5) {
    return 3;
  } else if (rating >= 4) {
    return 2.5;
  } else if (rating >= 3) {
    return 2;
  } else {
    return 1;
  }
};
