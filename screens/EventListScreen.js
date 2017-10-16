import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { EventListItem } from '../components';
import Theme from '../Theme';

const mocks = [
  {
    _id: '59def6d4a9deda001fb4db0a',
    link: 'https://www.facebook.com/events/1963927910489435',
    location: 'Nu-Bahia',
    date: '2017-10-12T17:00:00.000Z',
    description: 'Nu-Bahia accueille Accent français... Montpellier Tram Louis Blanc',
    name: 'Accent français & La courte échelle au Nu-Bahia',
    type: 'Concert'
  },
  {
    _id: '7862f6d4a9deda001fb4db0a',
    link: 'https://www.facebook.com/events/1963927910489435',
    location: 'Nu-Bahia',
    date: '2017-10-12T17:00:00.000Z',
    description: 'Nu-Bahia accueille Accent français... Montpellier Tram Louis Blanc',
    name: 'Accent français & La courte échelle au Nu-Bahia',
    type: 'Concert'
  }
];

export default class EventListScreen extends Component {

  constructor(props){
    super(props);
    this.state = {
      events: mocks
    };
  }

  _listHeader(){
    return (
      <Text style={styles.title}>Évènements sur Montpellier</Text>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.events}
          keyExtractor={(item, index) => item._id}
          // ListHeaderComponent={this._listHeader}
          renderItem={({item}) => <EventListItem event={item} />}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    paddingHorizontal: 0,
  },
  title: {
    paddingHorizontal: Theme.defaultScreenPadding,
    marginVertical: 10,
    fontSize: 16,
    fontWeight: '300'
  },

});
