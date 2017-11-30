import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment'
import Theme from '../Theme';
import Images from '../assets/Images';
import { Movie } from '../models/Movie';

export default FilmListItem = props => {
  const movie: Movie = props.movie;
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.container, props.style]}>
      { (movie.pictureUrl != null && movie.pictureUrl.length > 0) && <Image
        source={{uri: movie.pictureUrl}}
        style={styles.movieBackground}/>}
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.movieName}>
            {movie.title}
          </Text>
        </View>
        <View style={styles.score}>
          <Text style={styles.year}>
            {movie.releaseDate}
          </Text>
          <Text style={styles.currentScore}>
            {movie.rtScore + ' / 100'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
};

FilmListItem.propTypes = {
  movie: PropTypes.object,
  index: PropTypes.number,
  style: PropTypes.any,
  onPress: PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 140,
    alignItems: 'flex-start',
    backgroundColor: Theme.Colors.cellBackground,
    overflow: 'hidden',
  },
  content: {
    flex:1,
    padding:10,
    width: '100%',
  },
  movieName: {
    fontSize: 14,
    color: Theme.Colors.textColorLight,
    padding: 3,
    backgroundColor: Theme.Colors.textOnImageBackground
  },
  titleContainer: {
    flex:1,
  },
  score: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  currentScore: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Theme.Colors.textColorLight,
    backgroundColor: Theme.Colors.textOnImageBackground
  },
  year: {
    fontSize: 12,
    fontWeight: '400',
    flex:1,
    backgroundColor: 'transparent',
    color:Theme.Colors.textColorLight
  },
  movieBackground: {
    position: 'absolute',
    flex:1,
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  }
});
