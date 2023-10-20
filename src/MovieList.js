import { CardGroup } from "react-bootstrap";
import MovieCard from "./MovieCard";
import Movies from "./Movies";
import { useMemo, useState } from "react";
import MovieForm from "./MovieForm";
import Search from "./Search";
import { useSelector } from "react-redux";

const MovieList = () => {
  const { movies } = useSelector((state) => state.movies);
  const [search, setSearch] = useState("");

  const resultMovies = useMemo(() => {
    if (search === "") {
      return movieState;
    } else {
      return movieState.filter(
        (m) =>
          m.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
          m.Rating.replace(/\s+/, "").includes(search.replace(/\s+/, ""))
      );
    }
  }, [search, movies]);

  return (
    <div>
      <Search setSearch={setSearch} search={search} />

      <MovieForm />
      <CardGroup>
        {resultMovies.map((movie, index) => {
          return (
            <MovieCard
              key={index}
              title={movie.title}
              Description={movie.Description}
              PosterURL={movie.PosterURL}
              Rating={movie.Rating}
            />
          );
        })}
      </CardGroup>
    </div>
  );
};

export default MovieList;
