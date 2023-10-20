import React, { useMemo } from "react";
import MovieCard from "./MovieCard";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const MoviePage = () => {
  const { id } = useParams();
  const { movies } = useSelector((state) => state.movies);

  const movie = useMemo(() => {
    if (movies && !isNaN(Number(id))) {
      return movies.find((m) => m.id === Number(id));
    }
    return undefined;
  }, [movies, id]);

  return (
    <div>
      {!!movie ? (
        <div>
          {movie.trailer && (
            <iframe
              width="560"
              height="315"
              src={movie.trailer}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          )}
          <MovieCard
            title={movie.title}
            Description={movie.Description}
            PosterURL={movie.PosterURL}
            Rating={movie.Rating}
          />
        </div>
      ) : (
        <p>Not Found!</p>
      )}
    </div>
  );
};

export default MoviePage;
