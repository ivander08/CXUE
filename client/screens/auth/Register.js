import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import InputBox from '../../components/InputBox';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.pageTitle}>Register</Text>
        <Text style={styles.pageTitleDesc}>Create an account to continue.</Text>
        <View style={{ marginHorizontal: 20 }}>
          <InputBox iconName="torso" iconSize={22} iconColor={"grey"} value={name} setValue={setName} placeholder={'FULL NAME'} />
          <InputBox iconName="mail" iconSize={22} iconColor={"grey"} keyboardType={"email-address"} autoComplete={"email"} value={email} setValue={setEmail} placeholder={'EMAIL'} />
          <InputBox iconName="lock" iconSize={22} iconColor={"grey"} secureTextEntry={true} autoComplete={"password"} value={password} setValue={setPassword} placeholder={'PASSWORD'} />
          <InputBox iconName="lock" iconSize={22} iconColor={"grey"} secureTextEntry={true} autoComplete={"password"} value={confirmPassword} setValue={setConfirmPassword} placeholder={'CONFIRM PASSWORD'} />
          <Text style={styles.link} onPress={() => {}}>or login here</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>REGISTER</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  pageTitle: {
    fontFamily: 'interBlack',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'left',
    marginLeft: 20,
  },
  pageTitleDesc: {
    fontFamily: 'interExtraLight',
    fontSize: 15,
    marginBottom: 20,
    textAlign: 'left',
    marginLeft: 20,
    fontStyle: 'extra light',
  },
  link: {
    marginTop: 10,
    marginBottom: 10, // Reduce marginBottom to move the button closer
    color: 'red',
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10, // Reduce marginTop to move the button closer to the input fields
    marginRight: 20,
  },
  button: {
    backgroundColor: 'red',
    borderRadius: 15, // Adjust as needed
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Register;
