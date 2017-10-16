import React from 'react';
import { StackNavigator } from 'react-navigation';
import { FilmListScreen } from '../screens'
import Theme from '../Theme'

const Route = {
  FilmList: 'FilmList'
}

const AppNavigator = StackNavigator(
  // @see https://reactnavigation.org/docs/navigators/stack#RouteConfigs
  {
    [Route.FilmList]: {
      screen: FilmListScreen,
      navigationOptions: {
        title:'Studio Ghibli'
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

export default AppNavigator;
