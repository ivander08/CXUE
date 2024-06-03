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
import Collapsible from "react-native-collapsible";

const DatenTheaterSelection = ({ navigation }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const [selectedDay, setSelectedDay] = useState(null);
  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return d;
  });

  const formatDate = (date) => {
    if (!date) return formatDate(new Date());
    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
      date.getDay()
    ];
    const day = date.getDate();
    const month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ][date.getMonth()];
    return `${weekday} ${day} ${month}`;
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.page}>
        <Image
          source={require("../assets/images/Parasite.jpg")}
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
      <ScrollView style={styles.container}>
        <ScrollView horizontal={true} style={styles.daysScrollView}>
          {days.map((day, index) => {
            const [weekday, dayNumber, month] = formatDate(day).split(" ");
            const isSelected = formatDate(day) === formatDate(selectedDay);
            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.dayButton,
                  isSelected
                    ? styles.selectedDayButton
                    : styles.unselectedDayButton,
                ]}
                onPress={() => {
                  setSelectedDay(day);
                  // console.log(`Ticket for ${formatDate(day)}`);
                }}
              >
                <Text
                  style={
                    isSelected
                      ? styles.selectedDayText
                      : styles.unselectedDayText
                  }
                >
                  {weekday}
                </Text>
                <Text
                  style={
                    isSelected
                      ? styles.selectedDayNumberText
                      : styles.unselectedDayNumberText
                  }
                >
                  {dayNumber}
                </Text>
                <Text
                  style={
                    isSelected
                      ? styles.selectedDayText
                      : styles.unselectedDayText
                  }
                >
                  {month}
                </Text>
                {isSelected && <View style={styles.selectedDayDot} />}
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <View style={styles.dropdownContainer}>
          <TouchableOpacity onPress={() => setIsCollapsed(!isCollapsed)}>
            <Text>CGV Central Park</Text>
          </TouchableOpacity>
          <Collapsible collapsed={isCollapsed}>
            <ScrollView>
              <View style={styles.dropdown}>
                <Text>Regular 2D</Text>
                <Text>10:00 AM</Text>
                <Text>10:00 AM</Text>
                <Text>10:00 AM</Text>
                <Text>10:00 AM</Text>
                <Text>10:00 AM</Text>
              </View>
              <View style={styles.dropdown}>
                <Text>Satin Class</Text>
                <Text>10:00 AM</Text>
                <Text>10:00 AM</Text>
                <Text>2:00 PM</Text>
              </View>
              <View style={styles.dropdown}>
                <Text>4DX</Text>
                <Text>10:00 AM</Text>
                <Text>10:00 AM</Text>
                <Text>2:00 PM</Text>
              </View>
            </ScrollView>
          </Collapsible>
        </View>
      </ScrollView>
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
  daysScrollView: {
    flexDirection: "row",
    padding: 10,
  },
  dayButton: {
    width: 77,
    height: 120,
    marginRight: 20,
    borderRadius: 10,
    padding: 10,
  },
  selectedDayButton: {
    backgroundColor: "red",
  },
  unselectedDayButton: {
    backgroundColor: "white",
  },
  selectedDayText: {
    textAlign: "center",
    color: "white",
    fontSize: 15,
  },
  unselectedDayText: {
    textAlign: "center",
    color: "red",
    fontSize: 15,
  },
  selectedDayNumberText: {
    textAlign: "center",
    color: "white",
    fontWeight: "800",
    fontSize: 30,
  },
  unselectedDayNumberText: {
    textAlign: "center",
    color: "red",
    fontWeight: "800",
    fontSize: 30,
  },
  selectedDayDot: {
    width: 6,
    height: 6,
    borderRadius: 5,
    backgroundColor: "white",
    alignSelf: "center",
    bottom: -15,
  },
  dropdownContainer: {
    backgroundColor: "#141A12",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 10,
  },
  dropdown: {
    height: 400,
    width: 200,
  },
});

export default DatenTheaterSelection;
