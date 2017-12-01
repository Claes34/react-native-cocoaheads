import {Alert} from 'react-native';

import ActionTypes from "../actionTypes";

import mocks from '../../mocks.json';

const emptyMovie = {
  id: '',
  title: '',
  description: '',
  releaseDate: '',
  producer: '',
  director: '',
  rtScore: '',
  pictureUrl: '',
  peoples: []
}

const initialState = { movies: [], detailedMovie: {...emptyMovie}};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.moviesList.FETCH_SUCCESS:
      return { ...state, movies: action.movies };
    case ActionTypes.moviesList.FETCH_FAILURE:
      Alert.alert(
            'Erreur',
            action.message,
            [
              { text: 'OK', onPress: () => {}}
            ]);
      return state;
    case ActionTypes.filmDetails.FETCH_SUCCESS:
      return { ...state, detailedMovie: action.movie ? action.movie : emptyMovie };
    case ActionTypes.filmDetails.FETCH_FAILURE:
      Alert.alert(
            'Erreur',
            action.message,
            [
              { text: 'OK', onPress: () => {}}
            ]);
      return state;
    case ActionTypes.filmDetails.CLEAN:
      return { ...state, detailedMovie: {...emptyMovie}}
    default:
      return state;
  }
}
