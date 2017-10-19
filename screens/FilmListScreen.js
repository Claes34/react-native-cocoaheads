import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import GridView from 'react-native-grid-view';
import { FilmListItem, FilmCollectionItem } from '../components';
import Theme from '../Theme';
import mocks from '../mocks.json';
import { Ghibli } from '../services/ghibli.service';
import { Movie } from '../models/Movie';
import Images from '../assets/Images';

const IS_MOCK = false;

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

  setMovies(movies: Movie[]) {
    // Sorting movies by decreasing release date
    movies.sort((a, b) => b.releaseDate - a.releaseDate)

    // Slicing the movies array to split the top featured and the others
    const featuredMovies = movies.slice(0, 3);
    const otherMovies = movies.slice(3, movies.length - 1);

    setTimeout(() => {
      this.setState({
        featuredMovies: featuredMovies,
        otherMovies: otherMovies
      });
    }, 1000)
  }

  _listHeader() {
    return (
      <GridView
        items={this.state.featuredMovies}
        itemsPerRow={2}
        renderItem={item => <FilmCollectionItem key={item.id} onPress={() => this._goToDetails(item)} movie={item} style={styles.gridItem}/>}
        enableEmptySections

        // Fix not displaying rows issues for some reason
        removeClippedSubviews={false}
      />
    )
  }

  _goToDetails(movie) {
    this.props.navigation.navigate('FilmDetails', {movie: movie});
  }

  render() {
    if (this.state.featuredMovies.length === 0){
      return (
        <View style={styles.loaderContainer}>
          <Image style={styles.loader} source={Images.loadingTotoro}/>
          <Text style={styles.loaderText}>Loading...</Text>
        </View>
      )
    } else {
      return (
          <FlatList
            contentContainerStyle={styles.container}
            data={this.state.otherMovies}
            keyExtractor={(item, index) => item.id}
            ListHeaderComponent={() => this._listHeader()}
            renderItem={movie => <FilmListItem onPress={() => this._goToDetails(movie.item)} movie={movie} style={styles.listItem} />}
          />
      )
    }
  }
}

const styles = StyleSheet.create({
  loaderContainer:{
    flex:1,
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
  },
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
