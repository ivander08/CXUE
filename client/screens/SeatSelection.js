import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import Svg, { Path } from "react-native-svg";

const SeatSelection = ({ navigation }) => {
  const [seats, setSeats] = useState([
    Array(9)
      .fill()
      .map(() => Array(4).fill({ selected: false })),
    Array(9)
      .fill()
      .map(() => Array(5).fill({ selected: false })),
    Array(9)
      .fill()
      .map(() => Array(4).fill({ selected: false })),
  ]);

  const handleSeatSelect = (group, row, col) => {
    const newSeats = [...seats];
    newSeats[group][row][col] = {
      ...newSeats[group][row][col],
      selected: !newSeats[group][row][col].selected,
    };
    setSeats(newSeats);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.page}>
        <Image
          source={require("../assets/images/Parasite.jpg")}
          style={styles.movieImage}
        />

        <LinearGradient
          colors={["transparent", "#141C14"]}
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
        <Text style={styles.movieDetails}>Horror • Thriller • 2h 11m</Text>
        <View style={styles.box}>
          <View style={styles.boxItem}>
            <Text style={styles.boxText}> 17+ </Text>
          </View>
          <View style={styles.transparentBoxItem}>
            <Text style={styles.transparentBoxText}>KOR</Text>
          </View>
          <View style={styles.transparentBoxItem}>
            <Text style={styles.transparentBoxText}>SUB INDO</Text>
          </View>
          <View style={styles.ratingBoxItem}>
            <Text style={styles.ratingBoxText}>iMDb 8.5</Text>
          </View>
        </View>
      </View>
      <View style={styles.screenIndicatorContainer}>
        <Svg height="20" width="100%" viewBox="0 0 300 20">
          <Path
            d="M0 10 Q 150 -5 300 10"
            stroke="#868A85"
            strokeWidth="2"
            fill="none"
          />
        </Svg>
      </View>
      <View style={styles.seatsContainer}>
        {seats.map((group, groupIndex) => (
          <View key={groupIndex} style={{margin: 5}}>
            {group.map((row, rowIndex) => (
              <View key={rowIndex} style={styles.seatRow}>
                {row.map((seat, seatIndex) => (
                  <TouchableOpacity
                    key={seatIndex}
                    style={[
                      styles.seat,
                      seat.selected ? styles.selectedSeat : {},
                    ]}
                    onPress={() =>
                      handleSeatSelect(groupIndex, rowIndex, seatIndex)
                    }
                  >
                    <MaterialIcons
                      name="event-seat"
                      size={24}
                      color={seat.selected ? "red" : "white"}
                    />
                  </TouchableOpacity>
                ))}
              </View>
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141C14",
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
  seatsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  seatRow: {
    flexDirection: "row",
    justifyContent: "flex-Start",
    alignItems: "center",
    flexWrap: "wrap",
  },
  seat: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  screenIndicatorContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    width: "100%",
  },
});

export default SeatSelection;
