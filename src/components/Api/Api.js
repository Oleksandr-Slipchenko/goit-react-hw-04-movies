import axios from 'axios';

const API_KEY = '0834b7bfd5fb91f9012c04990bc0fd7c';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getTopFilms = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
    );

    return response.data.results;
  } catch (error) {
    console.log('error', error);
    return [];
  }
};

//  Movie page

export const getSearchFilms = async query => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US,ru&page=1&include_adult=false&query=${query}`,
    );
    return response.data.results;
  } catch (error) {
    console.log('error', error);
    return [];
  }
};

//  detailsFilm

export const detailsFilm = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
    );
    return response.data;
  } catch (error) {
    console.log('error', error);
  }
};

// cast

export const castFilm = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
    );
    return response.data.cast;
  } catch (error) {
    console.log('error', error);
  }
};

//  reviews

export const reviewsFilm = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
    );
    return response.data.results;
  } catch (error) {
    console.log('error', error);
  }
};
