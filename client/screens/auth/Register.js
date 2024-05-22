import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

const Register = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Register</Text>
      <View style={{ marginHorizontal: 20 }}>
        <Text>Name</Text>
        <TextInput style={styles.input}
          placeholder="Enter your name"
        />
        <Text>Email</Text>
        <TextInput style={styles.input}
          placeholder="Enter your email"
        />
        <Text>Password</Text>
        <TextInput style={styles.input}
          placeholder="Enter your password"
        />
        <Text>Confirm Password</Text>
        <TextInput style={styles.input}
          placeholder="Confirm your password"
        />
      </View>
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