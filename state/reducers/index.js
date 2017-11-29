import { combineReducers } from 'redux';

import loader from './loaderReducer';
import content from './contentReducer';


const AppReducer = combineReducers({
  loader,
  content

});

export default AppReducer;
