import { useContext } from "react";
import Context from "../Context/MovieContext";
import defaultImage from "../assets/defaultImage.jpeg";
import { useNavigate } from "react-router-dom";
/* eslint-disable react/prop-types */

const MovieCard = ({ item }) => {
  const { setSelected, changeData } = useContext(Context);
  const { imdbID, Poster, Title, Year } = item;
  const navigate = useNavigate();

  return (
    <div>
      <div
        className="rounded-lg max-w-[300px] mx-3 my-4 text-white bg-[#1e293b] hover:shadow-2xl cursor-pointer"
        key={imdbID}
        onClick={() => {
          setSelected(imdbID);
          changeData(item);
          navigate(`movieInfo/${imdbID}`);
        }}
      >
        <img
          src={Poster !== "N/A" ? Poster : defaultImage}
          className="w-full rounded-t-md"
        />
        <div className="px-4 py-7 ">
          <div className="font-bold flex justify-center text-xl mb-2">
            {Title}
          </div>
          <p className="text-white flex justify-center text-base">
            Release year - {Year}
          </p>
          <div className="details flex justify-center mt-3 ">
            <button className="bg-[#2d3d57] p-2 text-lg rounded-lg hover:bg-slate-600 ">
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
