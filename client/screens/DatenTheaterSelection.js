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
import { MaterialIcons } from "@expo/vector-icons";

const DatenTheaterSelection = ({ navigation }) => {
  const [selectedCinema, setSelectedCinema] = useState(null);

  const [cinemas, setCinemas] = useState([
    {
      name: "CGV Central Park",
      showtimes: [
        {
          type: "Regular 2D",
          times: [
            { time: "10:00", isSelected: false },
            { time: "12:00", isSelected: false },
            { time: "14:00", isSelected: false },
            { time: "16:00", isSelected: false },
            { time: "18:00", isSelected: false },
            { time: "20:00", isSelected: false },
            { time: "22:00", isSelected: false },
            { time: "23:00", isSelected: false },
          ],
        },
        {
          type: "Satin Class",
          times: [
            { time: "10:00", isSelected: false },
            { time: "14:00", isSelected: false },
          ],
        },
        {
          type: "4DX",
          times: [
            { time: "10:00", isSelected: false },
            { time: "14:00", isSelected: false },
          ],
        },
      ],
    },
    {
      name: "CGV Test",
      showtimes: [
        {
          type: "Regular 2D",
          times: [
            { time: "10:00", isSelected: false },
            { time: "12:00", isSelected: false },
            { time: "14:00", isSelected: false },
            { time: "16:00", isSelected: false },
            { time: "18:00", isSelected: false },
            { time: "20:00", isSelected: false },
          ],
        },
        {
          type: "Satin Class",
          times: [
            { time: "10:00", isSelected: false },
            { time: "14:00", isSelected: false },
          ],
        },
        {
          type: "4DX",
          times: [
            { time: "10:00", isSelected: false },
            { time: "14:00", isSelected: false },
          ],
        },
      ],
    },
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

  const [collapsedStates, setCollapsedStates] = useState(
    cinemas.map(() => true)
  );

  const toggleCollapse = (index) => {
    setCollapsedStates((prevState) =>
      prevState.map((state, i) => (i === index ? !state : true))
    );
    setSelectedCinema(index === selectedCinema ? null : index);
  };

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

  const getCurrentTime = () => {
    const now = new Date();
    return now.getHours() * 60 + now.getMinutes();
  };

  const isTimePast = (timeString) => {
    const [hours, minutes] = timeString.split(":").map(Number);
    const timeInMinutes = hours * 60 + minutes;
    return timeInMinutes <= getCurrentTime();
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
      <ScrollView style={styles.container}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.daysScrollView}
        >
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
              <View style={styles.cinemasIndexContainer} key={cinemaIndex}>
                <TouchableOpacity
                  style={styles.cinemaButton}
                  onPress={() => toggleCollapse(cinemaIndex)}
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
                  {/* Render different icon based on collapsed or expanded state */}
                  {collapsedStates[cinemaIndex] ? (
                    <MaterialIcons
                      name="keyboard-arrow-down"
                      size={30}
                      color="white"
                    />
                  ) : (
                    <MaterialIcons
                      name="keyboard-arrow-up"
                      size={30}
                      color="white"
                    />
                  )}
                </TouchableOpacity>
                <Collapsible collapsed={collapsedStates[cinemaIndex]}>
                  {cinema.showtimes.map((showtime, showtimeIndex) => (
                    <View key={showtimeIndex}>
                      <View style={styles.divider} />
                      <Text style={styles.showtimeType}>{showtime.type}</Text>
                      <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                      >
                        {showtime.times.map((time, timeIndex) => {
                          const isPast = isTimePast(time.time);
                          return (
                            <TouchableOpacity
                              key={timeIndex}
                              style={[
                                styles.timeButton,
                                time.isSelected
                                  ? styles.selectedTimeButton
                                  : styles.unselectedTimeButton,
                                isPast && styles.disabledTimeButton,
                              ]}
                              onPress={() => {
                                if (!isPast) {
                                  selectTime(
                                    cinemaIndex,
                                    showtimeIndex,
                                    timeIndex
                                  );
                                }
                              }}
                              disabled={isPast}
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
                          );
                        })}
                      </ScrollView>
                    </View>
                  ))}
                </Collapsible>
              </View>
            ))}
            <View style={styles.divider} />
          </View>
        </ScrollView>
      </ScrollView>
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
  divider: {
    borderBottomColor: "#1F271D",
    borderBottomWidth: 1,
    marginVertical: 20,
  },
  showtimeType: {
    color: "#fff",
    fontSize: 18,
    marginVertical: 10,
    marginHorizontal: 20,
    fontFamily: "interExtraLight",
    fontSize: 16,
  },
  timeButton: {
    borderWidth: 1,
    borderColor: "white",
    paddingHorizontal: 23,
    paddingVertical: 10,
    borderRadius: 20,
    marginHorizontal: 5,
    backgroundColor: "#1C1C1C",
    opacity: 1,
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
  disabledTimeButton: {
    backgroundColor: "grey",
    borderColor: "grey",
  },
  cinemaButton: {
    paddingTop: 20,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
    backgroundColor: "#1a1a1a",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cinemaName: {
    color: "#fff",
    fontSize: 18,
    textAlign: "left",
    marginLeft: 10,
    fontFamily: "interExtraLight",
  },
  cinemasContainer: {
    marginHorizontal: 13,
    borderRadius: 15,
    marginVertical: 13,
  },
  cinemaNameSelected: {
    fontWeight: "bold",
  },
  cinemasIndexContainer: {
    backgroundColor: "#1a1a1a",
    marginBottom: 20,
    paddingBottom: 20,
    borderRadius: 15,
  },
});

export default DatenTheaterSelection;
