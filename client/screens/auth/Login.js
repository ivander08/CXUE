import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import InputBox from '../../components/InputBox';

const Login = ( navigation ) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    navigation.navigate('Home');
  };

  return (
    <ImageBackground source={require('../../assets/images/background.png')} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.pageTitle}>Login</Text>
        <Text style={styles.pageTitleDesc}>Create an account to continue.</Text>
        <View style={{ marginHorizontal: 20 }}>
          <InputBox iconName="mail" iconSize={22} iconColor={"grey"} keyboardType={"email-address"} autoComplete={"email"} value={email} setValue={setEmail} placeholder={'EMAIL'} />
          <InputBox iconName="lock" iconSize={22} iconColor={"grey"} secureTextEntry={true} autoComplete={"password"} value={password} setValue={setPassword} placeholder={'PASSWORD'} />
          <Text style={styles.link} onPress={() => {}}>or login here</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>LOGIN</Text>
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

export default Login;
