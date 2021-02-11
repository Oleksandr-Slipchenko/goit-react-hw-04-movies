import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import AppBar from './components/AppBar';
import { routes } from './routes';

const HomePage = lazy(() =>
  import('./views/HomePage.js' /* webpackChunkName: "home-view" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage.js' /* webpackChunkName: "movies-view" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage.js' /* webpackChunkName: "movie-details-view" */
  ),
);
// const Cast = lazy(() =>
//   import('./views/Cast.js' /* webpackChunkName: "cast-view" */),
// );
const Reviews = lazy(() =>
  import('./views/Reviews.js' /* webpackChunkName: "review-view" */),
);

const App = () => {
  return (
    <>
      <AppBar />

      <Suspense fallback={<h1>Loading...</h1>} /* сделать спинер загрузки*/>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route exact path={routes.movies} component={MoviesPage} />
          <Route
            exact
            path={routes.movieDetails}
            component={MovieDetailsPage}
          />
          {/* <Route
            exact
            path={`${routes.movieDetails}${routes.cast}`}
            component={Cast}
          /> */}
          <Route
            path={`${routes.movieDetails}${routes.reviews}`}
            component={Reviews}
          />
          <Route component={HomePage} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
