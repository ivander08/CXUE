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

const MovieDetailsIT = ({ navigation }) => {
  const handleTickets = () => {
    navigation.navigate("DatenTheaterSelection");
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.page}>
        <Image
          source={require("../../assets/images/IT.png")}
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
        <Text style={styles.movieTitle}>IT</Text>
        <Text style={styles.movieDetails}>Horror • Thriller • 2h 15m</Text>
        <View style={styles.box}>
          <View style={styles.boxItem}>
            <Text style={styles.boxText}> R </Text>
          </View>
          <View style={styles.transparentBoxItem}>
            <Text style={styles.transparentBoxText}>ENG</Text>
          </View>
          <View style={styles.transparentBoxItem}>
            <Text style={styles.transparentBoxText}>SUB INDO</Text>
          </View>
          <View style={styles.ratingBoxItem}>
            <Text style={styles.ratingBoxText}>{`iMDb ${(
              Math.floor(Math.random() * 9) +
              1 +
              Math.random()
            ).toFixed(1)}`}</Text>
          </View>
        </View>
      </View>
      <View style={styles.line}></View>
      <View style={styles.synopsisSection}>
        <Text style={styles.synopsisTitleText}>Synopsis</Text>
        <Text style={styles.synopsisText}>
          4/4 ChatGPT "It" is a horror thriller directed by Andy Muschietti,
          based on Stephen King's novel. The film follows a group of children,
          known as the Losers' Club, in the small town of Derry, who are
          terrorized by a malevolent entity that takes the form of a clown named
          Pennywise. As they uncover the truth about Pennywise and his
          connection to a series of child disappearances spanning decades, the
          kids must confront their deepest fears to defeat the evil force. "It"
          masterfully blends supernatural horror with a coming-of-age story,
          highlighting themes of friendship, trauma, and courage. The film
          received critical acclaim for its performances, particularly Bill
          Skarsgård as Pennywise, its atmospheric tension, and its faithful
          adaptation of the source material, becoming a box office success and a
          modern horror classic.
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
    bottom: 50,
    left: 15,
    fontSize: 30,
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

export default MovieDetailsIT;
