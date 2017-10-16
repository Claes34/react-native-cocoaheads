import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import AppNavigator from './navigation/AppNavigator'

export default class App extends React.Component {
  render() {
    StatusBar.setBarStyle('light-content', true);
    return (
      <View style={styles.container}>
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  },
});
