import axios from "axios";

export const movieService = {
  getMovies,
  getMovieDetails,
  getMovieGallery,
};

async function getMovies() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular`,
      {
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNGFjNzRjNjM1MzVhOGRiMjFhMDc4ZTY2MTY0MjE1MyIsInN1YiI6IjY1MGVhNjFiM2E0YTEyMDEzOTU1M2RjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CWvM0FnMToLEpjwSzQKRXmDbO-mAIWAKI3I-empGuo8",
        },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
}

async function getMovieDetails(movieId) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}`,
      {
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNGFjNzRjNjM1MzVhOGRiMjFhMDc4ZTY2MTY0MjE1MyIsInN1YiI6IjY1MGVhNjFiM2E0YTEyMDEzOTU1M2RjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CWvM0FnMToLEpjwSzQKRXmDbO-mAIWAKI3I-empGuo8",
        },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
}

async function getMovieGallery(movieId) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/images`,
      {
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNGFjNzRjNjM1MzVhOGRiMjFhMDc4ZTY2MTY0MjE1MyIsInN1YiI6IjY1MGVhNjFiM2E0YTEyMDEzOTU1M2RjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CWvM0FnMToLEpjwSzQKRXmDbO-mAIWAKI3I-empGuo8",
        },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
}

// slike https://image.tmdb.org/t/p/original/[poster_path]
// galerija https://api.themoviedb.org/3/movie/{movie_id}/images
