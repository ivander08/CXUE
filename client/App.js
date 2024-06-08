import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import LoadingScreenRed from "./screens/LoadingScreenRed";
import LoadingScreenWhite from "./screens/LoadingScreenWhite";
import Register from "./screens/auth/Register";
import Login from "./screens/auth/Login";
import Home from "./screens/Home";
import DrinkSelection from "./screens/DrinkSelection"; // Import screen baru
import OnboardingDrink from "./screens/OnboardingDrink"; // Import screen baru with 
import Navbar from "./components/navbar";
import Profile from "./screens/profile";
import MovieDetailsParasite from "./screens/MovieDetails/MovieDetailsParasite";
import MovieDetailsSpiderman from "./screens/MovieDetails/MovieDetailsSpiderman";
import MovieDetailsTheBatman from "./screens/MovieDetails/MovieDetailsTheBatman";
import MovieDetailsShinGojira from "./screens/MovieDetails/MovieDetailsShingojira";
import DatenTheaterSelection from "./screens/DatenTheaterSelection";
import { Image, TouchableOpacity, View, Text } from "react-native";
import { initializeApp } from "@firebase/app";
import SeatSelection from "./screens/SeatSelection";
import ShowTicket from "./screens/ShowTicket";

const Stack = createStackNavigator();

const firebaseConfig = {
  apiKey: "AIzaSyAjZI1Ptz_Pi8tALO40dedUdZ1N3s8hIYE",
  authDomain: "cxue-7755b.firebaseapp.com",
  projectId: "cxue-7755b",
  storageBucket: "cxue-7755b.appspot.com",
  messagingSenderId: "958920074281",
  appId: "1:958920074281:web:bff7918778be443366e838",
  measurementId: "G-V76PY08GJ3",
};

initializeApp(firebaseConfig);

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    inter: require("./assets/fonts/Inter-Regular.ttf"),
    interBlack: require("./assets/fonts/Inter-Black.ttf"),
    interExtraLight: require("./assets/fonts/Inter-ExtraLight.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    //The navigation might need to be changed after the app is fully implemented
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="LoadingRed"
          component={LoadingScreenRed}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoadingWhite"
          component={LoadingScreenWhite}
          options={{ headerShown: false }}
        />  */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "CXUE",
            headerTitleStyle: {
              fontFamily: "interBlack",
              fontStyle: "italic",
              fontWeight: "bold",
              fontSize: 20,
              color: "white",
              marginLeft: 39,
            },
            headerTitleAlign: "center",
            headerTransparent: true,
            headerStyle: {
              backgroundColor: "transparent",
            },
            headerLeft: () => (
              <Image
                source={require("./assets/images/logo.png")}
                style={{ width: 30, height: 30, marginLeft: 160 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="ShowTicket"
          component={ShowTicket}
          options={{
            title: "CXUE",
            headerTitleStyle: {
              fontFamily: "interBlack",
              fontStyle: "italic",
              fontWeight: "bold",
              fontSize: 20,
              color: "white",
              marginLeft: 39,
            },
            headerTitleAlign: "center",
            headerTransparent: true,
            headerStyle: {
              backgroundColor: "transparent",
            },
            headerLeft: () => (
              <Image
                source={require("./assets/images/logo.png")}
                style={{ width: 30, height: 30, marginLeft: 160 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="MovieDetailsParasite"
          component={MovieDetailsParasite}
          options={{
            title: "CXUE",
            headerTitleStyle: {
              fontFamily: "interBlack",
              fontStyle: "italic",
              fontWeight: "bold",
              fontSize: 20,
              color: "white",
              marginLeft: 39,
            },
            headerTitleAlign: "center",
            headerTransparent: true,
            headerStyle: {
              backgroundColor: "transparent",
            },
            headerLeft: () => (
              <Image
                source={require("./assets/images/logo.png")}
                style={{ width: 30, height: 30, marginLeft: 160 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="MovieDetailsShinGojira"
          component={MovieDetailsShinGojira}
          options={{
            title: "CXUE",
            headerTitleStyle: {
              fontFamily: "interBlack",
              fontStyle: "italic",
              fontWeight: "bold",
              fontSize: 20,
              color: "white",
              marginLeft: 39,
            },
            headerTitleAlign: "center",
            headerTransparent: true,
            headerStyle: {
              backgroundColor: "transparent",
            },
            headerLeft: () => (
              <Image
                source={require("./assets/images/logo.png")}
                style={{ width: 30, height: 30, marginLeft: 160 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="MovieDetailsSpiderman"
          component={MovieDetailsSpiderman}
          options={{
            title: "CXUE",
            headerTitleStyle: {
              fontFamily: "interBlack",
              fontStyle: "italic",
              fontWeight: "bold",
              fontSize: 20,
              color: "white",
              marginLeft: 39,
            },
            headerTitleAlign: "center",
            headerTransparent: true,
            headerStyle: {
              backgroundColor: "transparent",
            },
            headerLeft: () => (
              <Image
                source={require("./assets/images/logo.png")}
                style={{ width: 30, height: 30, marginLeft: 160 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="MovieDetailsTheBatman"
          component={MovieDetailsTheBatman}
          options={{
            title: "CXUE",
            headerTitleStyle: {
              fontFamily: "interBlack",
              fontStyle: "italic",
              fontWeight: "bold",
              fontSize: 20,
              color: "white",
              marginLeft: 39,
            },
            headerTitleAlign: "center",
            headerTransparent: true,
            headerStyle: {
              backgroundColor: "transparent",
            },
            headerLeft: () => (
              <Image
                source={require("./assets/images/logo.png")}
                style={{ width: 30, height: 30, marginLeft: 160 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: "CXUE",
            headerTitleStyle: {
              fontFamily: "interBlack",
              fontStyle: "italic",
              fontWeight: "bold",
              fontSize: 20,
              color: "white",
              marginLeft: 30,
            },
            headerTitleAlign: "center",
            headerTransparent: true,
            headerStyle: {
              backgroundColor: "transparent",
            },
            headerLeft: () => (
              <Image
                source={require("./assets/images/logo.png")}
                style={{ width: 30, height: 30, marginLeft: 160 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Navbar"
          component={Navbar}
          options={{
            title: "CXUE",
            headerTitleStyle: {
              fontFamily: "interBlack",
              fontStyle: "italic",
              fontWeight: "bold",
              fontSize: 20,
              color: "white",
              marginLeft: 39,
            },
            headerTitleAlign: "center",
            headerTransparent: true,
            headerStyle: {
              backgroundColor: "transparent",
            },
            headerLeft: () => (
              <Image
                source={require("./assets/images/logo.png")}
                style={{ width: 30, height: 30, marginLeft: 160 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="DatenTheaterSelection"
          component={DatenTheaterSelection}
          options={{
            title: "CXUE",
            headerTitleStyle: {
              fontFamily: "interBlack",
              fontStyle: "italic",
              fontWeight: "bold",
              fontSize: 20,
              color: "white",
              marginLeft: 39,
            },
            headerTitleAlign: "center",
            headerTransparent: true,
            headerStyle: {
              backgroundColor: "transparent",
            },
            headerLeft: () => (
              <Image
                source={require("./assets/images/logo.png")}
                style={{ width: 30, height: 30, marginLeft: 160 }}
              />
            ),
          }}
        ></Stack.Screen>
        <Stack.Screen 
          name="OnboardingDrink" 
          component={OnboardingDrink} // Tambahkan screen baru ke dalam stack navigator
          options={({ navigation }) => ({
            headerTitle: () => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={require("./assets/images/logo.png")}
                  style={{ width: 33, height: 33 }}
                />
                <Text style={{
                  fontFamily: "interBlack",
                  fontStyle: "italic",
                  fontWeight: "900",
                  fontSize: 22.5,
                  color: "white",
                  marginLeft: 5,
                }}>CXUE</Text>
              </View>
            ),
            headerTitleAlign: 'center',
            headerTransparent: true,
            headerStyle: {
              backgroundColor: "transparent",
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={require("./assets/images/btn-back-white.png")}
                  style={{ width: 7.23 * 1.75, height: 12.8 * 1.75, marginLeft: 20, marginBottom: 2.5}}
                />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="DrinkSelection"
          component={DrinkSelection}
          options={({ navigation }) => ({
            headerTitle: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("./assets/images/logo-2.png")}
                  style={{ width: 33, height: 33 }}
                />
                <Text
                  style={{
                    fontFamily: "interBlack",
                    fontStyle: "italic",
                    fontWeight: "900",
                    fontSize: 22.5,
                    color: "red",
                    marginLeft: 5,
                  }}
                >
                  CXUE
                </Text>
              </View>
            ),
            headerTitleAlign: "center",
            headerTransparent: true,
            headerStyle: {
              backgroundColor: "transparent",
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={require("./assets/images/btn-back.png")}
                  style={{
                    width: 7.23 * 1.75,
                    height: 12.8 * 1.75,
                    marginLeft: 20,
                    marginBottom: 2.5,
                  }}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="SeatSelection"
          component={SeatSelection}
          options={{
            title: "CXUE",
            headerTitleStyle: {
              fontFamily: "interBlack",
              fontStyle: "italic",
              fontWeight: "bold",
              fontSize: 20,
              color: "white",
              marginLeft: 39,
            },
            headerTitleAlign: "center",
            headerTransparent: true,
            headerStyle: {
              backgroundColor: "transparent",
            },
            headerLeft: () => (
              <Image
                source={require("./assets/images/logo.png")}
                style={{ width: 30, height: 30, marginLeft: 160 }}
              />
            ),
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
