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
  const [selectedSeats, setSelectedSeats] = useState([]);

  const [seats, setSeats] = useState([
    Array(9)
      .fill()
      .map(() =>
        Array(4)
          .fill()
          .map(() => ({ selected: false }))
      ),
    Array(9)
      .fill()
      .map(() =>
        Array(5)
          .fill()
          .map(() => ({ selected: false }))
      ),
    Array(9)
      .fill()
      .map(() =>
        Array(4)
          .fill()
          .map(() => ({ selected: false }))
      ),
  ]);
  const handleSeatSelect = (groupIndex, rowIndex, seatIndex) => {
    const newSeats = [...seats];
    newSeats[groupIndex][rowIndex][seatIndex].selected =
      !newSeats[groupIndex][rowIndex][seatIndex].selected;

    // Calculate total seats in all previous groups
    const totalSeatsInPreviousGroups = seats
      .slice(0, groupIndex)
      .reduce((total, group) => total + group[0].length, 0);

    // Calculate seat number across groups
    const seatNumber = totalSeatsInPreviousGroups + seatIndex + 1;

    const seatLabel = `${String.fromCharCode(65 + rowIndex)}${seatNumber}`; // Rows are labeled with letters, seats are labeled with numbers
    if (newSeats[groupIndex][rowIndex][seatIndex].selected) {
      setSelectedSeats([...selectedSeats, seatLabel]);
    } else {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatLabel));
    }
    setSeats(newSeats);
  };

  const handleSelectSeat = () => {
    navigation.navigate("OnboardingDrink");
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
          <View key={groupIndex} style={{ margin: 5 }}>
            {group.map((row, rowIndex) => (
              <View key={rowIndex} style={styles.seatRow}>
                {groupIndex === 0 && (
                  <Text key={rowIndex} style={styles.seatLabel}>
                    {String.fromCharCode(65 + rowIndex)}
                  </Text>
                )}
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
                    {rowIndex === group.length - 1 && (
                      <Text key={seatIndex} style={styles.seatLabel}>
                        {seats
                          .slice(0, groupIndex)
                          .reduce(
                            (total, group) => total + group[0].length,
                            0
                          ) +
                          seatIndex +
                          1}
                      </Text>
                    )}
                  </TouchableOpacity>
                ))}
              </View>
            ))}
          </View>
        ))}
      </View>
      <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
          <MaterialIcons name="event-seat" size={24} color="white" />
          <Text style={styles.legendLabel}>Available</Text>
        </View>
        <View style={styles.legendItem}>
          <MaterialIcons name="event-seat" size={24} color="gray" />
          <Text style={styles.legendLabel}>Unavailable</Text>
        </View>
        <View style={styles.legendItem}>
          <MaterialIcons name="event-seat" size={24} color="red" />
          <Text style={styles.legendLabel}>Selected</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <TouchableOpacity
        onPress={handleSelectSeat}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonTitle}>Select Drinks</Text>
        <Text style={styles.buttonDescription}>
          {`${selectedSeats.length}x Tickets | ${selectedSeats.join(", ")}`}
        </Text>
      </TouchableOpacity>
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
  seatLabel: {
    color: "#636461",
    fontSize: 10,
    margin: 5,
  },
  divider: {
    borderBottomColor: "#1F271D",
    borderBottomWidth: 1,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  legendContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
    paddingHorizontal: 40,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  legendLabel: {
    marginLeft: 5,
    color: "#D1D2D0",
    fontSize: 12,
  },
  buttonContainer: {
    backgroundColor: "#FF1F1F",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  buttonTitle: {
    fontFamily: "inter",
    color: "white",
    fontSize: 17,
  },
  buttonDescription: {
    fontFamily: "interExtraLight",
    color: "white",
    fontSize: 12,
    marginTop: 5,
  },
});

export default SeatSelection;
