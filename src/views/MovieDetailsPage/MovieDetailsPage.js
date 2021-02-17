import React, { Component, lazy, Suspense } from 'react';
import * as filmsApi from '../../components/Api/Api';
import s from './MovieDetailsPage.module.css';

import { NavLink, Route } from 'react-router-dom';
import { routes } from '../../routes';

const Cast = lazy(() =>
  import('../Cast/Cast.js' /* webpackChunkName: "cast-view" */),
);

const Reviews = lazy(() =>
  import('../Reviews/Reviews.js' /* webpackChunkName: "review-view" */),
);

export default class MovieDetailsPage extends Component {
  state = {
    id: null,
    poster_path: null,
    backdrop_path: null,
    release_date: null,
    runtime: null,
    title: null,
    overview: null,
  };

  async componentDidMount() {
    filmsApi.detailsFilm(this.props.match.params.movieId).then(details => {
      this.setState({ ...details });
    });
  }

  handleGoBack = () => {
    const { location, history } = this.props;

    // if (location.state && location.state.from) {
    //   return history.push(location.state.from);
    // }
    // history.push(routes.home);

    history.push(location?.state?.from || routes.home);
  };

  render() {
    const {
      backdrop_path,
      title,
      runtime,
      release_date,
      overview,
    } = this.state;
    const { match } = this.props;

    const Base_Url = 'https://image.tmdb.org/t/p/w500/';

    return (
      <div>
        <button className={s.button} type="button" onClick={this.handleGoBack}>
          Go Back
        </button>
        <div className={s.overview}>
          {backdrop_path !== null ? (
            <div className={s.img}>
              <img src={`${Base_Url}${backdrop_path}`} alt={title} />
            </div>
          ) : (
            <img
              src={`https://dummyimage.com/150x100/000/fff.jpg&text=no+image+:((`}
              alt={title}
            />
          )}
          <span>
            <p>
              <b>Overview:</b> {overview}
            </p>
          </span>
        </div>
        <h3>{title}</h3>
        {release_date && (
          <span>
            <p>Run time: {runtime} min</p>
            <p>Release date: {release_date}</p>
          </span>
        )}
        <div className={s.nav}>
          <NavLink
            className={s.cast}
            activeClassName={s.item_active}
            to={`${match.url}${routes.cast}`}
          >
            Cast
          </NavLink>
          <NavLink
            className={s.review}
            activeClassName={s.item_active}
            to={`${match.url}${routes.reviews}`}
          >
            Reviews
          </NavLink>
        </div>

        <Suspense>
          <Route
            exact
            path={`${routes.movieDetails}${routes.cast}`}
            component={Cast}
          />
          <Route
            exact
            path={`${routes.movieDetails}${routes.reviews}`}
            component={Reviews}
          />
        </Suspense>
      </div>
    );
  }
}
