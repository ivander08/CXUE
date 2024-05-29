import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MovieCard = ({ 
    movieName,
    movieDuration,
    moviePoster
}) => {
  return (
    <View style={styles.card}>
      <Image source={moviePoster} style={styles.poster} />
      <Text style={styles.title}>{movieName}</Text>
      <Text style={styles.duration}>{movieDuration}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 150,
  },
  poster: {
    width: 104,
    height: 155,
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  duration: {
    fontSize: 14,
    color: 'gray',
  },
});

export default MovieCard;