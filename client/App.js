import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useCallback } from "react";
import { useFonts } from "expo-font";
import Register from "./screens/auth/Register";
import Login from "./screens/auth/Login";

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'interBlack': require('./assets/fonts/Inter-Black.ttf'),
    'interExtraLight': require('./assets/fonts/Inter-ExtraLight.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
