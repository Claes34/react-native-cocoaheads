import {Alert} from 'react-native';

import ActionTypes from "../actionTypes";

import mocks from '../../mocks.json';

const initialState = { movies: [], detailedMovie: null};

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
    default:
      return state;
  }
}
