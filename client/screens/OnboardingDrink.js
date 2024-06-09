import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const { width, height } = Dimensions.get("window");

const backgroundImage = require("../assets/images/Onboarding.png");
const buttonImage = require("../assets/images/btn-onboard.png");

const App = ({ navigation, route }) => {
  const {
    totalPrice,
    cinemaName,
    showtimeType,
    time,
    selectedSeats,
    selectedDay,
  } = route.params;

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.background}>
        <View style={styles.overlay}></View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("DrinkSelection", {
              totalPrice,
              cinemaName,
              showtimeType,
              time,
              selectedSeats,
              selectedDay,
            })
          }
        >
          <Image source={buttonImage} style={styles.button} />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D22A2A",
  },
  background: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 60,
  },
  button: {
    position: "absolute",
    top: 580,
    alignSelf: "center",
    width: 60,
    height: 60,
  },
  warningText: {
    position: "absolute",
    top: 655,
    alignSelf: "center",
    color: "black",
    fontSize: 12,
    textAlign: "center",
    opacity: 0.75,
  },
});

export default App;
