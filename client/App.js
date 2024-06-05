import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import LoadingScreenRed from "./screens/LoadingScreenRed";
import LoadingScreenWhite from "./screens/LoadingScreenWhite";
import Register from "./screens/auth/Register";
import Login from "./screens/auth/Login";
import Home from "./screens/Home";
import Navbar from "./components/navbar";
import Profile from "./screens/profile";
import MovieDetails from "./screens/MovieDetails";
import { Image } from "react-native";
import { initializeApp } from '@firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from '@firebase/auth';


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

const app = initializeApp(firebaseConfig);

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
        <Stack.Screen
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
        />

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
          name="MovieDetails"
          component={MovieDetails}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
