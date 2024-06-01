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

  const pages = Array(numPages).fill(require("../assets/images/Parasite.jpg"));
  const handleMovieCardPress = () => {
    navigation.navigate("MovieDetails");
  };
  return (
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
                Math.floor(Math.random() * 10) +
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
          <MovieCard
            movieName={"The Batman"}
            moviePoster={require("../assets/images/Batman.jpg")}
            movieDuration={"2h 56m"}
            onPress={handleMovieCardPress}
          />
          <MovieCard
            movieName={"The Batman"}
            moviePoster={require("../assets/images/Batman.jpg")}
            movieDuration={"2h 56m"}
          />
          <MovieCard
            movieName={"The Batman"}
            moviePoster={require("../assets/images/Batman.jpg")}
            movieDuration={"2h 56m"}
          />
        </ScrollView>
        <Text style={styles.sectionTitle}>Coming Soon</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <MovieCard
            movieName={"The Batman"}
            moviePoster={require("../assets/images/Batman.jpg")}
            movieDuration={"2h 56m"}
          />
          <MovieCard
            movieName={"The Batman"}
            moviePoster={require("../assets/images/Batman.jpg")}
            movieDuration={"2h 56m"}
          />
          <MovieCard
            movieName={"The Batman"}
            moviePoster={require("../assets/images/Batman.jpg")}
            movieDuration={"2h 56m"}
          />
        </ScrollView>
      </View>
    </ScrollView>
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
