import { createContext, useState } from "react";
/* eslint-disable react/prop-types */

export const Context = createContext();
export const MovieProvider = ({ children }) => {
  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState("lion");
  const [type, setType] = useState("movie");
  const [data, setData] = useState("");
  const [selected, setSelected] = useState();
  const [loading, setLoading] = useState(true);

  const changeData = (value) => {
    setData(value);
  };

  const changeSearch = (value) => {
    setSearch(value);
  };

  const changeType = (value) => {
    setType(value);
  };

  const fetchMovie = async (search, type) => {
    // const url = `https://www.omdbapi.com/?s=${search}&type=${type}&i=${selected}&3896198&apikey=efe9eddc`;
    const url = `https://www.omdbapi.com/?s=${search}&type=${type}&3896198&apikey=efe9eddc`;
    const response = await fetch(url);
    const data = await response.json();
    setMovie(data.Search);
    // console.log(data.Search);
  };

  const value = {
    fetchMovie,
    movie,
    setMovie,
    search,
    changeSearch,
    // page,
    // setPage,
    data,
    changeData,
    type,
    setType,
    selected,
    setSelected,
    changeType,
    loading,
    setLoading,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Context;
