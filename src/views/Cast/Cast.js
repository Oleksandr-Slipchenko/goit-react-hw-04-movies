import React, { Component } from 'react';
import * as filmsApi from '../../components/Api/Api';

export default class Cast extends Component {
  state = {
    actors: [],
  };

  async componentDidMount() {
    filmsApi.castFilm(this.props.match.params.movieId).then(actor => {
      this.setState({
        actors: actor,
      });
    });
  }

  render() {
    const { actors } = this.state;
    const Base_Url = 'https://image.tmdb.org/t/p/w200';
    return (
      <>
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
            </li>
          ))}
        </ul>
      </>
    );
  }
}
