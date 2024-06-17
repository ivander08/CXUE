import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import LottieView from "lottie-react-native";

const LoadingScreenWhite = ({ navigation }) => {
  //This navigation might need to be changed after the app is fully implemented
  const [animationFinished, setAnimationFinished] = useState(false);
  const animationRef = useRef(null);

  //navigate when animation ends (roughly around 4 sec)
  useEffect(() => {
    if (animationFinished) {
      const timeout = setTimeout(() => {
        // the loading loop (comment or delete two lines below to stop the loop)
        // setAnimationFinished(false);
        // animationRef.current.play();

        //navigate. (Add this screen on App.js first)
        navigation.navigate("Login");
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [animationFinished, navigation]);

  // //navigate after 4 seconds
  // useEffect(() => {
  //     const timeout = setTimeout(() => {
  //         navigation.navigate('Login');
  //     }, 4000);

  //     return () => clearTimeout(timeout);
  // }, []);

  const handleAnimationFinish = () => {
    setAnimationFinished(true);
  };

  return (
    <View style={styles.container}>
      {!animationFinished ? (
        <LottieView
          ref={animationRef}
          source={require("../assets/animations/LoadingWhite.json")}
          autoPlay
          loop={false}
          speed={1.5}
          onAnimationFinish={handleAnimationFinish}
          style={{ width: "37.5%", aspectRatio: 1 }}
        />
      ) : (
        <Image
          source={require("../assets/images/logoWhiteHD.png")}
          style={styles.logo}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    position: "absolute",
    width: 100,
    height: 100,
  },
});

export default LoadingScreenWhite;
