import React, { Component } from 'react';
import * as filmsApi from '../../components/Api/Api';

export default class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    filmsApi.reviewsFilm(this.props.match.params.movieId).then(review => {
      this.setState({
        reviews: review,
      });
    });
  }

  render() {
    const { reviews } = this.state;
    return (
      <>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map(el => (
              <li key={el.id}>
                <p>Author: {el.author}</p>
                <p>{el.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We do not have any reviews for this movie.</p>
        )}
      </>
    );
  }
}
