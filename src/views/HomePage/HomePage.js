import React, { Component } from 'react';
import CardsList from '../../components/CardsList';
import * as filmsApi from '../../components/Api/Api';

export default class HomePage extends Component {
  state = {
    films: [],
  };

  componentDidMount() {
    filmsApi.getTopFilms().then(film => {
      this.setState({
        films: film,
      });
    });
  }

  render() {
    const { films } = this.state;
    return (
      <section>
        <div>
          <CardsList films={films} />
        </div>
      </section>
    );
  }
}
