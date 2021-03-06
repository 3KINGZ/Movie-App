import { genres, posterURL } from "../constants";

export * from "./cache";

export const generateTypes = (
  type: string,
): { REQUEST: string; SUCCESS: string; FAILURE: string } => {
  return {
    REQUEST: type + " REQUEST",
    SUCCESS: type + " SUCCESS",
    FAILURE: type + " FAILURE",
  };
};

export const mapGenres = (movieGenres: []): string | undefined => {
  if (!movieGenres) {
    return;
  }
  const genreStrings = movieGenres.map(genre => genres["_" + genre]);
  return genreStrings.join(", ");
};

export const mapGenresDetail = (
  movieGenres: [{ id: number; name: string }],
): string => {
  const genreStrings = movieGenres.map(genre => genres["_" + genre.id]);
  return genreStrings.join(", ");
};

export const parseRating = (rating: number): number => {
  if (rating >= 9) {
    return 5;
  } else if (rating >= 8) {
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

export const parseAuthorImage = (image: string): string | undefined => {
  if (!image) return;
  if (!image.includes("https")) {
    return posterURL + image;
  } else {
    return image.slice(1);
  }
};

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const formatDate = (dateString: string): string => {
  let date = new Date(dateString);
  let month = date.getMonth();
  let year = date.getFullYear();
  let _date = date.getDate();

  return `${_date} ${monthNames[month]} ${year}`;
};
