import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Profile = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.line} />
            <Image style={styles.profilePic} source={require('../assets/images/Batman.jpg')}
            />

            <View style={styles.innerContainer}>
                <View style={styles.infobox}>
                <Text style={styles.title}>Full Name :</Text>
                <Text style={styles.info}>Ivander           <Icon name="pencil" size={18} color="#F1F1F1" />
                </Text>
                
                </View>
                <View style={styles.infobox2}>
                <Text style={styles.title}>Email :</Text>
                <Text style={styles.info}>ivander@gmail.com         <Icon name="pencil" size={18} color="#F1F1F1" /></Text>
                </View>
                <View style={styles.infobox}>
                <Text style={styles.title}>Password :</Text>
                <Text style={styles.info}>*************         <Icon name="pencil" size={18} color="#F1F1F1" /></Text>
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0D160B",
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 100,
    },
    title: {
        fontSize: 13,
        fontFamily: 'interExtraLight',
        marginBottom: 5,
        paddingLeft: 16,
        paddingTop:20,
        color: '#F1F1F1',
    },
    line: {
        height: 0.25, 
        width: '90%', 
        backgroundColor: '#FFFFFF', 
        marginBottom: 16,
    },
    innerContainer: {
        width: '90%',
        alignItems: 'flex-start',
        borderWidth: 1,
        borderRadius: 20,
        overflow: 'hidden',
    },
    info: {
        fontWeight: 'bold',
        fontFamily: 'interBlack',
        paddingLeft: 16,
        fontSize: 18,
        color: '#F1F1F1',
        paddingBottom: 32,
    },
    infobox: {
        backgroundColor: '#141A13',
        width: '100%',
        justifyContent: 'center',
    },
    infobox2: {
        backgroundColor: '#182017',
        width: '100%',
        justifyContent: 'center',
    },
    profilePic: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#FF1F1F',
        width: '40%',
        borderRadius: 15,
        padding: 10,
        marginTop:80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#010201',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Profile;