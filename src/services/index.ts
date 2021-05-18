import axios from "axios";

const baseURL = "https://api.themoviedb.org/3/movie/";
const searchURL = "https://api.themoviedb.org/3/search/movie";
const apiKey = "52050e6e3220743e0fba6b8a62e6eccf";
const other = "&language=en-US&page=1";

const getURLs: { [key: string]: any } = {
  now_playing: `${baseURL}now_playing?api_key=${apiKey}${other}`,
  popular: `${baseURL}popular?api_key=${apiKey}${other}`,
  top_rated: `${baseURL}top_rated?api_key=${apiKey}${other}`,
  upcoming: `${baseURL}upcoming?api_key=${apiKey}${other}`,
};

export const searchMovies = async (keyword: string) => {
  let response = await axios.get(
    `${searchURL}?api_key=${apiKey}${other}&query=${keyword}&include_adult=false`,
  );
  response = await response.data;
  return response;
};

export const getMovieGenre = async (type: string) => {
  try {
    let response = await axios.get(getURLs[type]);
    response = await response.data;
    return { data: response, error: null };
  } catch (error) {
    return { data: null, error: error };
  }
};

export const getMovieDetails = async (id: string) => {
  let response = await axios.get(`${baseURL}${id}?api_key=${apiKey}`);
  response = await response.data;
  return response;
};
