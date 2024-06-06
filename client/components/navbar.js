import React from 'react';
import { StyleSheet,StatusBar } from 'react-native';
import Home from '../screens/Home';
import MyTickets from '../screens/MyTickets';
import Profile from '../screens/profile';
import { Ionicons, Foundation } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();
const HomeScreen = 'Home';
const TicketScreen = 'MyTickets';
const ProfileScreen = 'Profile';

const Navbar = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={true} />
            <Tab.Navigator
                initialRouteName={HomeScreen}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let IconComponent = Ionicons;
                        let iconName;
                        if (route.name === HomeScreen) {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === TicketScreen) {
                            IconComponent = Foundation;
                            iconName = 'ticket';
                        } else if (route.name === ProfileScreen) {
                            iconName = focused ? 'person' : 'person-outline';
                        }
                        return <IconComponent name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#FF1F1F',
                    tabBarInactiveTintColor: 'gray',
                    tabBarShowLabel: false,
                    tabBarStyle: styles.tabBar,
                })}
            >
                <Tab.Screen name={TicketScreen} component={MyTickets} options={{ headerShown: false }} />
                <Tab.Screen name={HomeScreen} component={Home} options={{ headerShown: false }} />
                <Tab.Screen name={ProfileScreen} component={Profile} options={{ headerShown: false }} />
            </Tab.Navigator>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    tabBar: {
        height: 60,
        backgroundColor: 'rgba(13,22,11,0.85)',
        borderTopWidth: 0,
        position: 'absolute', // Add this line
    },
});

export default Navbar;
