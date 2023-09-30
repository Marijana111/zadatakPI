import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { movieService } from "../Service/MovieService";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import Loader from "../Common/Loader";
import Modal from "../Common/Modal";
import ToastAlert from "../Common/ToastAlert";

function MovieList() {
  const [movieList, setMovieList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [openToastMessage, setOpenToastMessage] = useState(false);
  const navigate = useNavigate();

  const columns = [
    { field: "title", headerName: "Title", width: 300 },
    {
      field: "release_date",
      headerName: "Release date",
      width: 200,
      valueGetter: (params) => params.value,
      valueFormatter: (params) => {
        const date = new Date(params.value);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
      },
    },
    {
      field: "vote_average",
      headerName: "Vote",
      width: 200,
    },
    {
      field: "popularity",
      headerName: "Popularity",
      width: 300,
    },
    {
      field: "original_language",
      headerName: "Original language",
      sortable: false,
      width: 200,
      valueGetter: (params) => {
        const originalValue = params.value;
        return originalValue.toUpperCase();
      },
    },
    {
      field: "id",
      headerName: "Actions",
      sortable: false,
      width: 200,
      align: "center",
      renderCell: (params) => (
        <div>
          <Button
            variant="outlined"
            color="primary"
            style={{ marginRight: "8px" }}
            onClick={() => {
              navigate(`/details/${params.row.id}`, {
                movieId: params.row.id,
              });
            }}
          >
            Details
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={() => setOpenModal(true)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    movieService
      .getMovies()
      .then((res) => {
        setMovieList(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSearchTextChange = (event) => {
    const { value } = event.target;
    setSearchText(value);
  };

  const filteredMovies = movieList.filter((movie) =>
    movie.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleDelete = () => {
    setOpenModal(false);
    setOpenToastMessage(true);
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Grid container padding={2}>
            <Grid item xs={12} lg={6}>
              <TextField
                focused
                type="text"
                id="outlined-basic"
                label="Title"
                variant="outlined"
                placeholder="Search by title"
                value={searchText}
                onChange={handleSearchTextChange}
              />
            </Grid>
            <Grid item xs={12} lg={6} container justifyContent="flex-end">
              <Button
                onClick={() => navigate("/add-movie")}
                variant="contained"
                startIcon={<AddIcon />}
              >
                Add movie
              </Button>
            </Grid>
          </Grid>
          <DataGrid
            options={{
              search: false,
            }}
            disableColumnMenu
            rows={filteredMovies}
            columns={columns}
            disableRowSelectionOnClick
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[10, 20, 50]}
          />{" "}
        </>
      )}

      <Modal
        open={openModal}
        title={"Delete modal"}
        text={"Are you sure you want to delete movie?"}
        handleClose={() => setOpenModal(false)}
        handleSubmit={handleDelete}
        textSubmit={"Delete"}
      />

      <ToastAlert
        open={openToastMessage}
        setOpen={setOpenToastMessage}
        message={"Successfully deleted!"}
        severity={"success"}
      />
    </div>
  );
}

export default MovieList;
