import React, { Component } from 'react';
import axios from 'axios';
import CardsList from '../components/CardsList';

export default class HomePage extends Component {
  state = {
    films: [],
  };

  async componentDidMount() {
    const API_KEY = '0834b7bfd5fb91f9012c04990bc0fd7c';
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`,
      );

      this.setState({ films: response.data.results });
      console.log(response.data.results);
    } catch (error) {
      console.log('error', error);
      return [];
    }
  }

  render() {
    const { films } = this.state;
    return (
      <>
        <h1>Cписок самых популярных фильмов на сегодня:</h1>

        <div>
          <CardsList films={films} />
        </div>
      </>
    );
  }
}
