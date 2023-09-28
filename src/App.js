import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import MovieList from "./components/Movies/MovieList";
import MovieDetails from "./components/Movies/MovieDetails";
import AddMovie from "./components/Movies/AddMovie";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<MovieList />} />
      <Route exact path="details/:movieId" element={<MovieDetails />} />
      <Route exact path="add-movie" element={<AddMovie />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
