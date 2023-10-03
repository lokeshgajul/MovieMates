import { useContext, useEffect, useState } from "react";
import Context from "../Context/MovieContext";

function Navbar() {
  const { search, changeSearch, changeType, fetchMovie, type } =
    useContext(Context);
  const [currentSearch, setCurrentSearch] = useState();
  // const categories = ["Action", "Horror", "Comedy", "Fantasy", "Popular"];

  const types = ["Movie", "Series"];

  const handleSearch = (e) => {
    e.preventDefault();
    changeSearch(currentSearch);
  };
  useEffect(() => {
    fetchMovie(search, type);
  }, [search, type]);

  return (
    <div>
      <nav className="">
        <div className="flex flex-row justify-between bg-[#1e293b]  ">
          <ul className="flex flex-row space-x-5 py-6 md:px-4 text-xl text-white ">
            <li className="text-[1.30rem] md:text-[1.650rem] font-serif mx-2">
              MovieMates
            </li>
            {types?.map((type, index) => {
              return (
                <li
                  className=" text-lg md:text-[1.28rem] font cursor-pointer hover:text-slate-400 "
                  key={index}
                  id={`${index}`}
                  onClick={(e) => {
                    changeType(e.target.textContent);
                  }}
                >
                  {type}
                </li>
              );
            })}
          </ul>
        </div>
        {/* <div className="categories">
          {categories.map((item, index) => {
            return (
              <li className="cursor-pointer py-2" key={index}>
              <span
              href=""
              value={currentSearch}
              key={index}
              onClick={(e) => {
                changeSearch(e.target.textContent);
              }}
              >
              {item}
              </span>
              </li>
              );
            })}
          </div> */}
        <div className="search flex justify-center my-3 md:justify-end ">
          <form action="" className=" mx-3" onSubmit={handleSearch}>
            <input
              className="p-1.5 border-2 rounded-md"
              type="text"
              name="search"
              id="search"
              onChange={(e) => setCurrentSearch(e.target.value)}
              placeholder="search movies and series.."
              required
            />
            <button className="border border-white p-2 m-2 text-md rounded-md text-white hover:text-gray-50">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
