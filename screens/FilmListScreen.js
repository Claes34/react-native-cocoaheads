import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import GridView from 'react-native-grid-view';
import { connect } from 'react-redux';
import { FilmListItem, FilmCollectionItem } from '../components';
import Theme from '../Theme';
import { Movie } from '../models/Movie';
import Images from '../assets/Images';
import { fetchMovies } from '../state/actions/servicesActionCreator';

class FilmListScreen extends Component {

  constructor(props) {
    super(props);
  }

  // componentDidReceiveProps(props){}

  componentDidMount() {
    this.props.dispatch(fetchMovies());
  }

  _listHeader(featuredMovies) {

    return (
      <GridView
        items={featuredMovies}
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
    const { movies } = this.props.content;
    movies.sort((a, b) => b.releaseDate - a.releaseDate)
    const featuredMovies = movies.slice(0, 3);
    const otherMovies = movies.slice(3, movies.length - 1);

    return (
      <FlatList
        contentContainerStyle={styles.container}
        data={otherMovies}
        keyExtractor={(item, index) => item.id}
        ListHeaderComponent={() => this._listHeader(featuredMovies)}
        renderItem={movie => <FilmListItem onPress={() => this._goToDetails(movie.item)} movie={movie} style={styles.listItem} />}
      />
    )
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

const mapStateToProps = state => {
  return {
    content: state.content,
  }
};

export default connect(mapStateToProps)(FilmListScreen);
