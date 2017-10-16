import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import GridView from 'react-native-grid-view';
import { FilmListItem, FilmCollectionItem } from '../components';
import Theme from '../Theme';
import mocks from '../mocks.json';

export default class FilmListScreen extends Component {

  constructor(props){
    super(props);
    mocks.reverse()
    let featuredMovies = mocks.slice(0,3);
    let otherMovies = mocks.slice(3,mocks.length-1);
    this.state = {
      otherMovies: otherMovies,
      featuredMovies: featuredMovies
    };

    this._listHeader = this._listHeader.bind(this);
  }

  _listHeader(){
    return (
      <GridView
        items={this.state.featuredMovies}
        itemsPerRow={2}
        renderItem={(item) => <FilmCollectionItem key={item.id} movie={item} style={styles.gridItem}/>}
        removeClippedSubviews={false} // Fix not displaying rows issues for some reason
      />
    )
  }

  render() {
    return (
        <FlatList
          contentContainerStyle={styles.container}
          data={this.state.otherMovies}
          keyExtractor={(item, index) => item.id}
          ListHeaderComponent={this._listHeader}
          renderItem={({item}) => <FilmListItem movie={item} style={styles.listItem} />}
        />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Theme.defaultScreenPadding,
    paddingLeft: Theme.defaultScreenPadding,
  },
  title: {
    paddingHorizontal: Theme.defaultScreenPadding,
    marginVertical: 10,
    fontSize: 16,
    fontWeight: '300'
  },
  listItem: {
    marginRight: Theme.defaultScreenPadding
  },
  gridItem: {
    marginRight: Theme.defaultScreenPadding,
    marginBottom: Theme.defaultScreenPadding
  }

});
