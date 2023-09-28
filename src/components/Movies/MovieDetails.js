import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useParams } from "react-router-dom";
import { movieService } from "../Service/MovieService";
import ClosedCaptionIcon from "@mui/icons-material/ClosedCaption";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import Loader from "../Common/Loader";

function MovieDetails() {
  const movieId = useParams();
  const navigate = useNavigate();
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieGenres, setMovieGenres] = useState(null);
  const [spokenLanguages, setSpokenLanguages] = useState(null);
  const [productionCompanies, setProductionCompanies] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    movieService
      .getMovieDetails(Number(movieId.movieId))
      .then((res) => {
        setMovieDetails(res.data);
        setMovieGenres(res.data.genres);
        setSpokenLanguages(res.data.spoken_languages);
        setProductionCompanies(res.data.production_companies);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const posterPath = `https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <Button
            onClick={() => navigate("/")}
            variant="outlined"
            startIcon={<ArrowBackIcon />}
          >
            Back
          </Button>
          <CssBaseline />
          <main>
            <Box
              sx={{
                bgcolor: "background.paper",
                pt: 8,
                pb: 6,
              }}
            >
              <Container maxWidth="sm">
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="text.primary"
                  gutterBottom
                >
                  {movieDetails.title}
                </Typography>
                <Typography align="center" color="text.secondary" paragraph>
                  {movieDetails.overview}
                </Typography>
                <Stack
                  sx={{ pt: 4 }}
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                >
                  {movieGenres &&
                    movieGenres.map((g) => (
                      <Typography align="center" paragraph>
                        {g.name.toUpperCase()}
                      </Typography>
                    ))}
                </Stack>
                <Stack
                  sx={{ pt: 4 }}
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                >
                  <Typography align="center" paragraph>
                    <b>Budget:</b> {movieDetails.budget} $
                  </Typography>
                  <Typography align="center" paragraph>
                    <b>Status:</b> {movieDetails.status}
                  </Typography>
                  <Typography align="center" paragraph>
                    <b>Vote:</b> {movieDetails.vote_average}
                  </Typography>
                </Stack>
                <Stack
                  sx={{ pt: 4 }}
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                >
                  <Typography align="center" paragraph>
                    <ClosedCaptionIcon />
                  </Typography>
                  {spokenLanguages &&
                    spokenLanguages.map((g) => (
                      <Typography align="center" paragraph>
                        {g.english_name}
                      </Typography>
                    ))}
                </Stack>
                <Stack
                  sx={{ pt: 4 }}
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                >
                  <Typography align="center" paragraph>
                    <b>Production:</b>
                  </Typography>
                  {productionCompanies &&
                    productionCompanies.map((g) => (
                      <Typography align="center" paragraph>
                        {g.name} &copy;
                      </Typography>
                    ))}
                </Stack>
              </Container>
            </Box>

            <Container lg={{ py: 4 }} maxWidth="md">
              <Typography variant="h4" align="center" paragraph>
                <b>Movie poster</b>
              </Typography>
              <div className="poster">
                <Card
                  sx={{
                    maxWidth: 600,
                  }}
                >
                  <CardMedia
                    sx={{ height: 800 }}
                    image={posterPath}
                    title="poster"
                  />
                  <CardContent>
                    <Typography align="center" variant="body2">
                      {movieDetails.tagline}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </Container>
          </main>{" "}
        </>
      )}
    </>
  );
}

export default MovieDetails;
