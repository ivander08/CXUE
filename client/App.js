import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import Register from "./screens/auth/Register";
import Login from "./screens/auth/Login";
import Home from "./screens/Home";
import MovieDetails from "./screens/MovieDetails";
import DrinkSelection from "./screens/DrinkSelection"; 
import OnboardingDrink from "./screens/OnboardingDrink";  
import { Image, TouchableOpacity, View, Text } from "react-native";

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
        {/* <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/> */}
        {/* <Stack.Screen
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
        /> */}
        {/* <Stack.Screen
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
        /> */}
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
          component={DrinkSelection} // Tambahkan screen baru ke dalam stack navigator
          options={({ navigation }) => ({
            headerTitle: () => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={require("./assets/images/logo-2.png")}
                  style={{ width: 35, height: 35 }}
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
