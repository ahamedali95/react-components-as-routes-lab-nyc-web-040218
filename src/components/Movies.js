import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movieObj) => {
        return getMovieTiles(movieObj);
      })}
    </div>
  );
};

const getMovieTiles = (movie) => {
  return (
    <div>
      <h4>Title: {movie.title}</h4>
      <p>Movie time: {movie.time}</p>
      <p>Genres</p>
      {getGenreList(movie.genres)}
    </div>
  );
};

const getGenreList = (genres) => {
  return (
    <ul>
      {genres.map((genre) => {
        return <li>{genre}</li>;
      })}
    </ul>
  );
}

export default Movies;
