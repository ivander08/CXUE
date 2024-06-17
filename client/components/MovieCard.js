import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const MovieCard = ({ movieName, movieDuration, moviePoster, onPress }) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={onPress}>
        <Image source={moviePoster} style={styles.poster} />
      </TouchableOpacity>
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
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  duration: {
    fontSize: 14,
    color: "gray",
  },
});

export default MovieCard;
