import React from 'react';

const CardListPreview = ({ poster_path, title, vote_average, vote_count }) => {
  const Base_Url = 'https://image.tmdb.org/t/p/w200';

  return (
    <div>
      <img src={`${Base_Url}${poster_path}`} alt={title} />
      <h2>{title}</h2>
      <span>
        <p>Vote: {vote_average}/10</p>
        <p>Vote count: {vote_count} votes</p>
      </span>
    </div>
  );
};

export default CardListPreview;
