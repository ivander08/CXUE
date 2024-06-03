import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { CommonActions } from '@react-navigation/native';

const LoadingScreenWhite = ({navigation}) => {
    //This navigation might need to be changed after the app is fully implemented
    // loading screen for 4 seconds
    useEffect(() => {
        const timeout = setTimeout(() => {
            navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [
                    { name: 'Home' },
                    { name: 'Navbar' },
                  ],
                })
              );
        }, 4000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <View style={styles.container}>
            <LottieView 
                autoPlay 
                source={require('../assets/animations/logoWhite.json')} 
                style={{width: '60%', aspectRatio: 1}} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default LoadingScreenWhite;