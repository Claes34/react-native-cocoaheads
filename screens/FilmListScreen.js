import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import GridView from 'react-native-grid-view';
import { FilmListItem, FilmCollectionItem } from '../components';
import Theme from '../Theme';
import mocks from '../mocks.json';
import { Ghibli } from '../services/ghibli.service';
import { Movie } from '../models/movie';

const IS_MOCK = true;

export default class FilmListScreen extends Component {

  constructor(props) {
    super(props);
    this.service = new Ghibli();
    this.state = {
      otherMovies: [],
      featuredMovies: []
    };
  }

  componentDidMount() {

    if (IS_MOCK) {
        const data = mocks.map(m => new Movie(m));
        this.setMovies(data);
    } else {
      this.service
        .fetchMovies()
        .then(movies => this.setMovies(movies))
        .catch(console.error);
    }
  }

  _listHeader() {
    return (
      <GridView
        items={this.state.featuredMovies}
        itemsPerRow={2}
        renderItem={item => <FilmCollectionItem key={item.id} movie={item} style={styles.gridItem}/>}

        // Fix not displaying rows issues for some reason
        removeClippedSubviews={false}
      />
    )
  }

  render() {
    return (
        <FlatList
          contentContainerStyle={styles.container}
          data={this.state.otherMovies}
          keyExtractor={(item, index) => item.id}
          ListHeaderComponent={() => this._listHeader()}
          renderItem={item => <FilmListItem movie={item} style={styles.listItem} />}
        />
    )
  }

  setMovies(movies: Movie[]) {
    movies.sort((a, b) => b.releaseDate - a.releaseDate)
    const featuredMovies = movies.slice(0, 3);
    const otherMovies = movies.slice(3, movies.length - 1);

    this.setState({
      featuredMovies: featuredMovies,
      otherMovies: otherMovies
    });
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
