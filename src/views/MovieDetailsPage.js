import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

import { routes } from '../routes';
// import Reviews from './Reviews';

export default class MovieDetailsPage extends Component {
  state = {
    id: null,
    // overview: null,
    poster_path: null,
    backdrop_path: null,
    release_date: null,
    runtime: null,
    title: null,
  };

  async componentDidMount() {
    const API_KEY = '0834b7bfd5fb91f9012c04990bc0fd7c';
    const { movieId } = this.props.match.params;

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
      );
      console.log(response.data);
      this.setState({ ...response.data });
    } catch (error) {
      console.log('error', error);
      return [];
    }
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
      // overview,
      runtime,
      release_date,
    } = this.state;
    const { match } = this.props;

    const Base_Url = 'https://image.tmdb.org/t/p/w500';

    return (
      <div>
        <button type="button" onClick={this.handleGoBack}>
          Back
        </button>
        <img src={`${Base_Url}${backdrop_path}`} alt={title} />
        <h3>{title}</h3>
        {/* <p>{overview}</p> */}
        {release_date && (
          <span>
            <p>Run time: {runtime} min</p>
            <p>Release date: {release_date}</p>
          </span>
        )}
        <br />
        <NavLink to={`${match.url}${routes.cast}`}>Cast</NavLink>
        <br />
        <NavLink to={`${match.url}${routes.reviews}`}>Reviews</NavLink>

        {/* Пробовал роут сделать, для передачи пропсов */}

        {/* {overview && (
          <Route
            path={`${match.path}/reviews`}
            render={props => {
              <Reviews {...props} overview={overview} />;
            }}
          />
        )} */}
      </div>
    );
  }
}
