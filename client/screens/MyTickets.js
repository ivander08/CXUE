import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { drinks } from "../screens/DrinkSelection";
import { MaterialIcons } from "@expo/vector-icons";

const PrizeInText = ({ text }) => (
  <View style={styles.prizeBorder}>
    <MaterialIcons name="card-giftcard" size={24} color="#D8C764" />
    <Text style={styles.prizeText}>{text}</Text>
  </View>
);

const PrizeWithImage = ({ image }) => (
  <View style={styles.centeredView}>
    <Image source={image} style={{ width: 100, height: 100 }} />
  </View>
);

const Prize = ({ prize }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    setModalVisible(true);
  };

  const handleClose = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleClose}
      >
        <TouchableOpacity style={styles.centeredView} onPress={handleClose}>
          <View style={styles.modalBackgroundColor}>
            <View style={styles.div}>
              <Text style={styles.modalText}>Your Coupon Code:</Text>
            </View>
            <View style={styles.prizeContent}>
              <View style={styles.prizeBorder}>
                <Text style={styles.prizeText}>{prize.code}</Text>
              </View>
              <TouchableOpacity
                onPress={handleClose}
                style={styles.closeButton}
              >
                <Text style={styles.buttonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>

      {prize.type === "text" ? (
        <TouchableOpacity onPress={handlePress}>
          <PrizeInText text={prize.text} code={prize.code} />
        </TouchableOpacity>
      ) : prize.type === "image" ? (
        <TouchableOpacity onPress={handlePress}>
          <PrizeWithImage image={prize.image} code={prize.code} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

function MyTickets({ route, navigation }) {
  const [paramsArray, setParamsArray] = useState([]);

  const [isButtonClicked, setButtonClicked] = useState(false);

  const [prizeTexts, setPrizeTexts] = useState([]);

  useEffect(() => {
    if (route.params && route.params.fromOrder) {
      // Add new params to paramsArray
      setParamsArray((prevParamsArray) => [...prevParamsArray, route.params]);
      // If prize exists, add its text to prizeTexts
      if (route.params.prize) {
        setPrizeTexts((prevPrizeTexts) => [
          ...prevPrizeTexts,
          route.params.prize,
        ]);
      }
    }
  }, [route.params]);

  if (!route.params) {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.line}></View>
        <View style={styles.toggleButtonContainer}>
          <TouchableOpacity
            style={styles.toggleButton}
            onPress={() => setButtonClicked(!isButtonClicked)}
          >
            <Text style={styles.toggleButtonText}>Inventory</Text>
            {isButtonClicked ? (
              <MaterialIcons name="keyboard-arrow-up" size={30} color="white" />
            ) : (
              <MaterialIcons
                name="keyboard-arrow-down"
                size={30}
                color="white"
              />
            )}
          </TouchableOpacity>
          {isButtonClicked &&
            prizeTexts.map((text, index) => (
              <Text
                key={index}
                style={isButtonClicked ? styles.clickedText : null}
              >
                {text ? text : "No prize"}
              </Text>
            ))}
        </View>
      </ScrollView>
    );
  }
  if (route.params) {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.line}></View>
        {paramsArray.map((params, index) => {
          const {
            cart,
            cinemaName,
            selectedDay,
            selectedSeats,
            showtimeType,
            time,
            prize,
          } = params;

          console.log(prize);

          const seatLabels = selectedSeats.map((seat) => seat.label).join(", ");

          const seatCount = selectedSeats.length;

          const renderCartSummary = () => {
            return Object.entries(cart).map(([id, count]) => {
              const drink = drinks.find((item) => item.id === id);
              if (drink) {
                return (
                  <View key={id} style={styles.row}>
                    <Text style={styles.fnb}>
                      {count}x {drink.name}
                    </Text>
                    <View style={styles.circle}></View>
                  </View>
                );
              }
              return null;
            });
          };

          return (
            <View key={index} style={styles.innercontainer}>
              <View style={styles.box}>
                <View style={styles.title}>
                  <View style={styles.icon}>
                    <Ionicons name="ticket" size={20} color="white" />
                  </View>
                  <Text style={styles.movie}>Parasite</Text>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      navigation.navigate("ShowTicket", {
                        cart,
                        cinemaName,
                        selectedDay,
                        selectedSeats,
                        showtimeType,
                        time,
                        fromOrder: false,
                      });
                    }}
                  >
                    <Text style={styles.buttonText}>Show Ticket</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.title}>
                  <Text style={styles.count}>{seatCount}x</Text>
                  <Text style={styles.seat}>{seatLabels}</Text>
                  <Text style={styles.info}>{selectedDay}</Text>
                </View>
                <View style={styles.title}>
                  <Text style={styles.theater}>{cinemaName}</Text>
                  <Text style={styles.theater}>{showtimeType}</Text>
                  <Text style={styles.theater}>{time}</Text>
                </View>
                <View style={[styles.innerline]}></View>
                {renderCartSummary()}
              </View>
            </View>
          );
        })}
        <View style={styles.line}></View>
        <View style={styles.toggleButtonContainer}>
          <TouchableOpacity
            style={styles.toggleButton}
            onPress={() => setButtonClicked(!isButtonClicked)}
          >
            <Text style={styles.toggleButtonText}>Inventory</Text>
            {isButtonClicked ? (
              <MaterialIcons name="keyboard-arrow-up" size={30} color="white" />
            ) : (
              <MaterialIcons
                name="keyboard-arrow-down"
                size={30}
                color="white"
              />
            )}
          </TouchableOpacity>
          {isButtonClicked &&
            prizeTexts.map((prize, index) => (
              <View
                key={index}
                style={{
                  padding: 10,
                  backgroundColor: "#141A13",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Prize prize={prize} />
              </View>
            ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#0D160B",
    alignItems: "center",
  },
  line: {
    width: "90%",
    height: 1,
    backgroundColor: "white",
    opacity: 0.3,
    marginTop: 70,
  },
  innerline: {
    width: "90%",
    height: 1,
    backgroundColor: "white",
    opacity: 0.3,
    marginLeft: "5%",
    marginRight: "5%",
  },
  column: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  innercontainer: {
    marginTop: 20,
    width: "90%",
    justifyContent: "center",
    backgroundColor: "#141A13",
    borderRadius: 10,
    overflow: "hidden",
  },
  box: {
    paddingTop: 30,
    paddingBottom: 20,
    width: "100%",
  },
  box2: {
    backgroundColor: "#182017",
  },
  icon: {
    backgroundColor: "rgba(254, 254, 254, 0.3)",
    borderRadius: 50,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  movie: {
    color: "white",
    fontFamily: "inter",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    width: 150,
  },
  title: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: 5,
  },
  button: {
    backgroundColor: "#D8C764",
    padding: 3,
    paddingRight: 15,
    paddingLeft: 15,
    borderRadius: 20,
    marginLeft: 10,
  },
  buttonText: {
    color: "#0D160B",
    fontFamily: "inter",
    fontWeight: "bold",
    fontSize: 14,
  },
  count: {
    color: "white",
    fontFamily: "inter",
    fontSize: 15,
    fontWeight: "medium",
    marginRight: 10,
    opacity: 0.5,
    backgroundColor: "rgba(254, 254, 254, 0.4)",
    padding: 5,
    paddingRight: 15,
    paddingLeft: 15,
    borderRadius: 20,
    alignSelf: "center",
  },
  seat: {
    width: 80,
    color: "white",
    fontFamily: "inter",
    fontSize: 15,
    fontWeight: "medium",
    marginRight: 10,
    opacity: 0.5,
    alignSelf: "center",
  },
  info: {
    color: "white",
    fontFamily: "inter",
    fontSize: 15,
    fontWeight: "medium",
    marginLeft: 30,
    opacity: 0.5,
    alignSelf: "center",
  },
  theater: {
    color: "white",
    fontFamily: "interExtraLight",
    fontSize: 10,
    fontWeight: "medium",
    margin: 10,
    opacity: 0.5,
  },
  circle: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: "#D8C764",
    alignSelf: "center",
  },
  fnb: {
    color: "white",
    fontFamily: "inter",
    fontSize: 15,
    fontWeight: "medium",
    margin: 10,
    marginLeft: 80,
    opacity: 0.5,
  },
  toggleButtonContainer: {
    borderRadius: 15,
    marginBottom: 65,
  },
  toggleButton: {
    paddingHorizontal: 12,
    borderRadius: 5,
    marginVertical: 10,
    backgroundColor: "#1a1a1a",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 80,
    width: 350,
  },
  toggleButtonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "left",
    fontFamily: "interExtraLight",
  },
  clickedText: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "#fff",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalBackgroundColor: {
    backgroundColor: "#1A1A1A",
    borderRadius: 15,
    padding: 20,
    width: "80%",
    alignItems: "center",
  },
  div: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  modalTextBig: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 10,
  },
  modalText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  prizeBorder: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#D8C764",
    backgroundColor: "#182017",
    padding: 10,
    flexDirection: "row",
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  prizeText: {
    color: "white",
    fontSize: 20,
    marginLeft: 10,
  },
  prizeContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  closeButton: {
    backgroundColor: "#D8C764",
    borderRadius: 7,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  prizeTextImage: {
    color: "#D8C764",
    fontSize: 20,
  },
});

export default MyTickets;
