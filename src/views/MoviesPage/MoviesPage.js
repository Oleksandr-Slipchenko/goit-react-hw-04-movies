import React, { Component } from 'react';
import { toast } from 'react-toastify';

import * as filmsApi from '../../components/Api/Api';

import CardsList from 'components/CardsList';
import SearchBar from '../../components/SearchBar/SearchBar';

export default class MoviesPage extends Component {
  state = {
    films: [],
    filmName: '',
  };

  handleFormSubmit = filmName => {
    this.setState({ filmName });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.filmName !== this.state.filmName) {
      filmsApi
        .getSearchFilms(this.state.filmName)
        .then(data => {
          if (data.length === 0) {
            toast.error('enter something else');
            return;
          }
          this.setState({ films: [...data] });
          // console.log(data);
        })
        .catch(error => {
          this.setState({ error });
        });
    }
  }

  render() {
    const { films } = this.state;

    return (
      <>
        <SearchBar onSubmit={this.handleFormSubmit} />

        <div>
          <CardsList films={films} />
        </div>
      </>
    );
  }
}
