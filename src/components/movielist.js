import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./moviecard";

const MovieList = ({ filteredMovies }) => {
  return (
    <div>
      {filteredMovies.map((movie, index) => {
        return (
          <div style={{ margin: "0 auto", width: "50%" }} key={index}>
            <Link
              to={{
                pathname: `/movie/${index}?title=${movie.title}&description=${movie.description}&posterURL=${movie.posterURL}&rate=${movie.rating}&trailer=${movie.trailer}`,
              }}
            >
              <MovieCard
                title={movie.title}
                description={movie.description}
                posterURL={movie.posterURL}
                rating={movie.rating}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
