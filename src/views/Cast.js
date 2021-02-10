import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';

export default class Cast extends Component {
  state = {
    actors: [],
  };

  async componentDidMount() {
    const API_KEY = '0834b7bfd5fb91f9012c04990bc0fd7c';
    const { movieId } = this.props.match.params;

    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
    );

    this.setState({ actors: response.data.cast });
    console.log(response.data.cast);
  }

  render() {
    const { actors } = this.state;
    const Base_Url = 'https://image.tmdb.org/t/p/w200';
    return (
      <>
        <h1>Cast</h1>
        <ul>
          {actors.map(actor => (
            <li key={actor.id}>
              <img src={`${Base_Url}${actor.profile_path}`} alt={actor.name} />
              {actors && (
                <span>
                  <p>Actor name: {actor.name}</p>
                  <p>Character: {actor.character}</p>
                  <p>Popularity: {actor.popularity}</p>
                </span>
              )}
              {/* <Link to={`${this.props.match.url}/${film.id}`}>
                {film.title}
              </Link> */}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
