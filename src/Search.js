import { useState } from "react";

const Search = ({search,setSearch}) => {

  return (
    <>
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button>Search</button>
    </>
  );
};

export default Search;
