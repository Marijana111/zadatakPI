import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  Container,
  Grid,
  Autocomplete,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import BackButton from "../Common/BackButton";
import { movieService } from "../Service/MovieService";
import ToastAlert from "../Common/ToastAlert";

const AddMovie = () => {
  const navigate = useNavigate();
  const [genresFromApi, setGenresFromApi] = useState([]);
  const [openToastMessage, setOpenToastMessage] = useState(false);
  let genres = {};

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  useEffect(() => {
    movieService
      .getGenres()
      .then((res) => {
        setGenresFromApi(res.data.genres);
      })
      .catch((err) => console.log(err));
  }, []);

  genres = genresFromApi.map((row) => ({
    value: row.id,
    label: row.name,
  }));

  const onSubmit = (data) => {
    setOpenToastMessage(true);

    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <>
      <BackButton />
      <Container sx={{ marginTop: "30px" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid className="form-container" container spacing={2}>
            <Grid item xs={6}>
              <Controller
                name="title"
                control={control}
                rules={{
                  required: "Title is required",
                  maxLength: {
                    value: 30,
                    message: "Maximum 30 characters",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Title"
                    variant="outlined"
                    fullWidth
                    error={!!errors.title}
                    helperText={errors.title?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="director"
                control={control}
                rules={{ required: "Director is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Director"
                    variant="outlined"
                    fullWidth
                    error={!!errors.director}
                    helperText={errors.director?.message}
                  />
                )}
              />
            </Grid>
          </Grid>

          <Grid className="form-container" container spacing={2}>
            <Grid item xs={6}>
              <Controller
                name="language"
                control={control}
                rules={{
                  required: "Language is required",
                  maxLength: {
                    value: 2,
                    message: "Maximum 2 characters",
                  },
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message: "Letters only",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Original language"
                    variant="outlined"
                    fullWidth
                    error={!!errors.language}
                    helperText={errors.language?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="popularity"
                control={control}
                rules={{
                  required: "Popularity is required",
                  maxLength: {
                    value: 10,
                    message: "Maximum 10 characters",
                  },
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Numbers only",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Popularity"
                    variant="outlined"
                    fullWidth
                    error={!!errors.popularity}
                    helperText={errors.popularity?.message}
                  />
                )}
              />
            </Grid>
          </Grid>
          <Grid className="form-container" container spacing={2}>
            <Grid item xs={6}>
              <Controller
                name="genres"
                rules={{
                  required: "Genres is required",
                }}
                render={({ field }) => (
                  <Autocomplete
                    {...field}
                    multiple="true"
                    options={genres || []}
                    // filterOptions={filterOptions}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Genres"
                        variant="outlined"
                        fullWidth
                        error={!!errors.genres}
                        helperText={errors.genres?.message}
                      />
                    )}
                    // onChange={(event, value) => {
                    //   console.log("field", value);
                    //   field.onChange(value || null);
                    // }}
                    // key={field || "deafult"}
                  />
                )}
                control={control}
              />
            </Grid>
          </Grid>

          <Grid container justifyContent={"flex-end"} marginTop={3}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>{" "}
            <Button
              className="button-end"
              type="button"
              variant="outlined"
              color="info"
              onClick={() => navigate("/")}
            >
              Cancel
            </Button>
          </Grid>
        </form>
      </Container>

      <ToastAlert
        open={openToastMessage}
        setOpen={setOpenToastMessage}
        message={"Successfully added movie!"}
        severity={"success"}
      />
    </>
  );
};

export default AddMovie;
