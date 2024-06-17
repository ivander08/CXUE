import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import MovieCard from "../components/MovieCard";
import PagerView from "react-native-pager-view";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const numPages = 4;
  const navigation = useNavigation();

  const handleMovieCardPressParasite = () => {
    navigation.navigate("MovieDetailsParasite");
  };

  const handleMovieCardPressSpiderman = () => {
    navigation.navigate("MovieDetailsSpiderman");
  };

  const handleMovieCardPressShinGojira = () => {
    navigation.navigate("MovieDetailsShinGojira");
  };

  const handleMovieCardPressBatman = () => {
    navigation.navigate("MovieDetailsTheBatman");
  };

  const MovieDetailsIT = () => {
    navigation.navigate("MovieDetailsIT");
  };

  const MovieDetailsJoker = () => {
    navigation.navigate("MovieDetailsJoker");
  };

  const MovieDetailsMidsommar = () => {
    navigation.navigate("MovieDetailsMidsommar");
  };

  const handleMovieCardPressArray = [
    handleMovieCardPressParasite,
    handleMovieCardPressBatman,
    handleMovieCardPressSpiderman,
    handleMovieCardPressShinGojira,
  ];

  const handleMovieCardPressArrayUpcoming = [
    MovieDetailsIT,
    MovieDetailsJoker,
    MovieDetailsMidsommar,
  ];

  const pages = [
    require("../assets/images/Parasite.jpg"),
    require("../assets/images/Spiderman.png"),
    require("../assets/images/Shingojira.png"),
    require("../assets/images/Batman.jpg"),
  ];

  const nowShowingMoviePosters = [
    require("../assets/images/Parasite.jpg"),
    require("../assets/images/Batman.jpg"),
    require("../assets/images/Spiderman.png"),
    require("../assets/images/Shingojira.png"),
  ];

  const nowShowingMovieName = [
    "Parasite",
    "The Batman",
    "Spiderman",
    "Shingojira",
  ];

  const nowShowingMovieDuration = ["2h 11m", "2h 20m", "2h 56m", "2h 0m"];

  const upcomingMoviePosters = [
    require("../assets/images/IT.png"),
    require("../assets/images/Joker.png"),
    require("../assets/images/Midsommar.png"),
  ];

  const upcomingMovieName = ["IT", "Joker", "Midsommar"];

  const upcomingMovieDuration = ["2h 15m", "2h 2m", "2h 18m"];

  return (
    <>
      <ScrollView style={styles.container}>
        <PagerView
          style={styles.pagerView}
          initialPage={0}
          onPageSelected={(event) => setPageIndex(event.nativeEvent.position)}
        >
          {pages.map((page, index) => (
            <View style={styles.page} key={index + 1}>
              <Image source={page} style={styles.carouselImage} />
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
              <Text style={styles.movieTitle}>Parasite</Text>
              <Text style={styles.movieRating}>
                {`iMDb ${(
                  Math.floor(Math.random() * 9) +
                  1 +
                  Math.random()
                ).toFixed(1)}`}
              </Text>
            </View>
          ))}
        </PagerView>
        <View style={styles.dotIndicator}>
          {Array(numPages)
            .fill()
            .map((_, i) => (
              <View
                key={i}
                style={[
                  styles.dot,
                  pageIndex === i ? styles.dotActive : styles.dotInactive,
                ]}
              />
            ))}
        </View>
        <View style={styles.movieCardContainer}>
          <Text style={styles.sectionTitle}>Now Showing</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {nowShowingMoviePosters.map((nowShowingMoviePoster, index) => (
              <MovieCard
                key={index}
                movieName={nowShowingMovieName[index]}
                moviePoster={nowShowingMoviePoster}
                movieDuration={nowShowingMovieDuration[index]}
                onPress={handleMovieCardPressArray[index]}
              />
            ))}
          </ScrollView>
          <Text style={styles.sectionTitle}>Coming Soon</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {upcomingMoviePosters.map((upcomingMoviePosters, index) => (
              <MovieCard
                key={index}
                movieName={upcomingMovieName[index]}
                moviePoster={upcomingMoviePosters}
                movieDuration={upcomingMovieDuration[index]}
                onPress={handleMovieCardPressArrayUpcoming[index]}
              />
            ))}
          </ScrollView>
        </View>
        <View style={{ marginBottom: 80 }}></View>
      </ScrollView>
      {/* <Navbar /> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D160B",
  },
  sectionTitle: {
    color: "white",
    marginTop: 20,
    fontFamily: "interBlack",
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
  pagerView: {
    height: 400,
    marginBottom: 20,
  },
  movieCardContainer: {
    marginLeft: 15,
  },
  movieTitle: {
    position: "absolute",
    bottom: 30,
    left: 15,
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    fontFamily: "interBlack",
  },
  dotIndicator: {
    flexDirection: "row",
    marginTop: -50,
    marginLeft: 290,
    marginBottom: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 2,
  },
  dotActive: {
    backgroundColor: "white",
    width: 35,
  },
  dotInactive: {
    backgroundColor: "gray",
  },
  carouselImage: {
    width: "100%",
    height: 400,
  },
  movieRating: {
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "red",
    position: "absolute",
    bottom: 0,
    left: 15,
    fontSize: 11,
    color: "white",
    fontFamily: "interBlack",
  },
});

export default Home;
