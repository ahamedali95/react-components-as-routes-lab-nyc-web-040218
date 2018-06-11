import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink
      to="/"
      exact
      style={{
        color: "blue",
        padding: "20px"
      }}
      activeStyle={{
        color: "red"
      }}
      >Home</NavLink>

      <NavLink
      to="/movies"
      exact
      style={{
        color: "blue",
        padding: "20px"
      }}
      activeStyle={{
        color: "red"
      }}
      >Movies</NavLink>

      <NavLink
      to="/directors"
      exact
      style={{
        color: "blue",
        padding: "20px"
      }}
      activeStyle={{
        color: "red"
      }}
      >Directors</NavLink>

      <NavLink
      to="/actors"
      exact
      style={{
        color: "blue",
        padding: "20px"
      }}
      activeStyle={{
        color: "red"
      }}
      >Actors</NavLink>
    </div>
  );
};

export default NavBar;
