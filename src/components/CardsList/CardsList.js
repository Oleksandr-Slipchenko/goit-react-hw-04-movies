import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import CardListPreview from './CardListPreview';
import s from './CardList.module.css';

const CardsList = ({ films, location }) => {
  return (
    <ul className={s.list}>
      {films.map(({ id, poster_path, title, vote_average, vote_count }) => (
        <li key={id} className={s.item}>
          <NavLink
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

export default withRouter(CardsList);
