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

const MovieDetailsMidsommar = ({ navigation }) => {
  const handleTickets = () => {
    navigation.navigate("DatenTheaterSelection");
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.page}>
        <Image
          source={require("../../assets/images/Midsommar.png")}
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
        <Text style={styles.movieTitle}>Midsommar</Text>
        <Text style={styles.movieDetails}>Horror • Thriller • 2h 18m</Text>
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
          "Midsommar" is a psychological horror film directed by Ari Aster that
          follows a couple, Dani and Christian, as they travel to Sweden to
          attend a rural midsummer festival. What begins as an idyllic retreat
          quickly devolves into a nightmarish ordeal as the insular community's
          disturbing rituals and practices come to light. The film delves into
          themes of grief, relationships, and cultural dissonance, showcasing
          Dani's journey from personal tragedy to empowerment amidst the
          commune's unsettling traditions. "Midsommar" is celebrated for its
          striking cinematography, unsettling atmosphere, and thought-provoking
          narrative, solidifying Aster's reputation as a visionary in modern
          horror.
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

export default MovieDetailsMidsommar;
