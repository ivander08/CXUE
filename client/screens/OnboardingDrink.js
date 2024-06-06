import React from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');

const backgroundImage = require('../assets/images/Onboarding.png');
const buttonImage = require('../assets/images/btn-onboard.png');

const App = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.background}>
        <View style={styles.overlay}>

        </View>
        <TouchableOpacity onPress={() => navigation.navigate('DrinkSelection')}>
          <Image source={buttonImage} style={styles.button} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('OrderSummary')}>
          <Text style={styles.warningText}>Skip? Go to Order Summary</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D22A2A',
  },
  background: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 90,
  },
  button: {
    position: 'absolute',
    top: 580,
    alignSelf: 'center',
    width: 60,
    height: 60,
  },
  warningText: {
    position: 'absolute',
    top: 655,
    alignSelf: 'center',
    color: 'black',
    fontSize: 12,
    textAlign: 'center',
    opacity: 0.75,
  },
});

export default App;
