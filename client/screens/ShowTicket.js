import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, Modal, Button } from 'react-native';
import { BlurView } from 'expo-blur';
import Svg, { Path, } from "react-native-svg";
import { MaterialIcons } from "@expo/vector-icons";
import Navbar from "../components/navbar";
import { CommonActions } from '@react-navigation/native';

const PrizeInText = ({ text }) => {
    return (
    <View style={styles.prizeBorder}>
        <MaterialIcons name="card-giftcard" size={24} color="#D8C764" />
        <Text style={styles.prizeText}>{text}</Text>
    </View>
    );
};

const PrizeWithImage = ({ item, image}) => {
    return (
        <View style={styles.centeredView}>
            <Image source={image} />
            <Text style={styles.prizeTextImage}>{item}</Text>
        </View>
    
    );
};

function getRandomReward() {
    const randomNumber = Math.random();
    if (randomNumber < 0.4) {
        return <PrizeInText text="1x Free Drink" />
    }  else if (randomNumber < 0.2) {
        return <PrizeInText text="1x Free Ticket" />
    } else {
        return <PrizeWithImage item="PARASITE X CXUE T-SHIRT" image={require("../assets/images/ParasiteTShirt.png")} />
    }
}

const ShowTicket = ( {navigation} ) => {
    const [ModalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const backtoHome = () => {
        navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [
                { name: 'Home' },
                { name: 'Navbar' },
              ],
            })
          );
    }

    useEffect(() => {
        const show = Math.random() < 0.5; // Adjust probability
        if (show) {
            setModalContent(getRandomReward());
            setModalVisible(true);
        }
    }, []);

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.movieImgBackground} source={require("../assets/images/Parasite.jpg")}>
                <View style={styles.overlay}/>
                    <Svg width="318" height="444" viewBox="0 0 318 444">
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M5.91278e-05 15C5.91278e-05 6.71573 6.71579 0 15.0001 0H303C311.284 0 318 6.71573 318 15V257C306.402 257 297 266.402 297 278C297 289.598 306.402 299 318 299V429C318 437.284 311.284 444 303 444H15.0001C6.71579 444 5.91278e-05 437.284 5.91278e-05 429L0 299.06C11.6311 299.06 21.06 289.631 21.06 278C21.06 266.369 11.6311 256.94 0 256.94L5.91278e-05 15Z" fill="#FEFEFE"/>
                        <View style={styles.ticketContent}>
                            <View style={styles.ticketFor}>
                                <Text style={styles.ticketForText}>Ticket for 3</Text>
                            </View>
                            <View style={styles.movieDetails}>
                                <Text style={styles.movieName}>Parasite</Text>
                                <View style={styles.justifySpaceBetween}>
                                    <View style={styles.box}>
                                        <View style={styles.boxItem}>
                                            <Text style={styles.boxText}> 17+ </Text>
                                        </View>
                                        <View style={styles.transparentBoxItem}>
                                            <Text style={styles.transparentboxText}>ENG</Text>
                                        </View>
                                        <View style={styles.transparentBoxItem}>
                                            <Text style={styles.transparentboxText}>SUB INDO</Text>
                                        </View>
                                        
                                    </View>
                                    <View style={styles.ratingBoxItem}>
                                        <Text style={styles.ratingBoxText}>iMDb 8.5</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.ticketDetails}>
                                <View style={styles.justifySpaceBetween}>
                                    <Text style={[styles.transparentText, styles.ticketDetailsText]}>Date</Text>
                                    <Text style={[styles.transparentText, styles.ticketDetailsText]}>Time</Text>
                                </View>      
                                
                                <View style={styles.justifySpaceBetween}>
                                    <Text style={styles.ticketDetailsText}>25 May 2024</Text>
                                    <Text style={styles.ticketDetailsText}>13:15</Text>
                                </View>
                            </View>
                            <View style={styles.ticketDetails}>
                                <View style={styles.justifySpaceBetween}>
                                    <Text style={[styles.transparentText, styles.ticketDetailsText]}>Studio</Text>
                                    <Text style={[styles.transparentText, styles.ticketDetailsText]}>Seat</Text>
                                </View>      
                                
                                <View style={styles.justifySpaceBetween}>
                                    <Text style={styles.ticketDetailsText}>4, CGV Grand Indonesia</Text>
                                    <Text style={styles.ticketDetailsText}>E6, F6, G6</Text>
                                </View>
                            </View>
                            <Text style={styles.ticketLine}>_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</Text>

                            <Image style={styles.barcode} source={require("../assets/images/barcode.png")}/>

                        </View>
                        
                    </Svg>
                    <TouchableOpacity style={styles.button}
                        onPress={backtoHome}
                        >
                        <Text style={styles.buttonText}>Go Home</Text>
                        </TouchableOpacity>
                
            </ImageBackground>
            <Modal
                animationType="fade"
                transparent={true}
                visible={ModalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.centeredView}>
                    <BlurView intensity={30} tint="dark" style={styles.fullScreen} 
                    experimentalBlurMethod='dimezisBlurView' //Kadang bikin nge-lag
                    >
                        <View style={styles.modalBackgroundColor}>
                            {/*experimentalBlurMethod='dimezisBlurView'*/}
                            {/* It's logo if want*/}
                            {/* <View style={{ flexDirection: "row", alignItems: "center", position: "absolute", top:10}}>
                                <Image
                                source={require("../assets/images/logo.png")}
                                style={{ width: 33, height: 33, marginHorizontal: 10}}
                                />
                                <Text
                                style={{
                                    fontFamily: "interBlack",
                                    fontStyle: "italic",
                                    fontWeight: "900",
                                    fontSize: 22.5,
                                    color: "#fefefe",
                                    marginHorizontal: 5
                                }}
                                >
                                CXUE
                                </Text>
                            </View> */} 
                            <View style={styles.div}>
                                <Image source={require("../assets/images/gift.png")}/>
                                <Text style={styles.modalTextBig}>Congratulations!</Text>
                                <Text style={styles.modalText}>You won a special prize</Text>
                            </View>
                            <View style={styles.prizeContent}>
                                {modalContent}
                            </View>
                            <View>
                                <Button title="Close" onPress={() => setModalVisible(false)} />
                            </View>
                        </View>
                    </BlurView>
                </View>

            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#141C14",
        
    },
    ticket: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    movieImgBackground: {
        width: '120%',
        height: '120%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#141C14',
    },
    overlay: {
        position: 'absolute',
        width: '120%',
        height: '120%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    ticketContent: {
        padding: 20,
    },
    ticketFor: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 31, 31, 0.15)',
        borderRadius: 15,
        padding: 10,
    },
    ticketForText: {
        color: 'rgba(255, 31, 31, 0.5)',
        fontSize: 15,   
        fontWeight: 'bold',
    },
    movieDetails: {
        marginVertical: 18,
    },
    movieName: {
        color: "black",
        fontWeight: "bold",
        fontSize: 18,
        marginVertical: 3,
    },
    justifySpaceBetween: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    button: {
        backgroundColor: "red",
        borderRadius: 7,
        paddingVertical: 15,
        paddingHorizontal: 30,
        marginTop: 40,
        width:'65%'
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        textAlign: "center",
    },
    box: {
        justifyContent: "flex-start",
        flexDirection: "row",
        padding: 2,
    },
    transparentBoxItem: {
        fontSize: 7,
        marginRight: 5,
        backgroundColor: "transparent",
        borderWidth: 1,

    },
    transparentboxText: {
        color: "black",
        fontSize: 10,
        padding: 4,
    },
    boxItem: {
        marginRight: 5,
        backgroundColor: 'rgba(13, 22, 11, 0.5)',
    },
    boxText: {
        color: "white",
        fontSize: 10,
        borderColor: "white",
        borderWidth: 1,
        padding: 4,
    },
    ratingBoxItem: {
        backgroundColor: "#9C914F",
        padding: 2,
    },
    ratingBoxText: {
        fontWeight: "bold",
        padding: 4,
        fontSize: 12,
        color: "white",
        fontSize: 10,
    },
    ticketDetails: {
        marginVertical: 5,
    },
    ticketDetailsText: {
        fontSize: 13,
    },
    transparentText: {
        color: 'rgba(13, 22, 11, 0.5)',
    },
    ticketLine:{
        marginVertical: 17,
        marginHorizontal: 7,
    },
    barcode:{
        alignSelf: 'center',
        marginVertical: 25,
    },
    fullScreen: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    modalBackgroundColor:{
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(13, 22, 11, 0.8)',
        // width: '80%',
    },
    centeredView: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#0D160B'
        // marginTop: 22,
    },

    div: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        backgroundColor: 'transparent',
    },

    modalTextBig: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 35,
        fontStyle: 'italic',
        fontSize: 35,
    },
    modalText: {
        color: 'white',
        // fontWeight: 'bold',
        fontSize: 15,
    },
    prizeBorder:{
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#D8C764',
        backgroundColor: '#182017',
        borderRadius: 15,
        padding: 10,
        flexDirection: 'row',
    },
    prizeText:{
        color: 'white',
        fontSize: 20,
    },
    prizeContent:{
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 40,
    },
    iconCircle:{
        width: 100,
        height: 100,
        borderRadius: 50, // Half of the width and height to create a circle
        backgroundColor: 'blue', // Example background color
    },
    prizeTextImage:{
        color: '#D8C764',
        fontSize: 20,
    }
});

export default ShowTicket;