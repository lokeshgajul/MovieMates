import { useContext, useEffect, useState } from "react";
import Context from "../Context/MovieContext";
import { useNavigate, useParams } from "react-router-dom";
import load from "../assets/load-unscreen.gif";
import { LazyLoadImage } from "react-lazy-load-image-component";
import defaultImage from "../assets/defaultImage.jpeg";

function MovieInfo() {
  const { data, movie, loading, setLoading } = useContext(Context);
  const { id } = useParams();
  const [moreInfo, setMoreInfo] = useState(movie);
  const navigate = useNavigate();

  const fetchMoreData = async () => {
    const url = `https://www.omdbapi.com/?i=${id}&3896198&apikey=efe9eddc`;

    const response = await fetch(url)
      .then(async (response) => {
        let re1 = await response.json();
        // console.log(re1);
        return re1;
      })
      .then((data) => {
        const merge = data;
        setMoreInfo(merge);
      });
  };
  useEffect(() => {
    fetchMoreData();
    setLoading(false);
  });

  if (data === null || data.length === 0) {
    return <p className="text-white text-2xl text-center ">No Data Found </p>;
  }

  return (
    <>
      <div className="m-4 flex justify-center items-center flex-col lg:flex-row">
        <div className="img mx-12 w-fit">
          <LazyLoadImage
            className="md:w-[40vw] rounded-lg"
            src={moreInfo.Poster !== "N/A" ? moreInfo.Poster : defaultImage}
            alt=""
            effect="this.methodName = this.methodName.bind(this)"
          />
        </div>

        <div className="details flex justify-center items-center">
          <div className="bg my-2 text-white text-lg">
            <p className="py-1.5">
              <b>Title</b> - {moreInfo.Title}
            </p>
            <p className="py-1.5">
              <b>Type</b> - {moreInfo.Type}
            </p>
            <p className="py-1.5">
              <b>Released</b> - {moreInfo.Released}
            </p>
            <p className="py-1.5">
              <b>Overview </b>- {moreInfo.Plot}
            </p>
            <p className="py-1.5">
              <b>Actors</b> - {moreInfo.Actors}
            </p>
            <p className="py-1.5">
              <b>Director</b> - {moreInfo.Director}
            </p>
            <p className="py-1.5">
              <b>Genre</b> - {moreInfo.Genre}
            </p>
            <p className="py-1.5">
              <b>Writer</b> - {moreInfo.Writer}
            </p>
            <p className="py-1.5">
              <b>Language</b> - {moreInfo.Language}
            </p>
            <p className="py-1.5">
              <b>Rating</b> - {moreInfo.imdbRating}
            </p>
          </div>
        </div>
      </div>

      <div className="goback flex justify-center">
        <button
          className="border border-white p-2 mb-14 rounded-md text-white"
          onClick={(e) => {
            e.currentTarget.value;
            navigate("/");
          }}
        >
          Go back
        </button>
      </div>
    </>
  );
}

export default MovieInfo;
