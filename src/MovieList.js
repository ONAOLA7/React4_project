import { CardGroup } from "react-bootstrap";
import MovieCard from "./MovieCard";
import Movies from "./Movies";
import { useMemo, useState } from "react";
import MovieForm from "./MovieForm";
import Search from "./Search";

const MovieList = () => {
  const [movieState, setMovieState] = useState(Movies);
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
  }, [search, movieState]);

  return (
    <div>
      <Search setSearch={setSearch} search={search} />

      <MovieForm setMovieState={setMovieState} />
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
