import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { FilmListScreen, FilmDetailsScreen } from '../screens'
import Theme from '../Theme'
import Images from '../assets/Images';

const Route = {
  FilmList: 'FilmList',
  FilmDetails: 'FilmDetails'
}

const StackNav = StackNavigator(
  // @see https://reactnavigation.org/docs/navigators/stack#RouteConfigs
  {
    [Route.FilmList]: {
      screen: FilmListScreen,
      navigationOptions: {
        title:'Studio Ghibli'
      }
    },
    [Route.FilmDetails]: {
      screen: FilmDetailsScreen,
      navigationOptions: {
        title:'Détails'
      }
    },
  },
  // @see https://reactnavigation.org/docs/navigators/stack#StackNavigatorConfig
  {
    initialRouteName: Route.FilmList,
    navigationOptions: {
      headerStyle : {
        backgroundColor : Theme.Colors.mainColor,
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowOpacity: 0.3,
        shadowRadius:2,
      },
      headerTintColor: Theme.Colors.textColorLight
    }
  }
);

const AppNavigator = (props) => {
  return (
    <View style={styles.container}>
      <StackNav />
      {props.loader.isLoaderShown &&
      <View style={styles.loaderContainer}>
        <Image style={styles.loader} source={Images.loadingTotoro}/>
        <Text style={styles.loaderText}>Loading...</Text>
      </View>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderContainer:{
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.Colors.loaderBackground,
  },
  loaderText: {
    fontSize: 18,
    fontWeight: '200'
  },
  loader:{
    height: 200,
    width: 200,
    resizeMode: 'contain'
  }
});

const mapStateToProps = state => {
  return {
    loader: state.loader
  }
};

export default connect(mapStateToProps)(AppNavigator);
