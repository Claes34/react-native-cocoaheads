import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment'
import Theme from '../Theme';
import Images from '../assets/Images';
import { Movie } from '../models/movie';

export default FilmListItem = props => {
  const movie: Movie = props.movie.item;
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Image source={Images.totoroIcon} style={styles.totoroIcon}/>
      <View style={styles.titleContainer}>
        <Text style={styles.movieName}>
          {movie.title}
        </Text>
        <Text style={styles.year}>
          {movie.releaseDate}
        </Text>
      </View>
      <View style={styles.score}>
        <Text style={styles.currentScore}>
          {movie.rtScore}
        </Text>
        <Text style={styles.scoreMax}> /100</Text>
      </View>
      <View style={styles.separator} />
    </TouchableOpacity>
  );
};

FilmListItem.propTypes = {
  movie: PropTypes.object,
  style: PropTypes.any
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 50,
    alignItems: 'center',
    backgroundColor: Theme.Colors.cellBackground,
    paddingHorizontal: Theme.defaultScreenPadding,
    paddingVertical: 15,
  },
  movieName: {
    marginRight: 15,
    fontSize: 14,
  },
  separator: {
    height: 1.5,
    position: 'absolute',
    bottom: 0,
    left: 56,
    right:0,
    backgroundColor: Theme.Colors.separatorColor
  },
  titleContainer: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  },
  score: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  currentScore: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  scoreMax: {
    fontSize: 11,
  },
  year: {
    fontSize: 12,
    fontWeight: '200'
  },
  totoroIcon: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
    marginRight: Theme.defaultScreenPadding,
  }
});
