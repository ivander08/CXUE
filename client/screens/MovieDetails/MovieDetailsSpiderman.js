import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const MovieDetailsSpiderman = ({ navigation }) => {
  const handleTickets = () => {
    navigation.navigate("DatenTheaterSelection");
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.page}>
        <Image
          source={require("../../assets/images/Spiderman.png")}
          style={styles.movieImage}
        />
        <LinearGradient
          colors={["transparent", "#0D160B"]}
          locations={[0, 0.9]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 300,
          }}
        />
        <Text style={styles.movieTitle}>Spider-Man: Across the Spider-Verse</Text>
        <Text style={styles.movieDetails}>Action • Cartoon • 2h 20m</Text>
        <View style={styles.box}>
          <View style={styles.boxItem}>
            <Text style={styles.boxText}> PG-13 </Text>
          </View>
          <View style={styles.transparentBoxItem}>
            <Text style={styles.transparentBoxText}>ENG</Text>
          </View>
          <View style={styles.transparentBoxItem}>
            <Text style={styles.transparentBoxText}>SUB INDO</Text>
          </View>
          <View style={styles.ratingBoxItem}>
            <Text style={styles.ratingBoxText}>iMDb 8.5</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleTickets}>
          <Text style={styles.buttonText}>Buy tickets</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.line}></View>
      <View style={styles.synopsisSection}>
        <Text style={styles.synopsisTitleText}>Synopsis</Text>
        <Text style={styles.synopsisText}>
          ""Spider-Man: Across the Spider-Verse" is an animated superhero film
          directed by Joaquim Dos Santos, Kemp Powers, and Justin K. Thompson.
          The story continues the adventures of Miles Morales as he encounters a
          team of Spider-People from different dimensions. When a new threat
          emerges that could destroy the multiverse, Miles teams up with Gwen
          Stacy and other Spider-People, including an older, jaded Peter B.
          Parker and Spider-Man 2099. The film delves into themes of identity,
          responsibility, and heroism, highlighting Miles' struggle to balance
          his personal life with his duties as Spider-Man. "Spider-Man: Across
          the Spider-Verse" is celebrated for its groundbreaking animation,
          compelling narrative, and rich character development, further
          solidifying its place in the Spider-Man saga.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D160B",
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
  movieTitle: {
    position: "absolute",
    bottom: 57,
    left: 15,
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    fontFamily: "interBlack",
  },
  movieImage: {
    width: "100%",
    height: 400,
  },
  movieDetails: {
    color: "white",
    fontFamily: "interExtraLight",
    position: "absolute",
    bottom: 90,
    left: 15,
    fontSize: 10,
  },
  box: {
    justifyContent: "flex-start",
    flexDirection: "row",
    position: "absolute",
    bottom: 20,
    left: 15,
    right: 15,
    padding: 2,
  },
  boxItem: {
    fontSize: 7,
    marginRight: 5,
    backgroundColor: "white",
  },
  boxText: {
    color: "black",
    fontSize: 10,
    padding: 4,
  },
  transparentBoxItem: {
    marginRight: 5,
    backgroundColor: "transparent",
  },
  transparentBoxText: {
    color: "white",
    fontSize: 10,
    borderColor: "white",
    borderWidth: 1,
    padding: 4,
  },
  ratingBoxItem: {
    marginLeft: 170,
    backgroundColor: "#9C914F",
    padding: 2,
  },
  ratingBoxText: {
    fontWeight: "bold",
    padding: 4,
    fontSize: 12,
    color: "white",
    fontSize: 10,
  },
  buttonContainer: {
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "red",
    borderRadius: 7,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  line: {
    borderBottomColor: "#1F271D",
    borderBottomWidth: 1,
    marginTop: 20,
    marginHorizontal: 20,
  },
  synopsisSection: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  synopsisTitleText: {
    color: "white",
    fontWeight: "bold",
    fontFamily: "interBlack",
    fontSize: 15,
  },
  synopsisText: {
    color: "white",
    fontSize: 12,
    marginTop: 10,
    marginBottom: 20,
    textAlign: "justify",
  },
});

export default MovieDetailsSpiderman;
