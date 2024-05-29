import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import Register from "./screens/auth/Register";
import Login from "./screens/auth/Login";
import Home from "./screens/Home";
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
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen
          name="CXUE"
          component={Home}
          options={{
            headerTitleStyle: {
              fontFamily: "interBlack",
              fontStyle: "italic",
              fontWeight: "bold",
              fontSize: 20,
              color: "white",
            },
            headerTitleAlign: "center",
            headerTransparent: true,
            headerStyle: {
              backgroundColor: "transparent",
            },
            headerLeft: () => (
              <Image
                source={require("./assets/images/logo.png")}
                style={{ width: 50, height: 50, marginLeft: 120 }}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
