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
  const [cinemas, setCinemas] = useState([
    {
      name: "CGV Central Park",
      showtimes: [
        {
          type: "Regular 2D",
          times: [
            { time: "10:00", isSelected: false },
            { time: "12:00", isSelected: false },
            { time: "10:00", isSelected: false },
            { time: "12:00", isSelected: false },
            { time: "10:00", isSelected: false },
            { time: "12:00", isSelected: false },
            { time: "10:00", isSelected: false },
            { time: "12:00", isSelected: false },
            // ...
          ],
        },
        {
          type: "Satin Class",
          times: [
            { time: "10:00", isSelected: false },
            { time: "2:00", isSelected: false },
            // ...
          ],
        },
        {
          type: "4DX",
          times: [
            { time: "10:00", isSelected: false },
            { time: "2:00", isSelected: false },
            // ...
          ],
        },
      ],
    },
    // ...
  ]);

  const selectTime = (cinemaIndex, showtimeIndex, timeIndex) => {
    setCinemas(
      cinemas.map((cinema, i) => {
        if (i === cinemaIndex) {
          return {
            ...cinema,
            showtimes: cinema.showtimes.map((showtime, j) => {
              return {
                ...showtime,
                times: showtime.times.map((time, k) => {
                  if (j === showtimeIndex && k === timeIndex) {
                    return { ...time, isSelected: true };
                  }
                  return { ...time, isSelected: false };
                }),
              };
            }),
          };
        }
        return cinema;
      })
    );
  };

  const [selectedCinema, setSelectedCinema] = useState(null);

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
        <ScrollView>
          <View style={styles.cinemasContainer}>
            {cinemas.map((cinema, cinemaIndex) => (
              <View key={cinemaIndex}>
                <TouchableOpacity
                  style={styles.cinemaButton}
                  onPress={() => {
                    setIsCollapsed(
                      selectedCinema === cinemaIndex ? !isCollapsed : false
                    );
                    setSelectedCinema(
                      selectedCinema === cinemaIndex ? null : cinemaIndex
                    );
                  }}
                >
                  <Text
                    style={[
                      styles.cinemaName,
                      selectedCinema === cinemaIndex &&
                        styles.cinemaNameSelected,
                    ]}
                  >
                    {cinema.name}
                  </Text>
                </TouchableOpacity>
                <Collapsible collapsed={isCollapsed}>
                  {cinema.showtimes.map((showtime, showtimeIndex) => (
                    <View style={styles.showTimeContainer} key={showtimeIndex}>
                      <Text style={styles.showtimeType}>{showtime.type}</Text>
                      <ScrollView horizontal>
                        {showtime.times.map((time, timeIndex) => (
                          <TouchableOpacity
                            key={timeIndex}
                            style={[
                              styles.timeButton,
                              time.isSelected
                                ? styles.selectedTimeButton
                                : styles.unselectedTimeButton,
                            ]}
                            onPress={() => {
                              selectTime(cinemaIndex, showtimeIndex, timeIndex);
                              // console.log(`Selected time: ${time.time}`);
                            }}
                          >
                            <Text
                              style={
                                time.isSelected
                                  ? styles.selectedTimeText
                                  : styles.unselectedTimeText
                              }
                            >
                              {time.time}
                            </Text>
                          </TouchableOpacity>
                        ))}
                      </ScrollView>
                      <View style={styles.divider} />
                    </View>
                  ))}
                </Collapsible>
              </View>
            ))}
          </View>
        </ScrollView>
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
  divider: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  showtimeType: {
    color: "#fff",
    fontSize: 18,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  timeButton: {
    borderWidth: 1,
    borderColor: "white",
    paddingHorizontal: 23,
    paddingVertical: 10,
    borderRadius: 20,
    marginHorizontal: 5,
    backgroundColor: "transparent",
  },
  selectedTimeButton: {
    backgroundColor: "red",
    borderColor: "transparent",
  },
  selectedTimeText: {
    color: "#fff",
  },
  unselectedTimeText: {
    color: "#fff",
  },
  cinemaButton: {
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  cinemaName: {
    color: "#fff",
    fontSize: 18,
    textAlign: "left",
    marginLeft: 10,
  },
  cinemasContainer: {
    backgroundColor: "#141A12",
    marginHorizontal: 15,
    borderRadius: 10,
    marginVertical: 7,
  },
  cinemaNameSelected: {
    fontWeight: "bold",
  },
  showTimeContainer: {
    marginHorizontal: 10,
  },
});

export default DatenTheaterSelection;
