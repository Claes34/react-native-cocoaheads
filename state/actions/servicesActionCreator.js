import ActionTypes from '../actionTypes';
import { Movie } from '../../models/Movie';
import client from '../../client.js';
import { FetchMoviesQuery, FetchMovieDetailsQuery } from '../graphql/queries';

const fetchMovies = () => {
  return (dispatch) => {
    dispatch({type:ActionTypes.moviesList.FETCH_REQUEST});
    client.query({
			query: FetchMoviesQuery,
      variables: {}
		})
    .then(response => {
      let parsedData = response.data.films.map(d => new Movie(d));
      setTimeout(() => {
        dispatch({
          type:ActionTypes.moviesList.FETCH_SUCCESS,
          movies: parsedData
        });
      }, 2000)
    })
    .catch((error) => {
      dispatch({
        type:ActionTypes.moviesList.FETCH_FAILURE,
        message: error.message
      });
    });
  }
}

const fetchDetailedMovie = (movieId) => {
  return (dispatch) => {
    dispatch({type:ActionTypes.filmDetails.FETCH_REQUEST});
    client.query({
			query: FetchMovieDetailsQuery,
      variables: {id : movieId}
		})
    .then(response => {
      let movie = new Movie(response.data.film);
      setTimeout(() => {
        dispatch({
          type:ActionTypes.filmDetails.FETCH_SUCCESS,
          movie: movie
        });
      }, 2000)
    })
    .catch((error) => {
      dispatch({
        type:ActionTypes.filmDetails.FETCH_FAILURE,
        message: error.message
      });
    });
  }
}

export {
  fetchMovies,
  fetchDetailedMovie
}
