import React from 'react';
import { StackNavigator } from 'react-navigation';
import { EventListScreen } from '../screens'
import Theme from '../Theme'

const Route = {
  EventList: 'EventList'
}

const AppNavigator = StackNavigator(
  // @see https://reactnavigation.org/docs/navigators/stack#RouteConfigs
  {
    [Route.EventList]: {
      screen: EventListScreen,
      navigationOptions: {
        title:'Évènements'
      }
    },
  },
  // @see https://reactnavigation.org/docs/navigators/stack#StackNavigatorConfig
  {
    initialRouteName: Route.EventList,
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
