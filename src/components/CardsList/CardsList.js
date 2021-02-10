import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import CardListPreview from './CardListPreview';

const CardsListDetails = ({ films, location }) => {
  return (
    <ul>
      {films.map(({ id, poster_path, title, vote_average, vote_count }) => (
        <li key={id}>
          <NavLink
            // to={`/movies/${id}`}
            to={{
              pathname: `/movies/${id}`,
              state: {
                from: location,
              },
            }}
          >
            <CardListPreview
              poster_path={poster_path}
              title={title}
              vote_average={vote_average}
              vote_count={vote_count}
            />
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(CardsListDetails);
