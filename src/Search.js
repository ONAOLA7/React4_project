const Search = ({ search, setSearch }) => {
  return (
    <>
      <input
        type="text"
        placeholder="searchby title or Rating"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button>Search</button>
    </>
  );
};

export default Search;
