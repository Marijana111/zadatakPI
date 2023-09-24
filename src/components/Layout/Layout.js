import Navbar from "./Navbar";
import Footer from "./Footer";
import MovieList from "../Movies/MovieList";

const Layout = () => {
  return (
    <>
      <Navbar />
      <MovieList />
      <Footer />
    </>
  );
};

export default Layout;
