import React from 'react';
import { StyleSheet, View, StatusBar, Platform } from 'react-native';
import {applyMiddleware, createStore} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import loaderMiddleware from './state/middlewares/loaderMiddleware';
import logger from './state/middlewares/logger';
import AppNavigator from './navigation/AppNavigator';
import AppReducer from './state/reducers';
import Theme from './Theme';
import client from './client';



const store = createStore(AppReducer, applyMiddleware(thunk, logger, loaderMiddleware));

export default class App extends React.Component {
  render() {
    StatusBar.setBarStyle('light-content', true);
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}

export {
  store
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  }
});
