import React from 'react';
import s from './CardList.module.css';

const CardListPreview = ({ poster_path, title, vote_average, vote_count }) => {
  const Base_Url = 'https://image.tmdb.org/t/p/w400';

  return (
    <div className={s.cards}>
      {poster_path !== null ? (
        <div className={s.images}>
          <img src={`${Base_Url}/${poster_path}`} alt={title} />
        </div>
      ) : (
        <img
          src={`https://dummyimage.com/150x100/000/fff.jpg&text=no+image+:((`}
          alt={title}
        />
      )}
      <div className={s.review}>
        <h2 className={s.title}>{title}</h2>
        <span>
          <p className={s.caption}>Vote: {vote_average}/10</p>
          <p className={s.caption}>Vote count: {vote_count} votes</p>
        </span>
      </div>
    </div>
  );
};

export default CardListPreview;
