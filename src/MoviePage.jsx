import React, { useMemo } from "react";
import MovieCard from "./MovieCard";
import { useParams } from "react-router-dom";

const MoviePage = () => {
  const { id } = useParams();
  const { movies } = useSelector((state) => state.movies);

  const movie = useMemo(() => {
    if (movies && !isNaN(Number(id)) && Number(id) < movies.length) {
      return movies[Number(id)];
    }
    return undefined;
  }, [movies, id]);

  return (
    <div>
      {!!movie ? (
        <MovieCard
          title={movie.title}
          Description={movie.Description}
          PosterURL={movie.PosterURL}
          Rating={movie.Rating}
        />
      ) : (
        <p>Not Found!</p>
      )}
    </div>
  );
};

export default MoviePage;
