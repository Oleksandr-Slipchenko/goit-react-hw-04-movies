import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AppBar from './components/AppBar';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';
import Cast from './views/Cast';
import Reviews from './views/Reviews';
import { routes } from './routes';

const App = () => {
  return (
    <>
      <AppBar />
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.movies} component={MoviesPage} />
        <Route exact path={routes.movieDetails} component={MovieDetailsPage} />
        <Route
          exact
          path={`${routes.movieDetails}${routes.cast}`}
          component={Cast}
        />
        <Route
          path={`${routes.movieDetails}${routes.reviews}`}
          component={Reviews}
        />
        <Route component={HomePage} />
      </Switch>
    </>
  );
};

export default App;
