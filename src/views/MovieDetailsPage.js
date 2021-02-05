import React, { Component } from 'react';
import axios from 'axios';

export default class MovieDetailsPage extends Component {
  state = {
    id: null,
    original_title: null,
    overview: null,
    poster_path: null,
    release_date: null,
    runtime: null,
    title: null,
  };

  async componentDidMount() {
    const API_KEY = '0834b7bfd5fb91f9012c04990bc0fd7c';
    const { movieId } = this.props.match.params;

    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
    );
    console.log(response.data);
    this.setState({ ...response.data });
  }

  render() {
    const {
      title,
      poster_path,
      original_title,
      overview,
      runtime,
      release_date,
    } = this.state;
    return (
      <>
        <h2>Movie details: {title}</h2>
        <img src={poster_path} alt={original_title} />
        <h3>{original_title}</h3>
        <p>{overview}</p>
        <span>
          <b>Run time:</b> {runtime} min
        </span>
        <br />
        <span>
          <b>Release date:</b> {release_date}
        </span>
      </>
    );
  }
}
