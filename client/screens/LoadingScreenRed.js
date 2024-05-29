import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import LottieView from 'lottie-react-native';

const LoadingScreenWhite = () => {
    const [animationFinished, setAnimationFinished] = useState(false);
    const animationRef = useRef(null);

    useEffect(() => {
        if (animationFinished) {
        const timeout = setTimeout(() => {
            setAnimationFinished(false);
            animationRef.current.play();
        }, 2000); // Show image for 2 seconds before looping animation again

        return () => clearTimeout(timeout);
        }
    }, [animationFinished]);

    const handleAnimationFinish = () => {
        setAnimationFinished(true);
    };

    return (
        <View style={styles.container}>
        {!animationFinished ? (
            <LottieView
            ref={animationRef}
            source={require('../assets/animations/LoadingWhite.json')}
            autoPlay
            loop={false}
            speed={1.5}
            onAnimationFinish={handleAnimationFinish}
            style={{width: '37.5%', aspectRatio: 1}} 
            />
        ) : (
            <Image
            source={require('../assets/images/logoWhiteHD.png')}
            style={styles.logo}
            />
        )}
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
    logo: {
        position: 'absolute',
        width: 100,
        height: 100,
    },

});

export default LoadingScreenWhite;