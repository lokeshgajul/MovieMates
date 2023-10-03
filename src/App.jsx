import "./App.css";
import MovieInfo from "./Components/MovieInfo";
import Movies from "./Components/Movies";
import Navbar from "./Components/Navbar";
import { MovieProvider } from "./Context/MovieContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  document.body.style.backgroundColor = "#2d3d57";

  return (
    <>
      {/* <h3 className='text-3xl text-center'> vite + react + tailwind css</h3> */}

      <MovieProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Movies />} />
            <Route exact path="movieInfo/:id" element={<MovieInfo />} />
          </Routes>
        </BrowserRouter>
      </MovieProvider>
    </>
  );
}

export default App;
