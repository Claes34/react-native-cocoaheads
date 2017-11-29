import ActionTypes from "../actionTypes";

const initialState = { isLoaderShown: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.loader.SHOW:
      return { ...state, isLoaderShown: true };
    case ActionTypes.loader.HIDE:
      return { ...state, isLoaderShown: false };
    default:
      return state;
  }
}
