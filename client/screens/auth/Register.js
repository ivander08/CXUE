import { View, Text, StyleSheet, TextInput } from 'react-native';
import React,{useState} from 'react';
import InputBox from '../../components/InputBox';

const Register = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Register</Text>
      <View style={{ marginHorizontal: 20 }}>
        <InputBox inputTitle={"Name"} value={name} setValue={setName}/>
        <InputBox inputTitle={"Email"} keyboardType={"email-address"} autoComplete={"email"} value={email} setValue={setEmail}/>
        <InputBox inputTitle={"Password"} secureTextEntry={true} autoComplete={"password"} value={password} setValue={setPassword}/>
        <InputBox inputTitle={"Confirm Password"} secureTextEntry={true} autoComplete={"password"} value={confirmPassword} setValue={setConfirmPassword}/>
      </View>
      <Text>{JSON.stringify({name,email,password,confirmPassword}, null, 4)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    pageTitle: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center'
    },
    input: {
        height: 40,
        marginBottom: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        marginTop: 5
    }
})

export default Register