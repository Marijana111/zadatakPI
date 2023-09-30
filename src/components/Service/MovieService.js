import axios from "axios";
import { movieURL, movieURLGlobal } from "../Config/Url";

export const movieService = {
  getMovies,
  getMovieDetails,
  getGenres,
};

async function getMovies() {
  try {
    const response = await axios.get(`${movieURL}/popular`, {
      params: { language: "en-US", page: "1" },
      headers: {
        accept: "application/json",
        Authorization: process.env.REACT_APP_PERSONAL_ACCESS_TOKEN,
      },
    });
    return response;
  } catch (error) {
    return error;
  }
}

async function getMovieDetails(movieId) {
  try {
    const response = await axios.get(`${movieURL}/${movieId}`, {
      params: { language: "en-US", page: "1" },
      headers: {
        accept: "application/json",
        Authorization: process.env.REACT_APP_PERSONAL_ACCESS_TOKEN,
      },
    });
    return response;
  } catch (error) {
    return error;
  }
}

async function getGenres() {
  try {
    const response = await axios.get(`${movieURLGlobal}/genre/movie/list`, {
      params: { language: "en-US", page: "1" },
      headers: {
        accept: "application/json",
        Authorization: process.env.REACT_APP_PERSONAL_ACCESS_TOKEN,
      },
    });
    return response;
  } catch (error) {
    return error;
  }
}
