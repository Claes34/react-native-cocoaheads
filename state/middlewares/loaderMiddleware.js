import ActionTypes from "../actionTypes";

let currentRequestCount = 0;

/**
 * Detects if requests are currently running, and displays a loader if needed.
 */
const loaderMiddleware = ({ dispatch, getState }) => {
  return next => action => {
    if (action.type.length < 8) return next(action);
    const actionTypeEnd = action.type.slice(-8);

    const incrementLoaderActionsEndWhiteList = ['_REQUEST'];
    const decrementLoaderActionsEndWhiteList = ['_SUCCESS', '_FAILURE', '_ABORTED'];
    const allActionsWhiteList = incrementLoaderActionsEndWhiteList.concat(decrementLoaderActionsEndWhiteList);

    if (!allActionsWhiteList.includes(actionTypeEnd)) return next(action);

    if (incrementLoaderActionsEndWhiteList.includes(actionTypeEnd)) {
      currentRequestCount++;
    } else if (decrementLoaderActionsEndWhiteList.includes(actionTypeEnd) && currentRequestCount !== 0) {
      currentRequestCount--;
    }

    if (currentRequestCount > 0 && !getState().loader.isLoaderShown) {
      dispatch({type: ActionTypes.loader.SHOW});
    } else if (currentRequestCount <= 0 && getState().loader.isLoaderShown) {
      dispatch({type: ActionTypes.loader.HIDE});
    }

    return next(action);
  }
};

export default loaderMiddleware;
