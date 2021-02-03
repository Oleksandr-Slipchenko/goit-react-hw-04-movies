import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import HomePage from './views/HomePage/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';
import Cast from './views/Cast';
import Reviews from './views/Reviews';

const App = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/movies"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/movies/:movieId"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Movie details
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/movies/:movieId/cast"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Movie actors
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/movies/:movieId/reviews"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Movie reviews
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route exact path="/movies/:movieId" component={MovieDetailsPage} />
        <Route exact path="/movies/:movieId/cast" component={Cast} />
        <Route path="/movies/:movieId/reviews" component={Reviews} />
      </Switch>
    </>
  );
};

export default App;

// class App extends Component {

//   render() {

//     return (

//     );
//   }
// }

// export default App;
