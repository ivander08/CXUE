import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function MyTickets() {
    return (
        <View style={styles.container}>
            <View style={[styles.line]}></View>
            <View style={styles.innercontainer}>
                <View style={styles.box}> 
                    <View style={styles.title}>
                        <View style={styles.icon}>
                            <Ionicons name="ticket" size={20} color="white" />    
                        </View>    
                        <Text style={styles.movie}>Parasite</Text>
                        <TouchableOpacity style={styles.button} onPress={() => {}}>
                            <Text style={styles.buttonText}>Show Ticket</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.title}> 
                        <Text style={styles.count}>3x</Text>
                        <Text style={styles.seat}>E6, F6, G6</Text>
                        <Text style={styles.info}>25 May</Text>
                    </View>
                    <View style={styles.title}> 
                        <Text style={styles.theater}>CGV Grand Indonesia</Text>
                        <Text style={styles.theater}>Regular 2D</Text>
                        <Text style={styles.theater}>13.15</Text>
                    </View>
                    <View style={[styles.innerline]}></View>
                    <View style={styles.row}>
                        <Text style={styles.fnb}>1x Mango Smoothie</Text>
                        <View style={styles.circle}></View>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.fnb}>1x Bubble Milk Tea</Text>
                        <View style={styles.circle}></View>
                    </View>
                </View>
                <View style={[styles.box,styles.box2]}> 
                    <View style={styles.title}>
                    <View style={styles.icon}>
                            <Ionicons name="ticket" size={20} color="white" />    
                        </View> 
                        <Text style={styles.movie}>Spider-Man: Across the Spider-Verse</Text>
                        <TouchableOpacity style={styles.button} onPress={() => {}}>
                            <Text style={styles.buttonText}>Show Ticket</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.title}> 
                        <Text style={styles.count}>6x</Text>
                        <Text style={styles.seat}>E6, F6, G6, H6, I6, J6</Text>
                        <Text style={styles.info}>25 May</Text>
                    </View>
                    <View style={styles.title}> 
                        <Text style={styles.theater}>CGV Grand Indonesia</Text>
                        <View style={styles.circle}></View>
                        <Text style={styles.theater}>Regular 2D</Text>
                        <View style={styles.circle}></View>
                        <Text style={styles.theater}>13.15</Text>
                    </View>
                    <View style={[styles.innerline]}></View>
                    <View style={styles.row}>
                        <Text style={styles.fnb}>1x Mango Smoothie</Text>
                        <View style={styles.circle}></View>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.fnb}>1x Bubble Milk Tea</Text>
                        <View style={styles.circle}></View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D160B',
        alignItems: 'center',
    },
    line: {
        width: '90%',
        height: 1,
        backgroundColor: 'white',
        opacity: 0.3,
        marginTop: 70,
    },
    innerline: {
        width: '90%',
        height: 1,
        backgroundColor: 'white',
        opacity: 0.3,
        marginLeft: '5%',
        marginRight: '5%',
    },
    column: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    innercontainer: {
        marginTop: 20,
        width: '90%',
        // alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#141A13',
        borderRadius: 10,
        overflow: 'hidden',
    },
    box: {
        paddingTop: 30,
        paddingBottom: 20,
        width: '100%',
    },
    box2:{
        backgroundColor: '#182017',
    },
    icon: {
        backgroundColor: 'rgba(254, 254, 254, 0.3)',
        borderRadius: 50,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    movie: {
        color: 'white',
        fontFamily: 'inter',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        width:150,
    },
    title: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: 5,
    },
    button: {
        backgroundColor: '#D8C764',
        padding: 3,
        paddingRight: 15,
        paddingLeft: 15,
        borderRadius: 20,
        marginLeft: 10,
    },
    buttonText: {
        color: '#0D160B',
        fontFamily: 'inter',
        fontWeight: 'bold',
        fontSize: 14,
    },
    count: {
        color: 'white',
        fontFamily: 'inter',
        fontSize: 15,
        fontWeight: 'medium',
        marginRight: 10,
        opacity: 0.5,
        backgroundColor: 'rgba(254, 254, 254, 0.4)',
        padding: 5, 
        paddingRight: 15, 
        paddingLeft: 15,
        borderRadius: 20,
        alignSelf:'center',
    },
    seat: {
        width: 80,
        color: 'white',
        fontFamily: 'inter',
        fontSize: 15,
        fontWeight: 'medium',
        marginRight: 10,
        opacity: 0.5,
        alignSelf:'center',
    },
    info: {
        color: 'white',
        fontFamily: 'inter',
        fontSize: 15,
        fontWeight: 'medium',
        marginLeft: 30,
        opacity: 0.5,
        alignSelf:'center',
    },
    theater: {
        color: 'white',
        fontFamily: 'interBlackExtraLight',
        fontSize: 10,
        fontWeight: 'medium',
        margin: 10,
        opacity: 0.5,
    },
    circle: {
        width: 5,
        height: 5,
        borderRadius: 5,
        backgroundColor: '#D8C764',
        alignSelf:'center',
    },
    fnb: {
        color: 'white',
        fontFamily: 'inter',
        fontSize: 15,
        fontWeight: 'medium',
        margin: 10,
        marginLeft: 80,
        opacity: 0.5,
    },
});

export default MyTickets;