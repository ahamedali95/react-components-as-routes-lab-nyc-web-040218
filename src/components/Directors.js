import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((directorObj) => {
        return getDirectorTile(directorObj);
      })}
    </div>
  );
}

const getDirectorTile = (director) => {
  return (
    <div>
      <h4>{director.name}</h4>
      {getMovieList(director.movies)}
    </div>
  );
}

const getMovieList = (movies) => {
  return(
    <ul>
      {movies.map((movie) => {
        return <li>{movie}</li>
      })}
    </ul>
  );
}

export default Directors
