import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';

const Navigation = () => {
  return (
    <nav>
      <NavLink
        exact
        to={routes.home}
        className="NavLink"
        activeClassName="NavLink--active"
      >
        Home
      </NavLink>
      <NavLink
        exact
        to={routes.movies}
        className="NavLink"
        activeClassName="NavLink--active"
      >
        Movies
      </NavLink>
      {/* <NavLink
            exact
            to={routes.movieDetails}
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Movie details
          </NavLink>
          <NavLink
            exact
            to={routes.cast}
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Movie actors
          </NavLink>
          <NavLink
            exact
            to={routes.reviews}
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Movie reviews
          </NavLink> */}
    </nav>
  );
};

export default Navigation;
