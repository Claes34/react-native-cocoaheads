const logger = store => next => action => {
  if ('group' in console) {
      console.group(action.type);
  }
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  if ('groupEnd' in console) {
      console.groupEnd(action.type);
  }
    return result;

};

export default logger;
