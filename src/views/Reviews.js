import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { Route } from 'react-router-dom';
// import MovieDetailsPage from './MovieDetailsPage';

export default class Reviews extends Component {
  state = {
    // Reviews: [],
  };

  async componentDidMount() {
    const API_KEY = '0834b7bfd5fb91f9012c04990bc0fd7c';
    const { movieId } = this.props.match.params;

    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
    );

    console.log(response);
  }

  render() {
    return (
      <>
        <h1>Reviews</h1>
        <ul>
          {/* <Route
            path={`${match.path}/reviews`}
            render={props => (
              <MovieDetailsPage {...props} details={this.state} />
            )}
          /> */}
        </ul>
      </>
    );
  }
}
