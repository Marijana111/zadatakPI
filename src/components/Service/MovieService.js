import axios from "axios";
import { URL } from "../Config/Url";

export const movieService = {
  getMovies,
  getMovieDetails,
};

async function getMovies() {
  try {
    const response = await axios.get(`${URL}/popular`, {
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
    const response = await axios.get(`${URL}/${movieId}`, {
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

// slike path https://image.tmdb.org/t/p/original/[poster_path]
