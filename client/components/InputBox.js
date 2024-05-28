import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

const InputBox = ({ inputTitle, keyboardType, autoComplete, secureTextEntry=false, placeholder, value, setValue}) => {
  return (
    <View>
      <Text>{inputTitle}</Text>
      <TextInput style={styles.inputBox} placeholder={placeholder}
      autoCorrect={false}
      keyboardType={keyboardType}
      autoComplete={autoComplete}
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={(text) => setValue(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    height: 40,
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    marginTop: 5,
  },
});

export default InputBox;
