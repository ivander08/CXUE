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
import Navbar from "./components/navbar";
import Profile from "./screens/profile";
import MovieDetails from "./screens/MovieDetails";
import { Image, TouchableOpacity, View, Text } from "react-native";
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
        {/* <Stack.Screen
          name="LoadingRed"
          component={LoadingScreenRed}
          options={{ headerShown: false }}
        /> */}
        {/* 
         */}
        {/* <Stack.Screen
          name="LoadingWhite"
          component={LoadingScreenWhite}
          options={{ headerShown: false }}
        /> */}

        {/* <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "CXUE",
            headerTitleStyle: {
              fontFamily: "interBlack",
              fontStyle: "italic",
              fontWeight: "bold",
              fontSize: 22.5,
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
                style={{ width: 33, height: 33, marginLeft: 160 }}
              />
            ),
          }}
        />  */}
        {/* <Stack.Screen
          name="MovieDetails"
          component={MovieDetails}
          options={{
            title: "CXUE",
            headerTitleStyle: {
              fontFamily: "interBlack",
              fontStyle: "italic",
              fontWeight: "bold",
              fontSize: 22.5,
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
                style={{ width: 33, height: 33, marginLeft: 140 }}
              />
            ),
          }}
        /> */}
        {/* <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: "CXUE",
            headerTitleStyle: {
              fontFamily: "interBlack",
              fontStyle: "italic",
              fontWeight: "bold",
              fontSize: 22.5,
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
                style={{ width: 33, height: 33, marginLeft: 140 }}
              />
            ),
          }}
        /> */}
        {/* <Stack.Screen
          name="Navbar"
          component={Navbar}
          options={{
            title: "CXUE",
            headerTitleStyle: {
              fontFamily: "interBlack",
              fontStyle: "italic",
              fontWeight: "bold",
              fontSize: 22.5,
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
                style={{ width: 33, height: 33, marginLeft: 140 }}
              />
            ),
          }}
        />  */}
        <Stack.Screen 
          name="DrinkSelection" 
          component={DrinkSelection} 
          options={({ navigation }) => ({
            headerTitle: () => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={require("./assets/images/logo-2.png")}
                  style={{ width: 33, height: 33 }}
                />
                <Text style={{
                  fontFamily: "interBlack",
                  fontStyle: "italic",
                  fontWeight: "900",
                  fontSize: 22.5,
                  color: "red",
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
                  source={require("./assets/images/btn-back.png")}
                  style={{ width: 7.23 * 1.75, height: 12.8 * 1.75, marginLeft: 20, marginBottom: 2.5}}
                />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
