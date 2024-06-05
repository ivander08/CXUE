import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Foundation } from '@expo/vector-icons';

const InputBox = ({
  iconName,
  iconSize,
  iconColor,
  keyboardType,
  autoComplete,
  secureTextEntry = false,
  placeholder,
  value,
  setValue,
}) => {
  return (
    <View style={styles.container}>
      <Foundation name={iconName} size={iconSize} color={iconColor} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        autoCorrect={false}
        keyboardType={keyboardType}
        autoComplete={autoComplete}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={(text) => setValue(text)}
        autoCapitalize='none'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    padding: 5,
    fontFamily: 'interExtraLight'
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    padding: 10,
  },
});

export default InputBox;
