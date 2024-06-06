import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import InputBox from '../../components/InputBox';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (!email || !password || !confirmPassword) {
      alert('Please fill all fields');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate('Login');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/email-already-in-use') {
          alert('The email address is already in use by another account.');
          return;
        }
        if (errorCode === 'auth/weak-password') {
          alert('The password is too weak.');
          return;
        }
        // Display the error to the user
        console.log(errorCode, errorMessage)
      });
  };

  return (
    <ImageBackground source={require('../../assets/images/background.png')} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.pageTitle}>Register</Text>
        <Text style={styles.pageTitleDesc}>Create an account to continue.</Text>
        <View style={{ marginHorizontal: 20 }}>
          <InputBox iconName="torso" iconSize={22} iconColor={"grey"} value={name} setValue={setName} placeholder={'FULL NAME'} />
          <InputBox iconName="mail" iconSize={22} iconColor={"grey"} keyboardType={"email-address"} autoComplete={"email"} value={email} setValue={setEmail} placeholder={'EMAIL'} />
          <InputBox iconName="lock" iconSize={22} iconColor={"grey"} secureTextEntry={true} autoComplete={"password"} value={password} setValue={setPassword} placeholder={'PASSWORD'} />
          <InputBox iconName="lock" iconSize={22} iconColor={"grey"} secureTextEntry={true} autoComplete={"password"} value={confirmPassword} setValue={setConfirmPassword} placeholder={'CONFIRM PASSWORD'} />
          <Text style={styles.link} onPress={() => navigation.navigate('Login')}>or login here</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
              <Text style={styles.buttonText}>REGISTER</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
  },
  link: {
    marginTop: 10,
    marginBottom: 10,
    color: 'red',
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
    marginRight: 20,
  },
  button: {
    backgroundColor: 'red',
    borderRadius: 15,
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
