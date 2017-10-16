import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment'
import Theme from '../Theme';
import Images from '../assets/Images';

const FilmListItem = (props) => {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Image
        source={Images['movie'+props.movie.id]}
        style={styles.movieBackground}/>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.movieName}>{props.movie.title}</Text>
        </View>
        <View style={styles.score}>
          <Text style={styles.year}>{props.movie.release_date}</Text>
          <Text style={styles.currentScore}>{props.movie.rt_score + ' / 100'}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
};

FilmListItem.propTypes = {
  movie: PropTypes.object,
  index: PropTypes.number,
  style: PropTypes.any
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

export default FilmListItem;
