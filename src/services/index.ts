import axios from "axios";

import { baseURL, searchURL, apiKey, other, genreURL } from "../constants";

const getURLs: { [key: string]: any } = {
  now_playing: `${baseURL}now_playing?api_key=${apiKey}${other}`,
  popular: `${baseURL}popular?api_key=${apiKey}${other}`,
  top_rated: `${baseURL}top_rated?api_key=${apiKey}${other}`,
  upcoming: `${baseURL}upcoming?api_key=${apiKey}${other}`,
};

const resolveGenreURL = (genre: string) => `${genreURL}&with_genres=${genre}`;

export const searchMovies = async (keyword: string) => {
  let response = await axios.get(
    `${searchURL}?api_key=${apiKey}${other}&query=${keyword}&include_adult=false`,
  );
  response = await response.data;
  return response;
};

export const getMoviesByCategory = async (type: string) => {
  try {
    let response = await axios.get(getURLs[type]);
    response = await response.data;
    return { data: response, error: null };
  } catch (error) {
    return { data: null, error: error };
  }
};

export const getMoviesByGenre = async (genre: string) => {
  try {
    let response = await axios.get(resolveGenreURL(genre));
    response = await response.data;
    return { data: response, error: null };
  } catch (error) {
    return { data: null, error: error };
  }
};

export const getMovieDetail = async (id: string) => {
  try {
    let response = await axios.get(
      `${baseURL}${id}?api_key=${apiKey}&append_to_response=videos`,
    );
    response = await response.data;
    return { data: response, error: null };
  } catch (error) {
    return { data: null, error: error };
  }
};

export const getMovieCast = async (id: string) => {
  try {
    let response = await axios.get(`${baseURL}${id}/credits?api_key=${apiKey}`);
    response = await response.data;
    return { data: response, error: null };
  } catch (error) {
    return { data: null, error: error };
  }
};

export const getReviews = async (id: string) => {
  try {
    let response = await axios.get(`${baseURL}${id}/reviews?api_key=${apiKey}`);
    response = await response.data;
    return { data: response, error: null };
  } catch (error) {
    return { data: null, error: error };
  }
};
