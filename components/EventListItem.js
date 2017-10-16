import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment'
import Theme from '../Theme';
import Images from '../assets/Images';

const EventListItem = (props) => {
  let eventDate = moment(props.event.date).format('DD MMM YYYY');
  let eventTime = moment(props.event.date).format('hh : mm');
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={Images.facebookIcon} style={styles.facebookIcon}/>
      <Text style={styles.eventName}>{props.event.name}</Text>
      <View style={styles.dateTime}>
        <Text style={styles.date}>{eventDate}</Text>
        <Text style={styles.time}>{eventTime}</Text>
      </View>
      <View style={styles.separator} />
    </TouchableOpacity>
  )
};

EventListItem.propTypes = {
  event: PropTypes.object
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
    paddingVertical: 15
  },
  eventName: {
    flex:1,
    marginRight: 15,
    fontSize: 12,

  },
  separator: {
    height: 1.5,
    position: 'absolute',
    bottom: 0,
    left: 1,
    width: '100%',
    backgroundColor: Theme.Colors.separatorColor
  },
  dateTime: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  date: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 12,
    fontWeight: '200'
  },
  facebookIcon: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
    marginRight: 15,
  }
});

export default EventListItem;
