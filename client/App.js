import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import LoadingScreenRed from "./screens/LoadingScreenRed";
import LoadingScreenWhite from "./screens/LoadingScreenWhite";
import Register from "./screens/auth/Register";
import Login from "./screens/auth/Login";
import Home from "./screens/Home";
import MovieDetails from "./screens/MovieDetails";
import { Image } from "react-native";

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
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
        <Stack.Screen name="LoadingRed" component={LoadingScreenRed} options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="LoadingWhite" component={LoadingScreenWhite} options={{ headerShown: false }}/> 
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
