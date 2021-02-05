import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// import { paths } from '../../App';

// import HomePageList from './HomePageList';

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
    return (
      <>
        <h1>Home page</h1>
        <ul>
          {this.state.films.map(film => (
            <li key={film.id}>
              {/* <Link to={paths.HOMEPAGE}>{film.title}</Link> */}

              <Link to={`${this.props.match.url}`}>{film.title}</Link>
              {/* <Link to={`${this.props.match.url}${film.id}`}>{film.title}</Link> */}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
