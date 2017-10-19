import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, Image } from 'react-native';
import Theme from '../Theme';
import Images from '../assets/Images';

export default class FilmDetailsScreen extends Component {

  constructor(props){
    super(props);

    this.state ={
      movie: props.navigation.state.params.movie
    };
  }

  render() {
    const movie = this.state.movie;
    return(
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}>

        <View style={styles.topContent}>
          <Image style={styles.headerImage} source={Images.fakeDetails}>
            <Text style={styles.title}>
              {movie.title}
            </Text>
          </Image>
          <View style={styles.infos}>
            <Text style={styles.description}>
              {movie.description}
            </Text>
            <View style={styles.separator}/>
            <Text style={styles.smallInfos}>
              Date de sortie : {movie.releaseDate}
            </Text>
            <Text style={styles.smallInfos}>
              Producteur : {movie.producer}
            </Text>
            <Text style={styles.smallInfos}>
              Directeur : {movie.director}
            </Text>
            <Text style={styles.smallInfos}>
              Note : {movie.rtScore} / 100
            </Text>
          </View>
        </View>

        <Image source={Images.ghibliFooter} style={styles.footerImage}/>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  contentContainerStyle: {
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerImage: {
    width: '100%',
    height: 200,
    marginBottom: 10
  },
  footerImage: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
    marginBottom: 10
  },
  topContent: {
    width: '100%',
    alignItems: 'flex-start'
  },
  infos: {
    paddingHorizontal: 15,
  },
  title: {
    position: 'absolute',
    bottom:10,
    right: 0,
    maxWidth: '100%',
    marginLeft: 15,
    padding: 5,
    backgroundColor: Theme.Colors.textOnImageBackground,
    color: Theme.Colors.textColorLight,
    fontSize: 24,
    fontWeight: '300',
    textAlign: 'left'
  },
  description: {
    fontSize: 15,
    fontWeight: '400',
  },
  smallInfos: {
    fontSize: 14,
    fontWeight: '300'
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '70%',
    backgroundColor: Theme.Colors.mainColor
  }
});
