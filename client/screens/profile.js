import React,{ useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { getAuth, updatePassword, EmailAuthProvider, reauthenticateWithCredential} from "firebase/auth";
// import { launchImageLibrary } from 'react-native-image-picker';


const Profile = ({ navigation }) => {

    const [image, setImage] = useState(null);
    const auth = getAuth();
    const user = auth.currentUser;
    const [showChangePassword, setShowChangePassword] = useState(false);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    // const selectImage = () => {
    //     let options = {
    //         storageOptions: {
    //         skipBackup: true,
    //         path: 'images',
    //         },
    //     };

    //     launchImageLibrary(options, (response) => {
    //         if (response.didCancel) {
    //         console.log('User cancelled image picker');
    //         } else if (response.error) {
    //         console.log('ImagePicker Error: ', response.error);
    //         } else {
    //         const source = { uri: response.uri };
    //         setImage(source);
    //         }
    //     });
    // };

    const changePassword = (newPassword) => {
        const credential = EmailAuthProvider.credential(user.email, currentPassword);
        reauthenticateWithCredential(user, credential)
        .then(() => {
            updatePassword(user, newPassword)
                .then(() => {
                    alert('Changed Password Successfully');
                    setCurrentPassword('');
                    setNewPassword('');
                    setConfirmNewPassword('');
                    setShowChangePassword(false);
                    return;
                })
                .catch((error) => {
                    console.log(error);
                });
        })
        .catch((error) => {
            // An error occurred during reauthentication
            if (error.code === 'auth/invalid-credential') {
                alert('Wrong Current Password');
                return;
            } else {
                console.log(error);
            }
        });
        };
    return (
        <View style={styles.container}>
            <View style={styles.line} />
            {/* <TouchableOpacity onPress={selectImage}> */}
            {/* <Image style={styles.profilePic} source={image || require('../assets/images/Batman.jpg')}/> */}
            <Image style={styles.profilePic} source={require('../assets/images/Batman.jpg')}/>
            {/* </TouchableOpacity> */}

            <View style={styles.innerContainer}>
                <View style={styles.infobox}>
                <Text style={styles.title}>Full Name :</Text>
                <Text style={styles.info}>{user.displayName}</Text>                
                </View>
                <View style={styles.infobox2}>
                <Text style={styles.title}>Email :</Text>
                <Text style={styles.info}>{user.email}</Text>
                </View>
                <View style={styles.infobox}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.title}>Password :</Text>
                <TouchableOpacity onPress={() => setShowChangePassword(prevState => !prevState)} style={{ marginLeft: 30, paddingTop:20, justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name="pencil" size={18} color="#F1F1F1" />
                </TouchableOpacity>
                </View>
                {showChangePassword ? (
                    <View style={{ paddingLeft: 16 }}>
                        <TextInput
                            value={currentPassword}
                            onChangeText={setCurrentPassword}
                            placeholder="Current Password"
                            secureTextEntry
                            style={styles.change}
                            placeholderTextColor="#FFFFFF"
                        />
                        <TextInput
                            value={newPassword}
                            onChangeText={setNewPassword}
                            placeholder="New Password"
                            secureTextEntry
                            style={styles.change}
                            placeholderTextColor="#FFFFFF"
                        />
                        <TextInput
                            value={confirmNewPassword}
                            onChangeText={setConfirmNewPassword}
                            placeholder="Confirm New Password"
                            secureTextEntry
                            style={styles.change}
                            placeholderTextColor="#FFFFFF"
                        />
                        <TouchableOpacity style={styles.changebutton} onPress={() => changePassword(newPassword)}>
                            <Text style={styles.buttonText2}>Change Password</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <Text style={styles.info}>**********</Text>
                )}
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
        width: '90%',
        height: 1,
        backgroundColor: 'white',
        opacity: 0.3,
        marginTop: 70,
        marginBottom: 20,
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
    change:{
        width:'50%',
        fontWeight: 'bold',
        fontFamily: 'inter',
        fontSize: 15,
        color: '#F1F1F1',
        paddingTop:10,
        borderBottomWidth:0.5,
        borderBottomColor:'#F1F1F1',
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
    changebutton: {
        backgroundColor: '#FF1F1F',
        width: '40%',
        borderRadius: 15,
        padding: 10,
        marginTop:10,
        marginBottom:10,
        marginLeft:17.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#010201',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonText2: {
        color: '#010201',
        fontSize: 15,
        fontWeight: 'bold',
    },
});

export default Profile;