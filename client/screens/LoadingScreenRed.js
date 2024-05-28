import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const LoadingScreenWhite = () => {
    return (
        <View style={styles.container}>
            <LottieView 
            autoPlay 
            source={require('../assets/animations/LogoRed.json')} 
            style={{width: '60%', aspectRatio: 1}} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default LoadingScreenWhite;