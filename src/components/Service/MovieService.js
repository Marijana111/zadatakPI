import axios from "axios";
import { movieURL, movieURLGlobal } from "../Config/Url";

export const movieService = {
  getMovies,
  getMovieDetails,
  getGenres,
};

const params = {
  language: "en-US",
  page: "1",
};

const headers = {
  accept: "application/json",
  Authorization: process.env.REACT_APP_PERSONAL_ACCESS_TOKEN,
};

async function getMovies() {
  try {
    const response = await axios.get(`${movieURL}/popular`, {
      params: params,
      headers: headers,
    });
    return response;
  } catch (error) {
    return error;
  }
}

async function getMovieDetails(movieId) {
  try {
    const response = await axios.get(`${movieURL}/${movieId}`, {
      params: params,
      headers: headers,
    });
    return response;
  } catch (error) {
    return error;
  }
}

async function getGenres() {
  try {
    const response = await axios.get(`${movieURLGlobal}/genre/movie/list`, {
      params: params,
      headers: headers,
    });
    return response;
  } catch (error) {
    return error;
  }
}
