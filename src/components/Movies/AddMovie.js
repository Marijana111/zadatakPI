import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Container, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BackButton from "../Common/BackButton";

const AddMovie = () => {
  const [value, setValue] = useState(new Date());
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
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
    </>
  );
};

export default AddMovie;
