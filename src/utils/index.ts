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

export const mapGenres = (movieGenres: [string]) => {
  const genreStrings = movieGenres.map(genre => genres["_" + genre]);
  return genreStrings.join(" ");
};
