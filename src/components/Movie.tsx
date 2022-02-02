import React from "react";

const Movie = ({ movie }: any) => {
  return (
    <div className="movie">
      <div className="movie-title">{movie.title}</div>
      <div className="movie-year">{movie.year}</div>
    </div>
  );
};

export default Movie;
