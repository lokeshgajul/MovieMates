import { useContext, useEffect } from "react";
import Context from "../Context/MovieContext";
// import InfiniteScroll from "react-infinite-scroll-component";
import MovieCard from "./MovieCard";

function Movies() {
  const { movie, fetchMovie, search, type, loading, setLoading } =
    useContext(Context);

  useEffect(() => {
    fetchMovie(search, type);
    setLoading(false);
  }, [search]);

  return (
    <>
      <div className="results text-white px-6 md:px-16 text-lg md:text-2xl">
        <span>{search && search ? `total results for: ${search}` : ""}</span>
        <br />
      </div>

      <div className="title flex justify-center items-center ">
        {!movie ? (
          <div className="results flex justify-center items-center text-white px-6 my-12 md:px-16 md:text-2xl">
            <span className="text-xl  flex justify-center items-center text-center">
              {search && search ? `${type} is not available` : ""}
            </span>
          </div>
        ) : (
          <div className="title grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {loading}
            {movie.map((item) => {
              return (
                <MovieCard key={item} item={item} />
                // <div
                //   className="rounded-lg max-w-[300px] mx-3 my-4 text-white bg-[#1e293b] hover:bg-slate-700 hover:shadow-2xl cursor-pointer"
                //   key={item.imdbID}
                //   onClick={() => {
                //     setSelected(item.imdbID);
                //     changeData(item);
                //     navigate(`movieInfo/${item.imdbID}`);
                //   }}
                // >
                //   <img
                //     src={item.Poster !== "N/A" ? item.Poster : logo}
                //     className="w-full rounded-t-md"
                //   />
                //   <div className="px-4 py-7">
                //     <div className="font-bold text-xl mb-2">{item.Title}</div>
                //     <p className="text-white text-base">
                //       Release year - {item.Year}
                //     </p>
                //   </div>
                // </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Movies;
