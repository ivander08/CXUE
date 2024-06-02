import React from 'react';
import Home from '../screens/Home';
import { View, StyleSheet } from 'react-native';
import MovieDetails from '../screens/MovieDetails';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Foundation } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

const Tab = createBottomTabNavigator();
const HomeScreen = 'Home';
const MovieScreen = 'MovieDetails';

const Navbar = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={true} backgroundColor='rgba(13,22,11,1)' />
            <Tab.Navigator
                initialRouteName={HomeScreen}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let IconComponent = Ionicons; // Default to Ionicons
                        let iconName;
                        if (route.name === HomeScreen) {
                            iconName = focused ? 'home' : 'home-outline';
                        } 
                        else if (route.name === MovieScreen) {
                            IconComponent = Foundation; // Use Foundation for MovieScreen
                            iconName = 'ticket';
                        }
                        return <IconComponent name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#FF1F1F',
                    tabBarInactiveTintColor: 'gray',
                    tabBarShowLabel: false,
                    tabBarStyle: { height: 60, backgroundColor: 'transparent', borderTopWidth: 0 },
                })}
            >
                <Tab.Screen name={MovieScreen} component={MovieDetails} options={{ headerShown: false }}/>
                <Tab.Screen name={HomeScreen} component={Home} options={{ headerShown: false }}/>
            </Tab.Navigator>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
});

export default Navbar;
