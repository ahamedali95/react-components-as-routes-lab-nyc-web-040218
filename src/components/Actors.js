import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actorObj) => {
        return getActorTile(actorObj);
      })}
    </div>
  );
};

const getActorTile = (actor) => {
  return (
    <div>
      <h4>{actor.name}</h4>
      {getActorMovies(actor)}
    </div>
  );
}

const getActorMovies = (actor) => {
  return (
    <ul>
      {actor.movies.map((movie) => {
        return <li>{movie}</li>
      })}
    </ul>
  );
}

export default Actors;
