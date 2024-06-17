import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Svg, { Path } from "react-native-svg";

const ShowTicket = ({ route, navigation }) => {
  const {
    cart,
    cinemaName,
    selectedDay,
    selectedSeats,
    showtimeType,
    time,
    totalPrice,
  } = route.params;

  const seatLabels = selectedSeats.map((seat) => seat.label).join(", ");

  const seatCount = selectedSeats.length;
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.movieImgBackground}
        source={require("../assets/images/Parasite.jpg")}
      >
        <View style={styles.overlay} />
        <Svg width="318" height="444" viewBox="0 0 318 444">
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.91278e-05 15C5.91278e-05 6.71573 6.71579 0 15.0001 0H303C311.284 0 318 6.71573 318 15V257C306.402 257 297 266.402 297 278C297 289.598 306.402 299 318 299V429C318 437.284 311.284 444 303 444H15.0001C6.71579 444 5.91278e-05 437.284 5.91278e-05 429L0 299.06C11.6311 299.06 21.06 289.631 21.06 278C21.06 266.369 11.6311 256.94 0 256.94L5.91278e-05 15Z"
            fill="#FEFEFE"
          />
          <View style={styles.ticketContent}>
            <View style={styles.ticketFor}>
              <Text style={styles.ticketForText}>Ticket for {seatCount}</Text>
            </View>
            <View style={styles.movieDetails}>
              <Text style={styles.movieName}>Parasite</Text>
              <View style={styles.justifySpaceBetween}>
                <View style={styles.box}>
                  <View style={styles.boxItem}>
                    <Text style={styles.boxText}> 17+ </Text>
                  </View>
                  <View style={styles.transparentBoxItem}>
                    <Text style={styles.transparentboxText}>ENG</Text>
                  </View>
                  <View style={styles.transparentBoxItem}>
                    <Text style={styles.transparentboxText}>SUB INDO</Text>
                  </View>
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
            <View style={styles.ticketDetails}>
              <View style={styles.justifySpaceBetween}>
                <Text
                  style={[styles.transparentText, styles.ticketDetailsText]}
                >
                  Date
                </Text>
                <Text
                  style={[styles.transparentText, styles.ticketDetailsText]}
                >
                  Time
                </Text>
              </View>
              <View style={styles.justifySpaceBetween}>
                <Text style={styles.ticketDetailsText}>{selectedDay}</Text>
                <Text style={styles.ticketDetailsText}>{time}</Text>
              </View>
            </View>
            <View style={styles.ticketDetails}>
              <View style={styles.justifySpaceBetween}>
                <Text
                  style={[styles.transparentText, styles.ticketDetailsText]}
                >
                  Studio
                </Text>
                <Text
                  style={[styles.transparentText, styles.ticketDetailsText]}
                >
                  Seat
                </Text>
              </View>

              <View style={styles.justifySpaceBetween}>
                <Text style={styles.ticketDetailsText}>
                  {`${Math.floor(Math.random() * 4) + 1}, ${cinemaName}`}
                </Text>
                <Text style={styles.ticketDetailsText}>{seatLabels}</Text>
              </View>
            </View>
            <Text style={styles.ticketLine}>
              _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
            </Text>

            <Image
              style={styles.barcode}
              source={require("../assets/images/barcode.png")}
            />
          </View>
        </Svg>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("MyTickets", {
            cart,
            cinemaName,
            selectedDay,
            selectedSeats,
            showtimeType,
            time,
            totalPrice,
          })}
        >
          <Text style={styles.buttonText}>Go Home</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#141C14",
  },
  ticket: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  movieImgBackground: {
    width: "120%",
    height: "120%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#141C14",
  },
  overlay: {
    position: "absolute",
    width: "120%",
    height: "120%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  ticketContent: {
    padding: 20,
  },
  ticketFor: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 31, 31, 0.15)",
    borderRadius: 15,
    padding: 10,
  },
  ticketForText: {
    color: "rgba(255, 31, 31, 0.5)",
    fontSize: 15,
    fontWeight: "bold",
  },
  movieDetails: {
    marginVertical: 18,
  },
  movieName: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 3,
  },
  justifySpaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "red",
    borderRadius: 7,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop: 40,
    width: "65%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  box: {
    justifyContent: "flex-start",
    flexDirection: "row",
    padding: 2,
  },
  transparentBoxItem: {
    fontSize: 7,
    marginRight: 5,
    backgroundColor: "transparent",
    borderWidth: 1,
  },
  transparentboxText: {
    color: "black",
    fontSize: 10,
    padding: 4,
  },
  boxItem: {
    marginRight: 5,
    backgroundColor: "rgba(13, 22, 11, 0.5)",
  },
  boxText: {
    color: "white",
    fontSize: 10,
    borderColor: "white",
    borderWidth: 1,
    padding: 4,
  },
  ratingBoxItem: {
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
  ticketDetails: {
    marginVertical: 5,
  },
  ticketDetailsText: {
    fontSize: 13,
  },
  transparentText: {
    color: "rgba(13, 22, 11, 0.5)",
  },
  ticketLine: {
    marginVertical: 17,
    marginHorizontal: 7,
  },
  barcode: {
    alignSelf: "center",
    marginVertical: 25,
  },
});

export default ShowTicket;
