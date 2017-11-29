import ActionTypes from '../actionTypes';
import { Movie } from '../../models/Movie';


const BASE_URL = 'https://ghibliapi.herokuapp.com';

const fetchMovies = () => {
  return (dispatch) => {
    dispatch({type:ActionTypes.moviesList.FETCH_REQUEST})
    fetch(`${BASE_URL}/films`)
      .then(response => response.json())
      .then(data => {
        let parsedData = data.map(d => new Movie(d));
        setTimeout(() => {
          dispatch({
            type:ActionTypes.moviesList.FETCH_SUCCESS,
            movies: parsedData
          });
        }, 2000)
      })
      .catch((error) => {
        dispatch({
          type:ActionTypes.moviesList.FETCH_SUCCESS,
          message: error.message
        });
      });
  }
}

export {
  fetchMovies
}
