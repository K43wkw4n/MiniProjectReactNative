import { View, Text, TextInput, StyleSheet, TouchableHighlight, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { Modal } from 'react-native'
import { MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';

export default function Register({ data, OpenRegister, onRegister }) {

    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])
    const [confirmpassword, setConfirmPassword] = useState([])

    function Register() {
        const validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        for (let i = 0; i < data.length; i++) {
            if (!data[i].email === email && validateEmail.test(email) && password === confirmpassword) {
                OpenRegister()
                onRegister(email, password)
            }else if (data[i].email === email) {
                alert("your email already exists")
                break
            }else if (!validateEmail.test(email)) {
                alert("Your email format is invalid.")
                break
            }
            else if (password !== confirmpassword) {
                alert("Please check your password.")
                break
            }
        }
        
    }

    return (
        <>
            <Modal animationType="fade">
                <TouchableWithoutFeedback onPress={OpenRegister}>
                    <SimpleLineIcons style={{ position: 'absolute', padding: 20, zIndex: 999 }} name="arrow-left" size={24} color="black" />
                </TouchableWithoutFeedback>
                <View style={styles.container}>
                    <Text style={{ fontSize: 30 }}>Register</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <MaterialIcons style={styles.iconLogin} name="email" size={24} color="black" />
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            onChangeText={setEmail}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <MaterialIcons style={styles.iconLogin} name="lock" size={24} color="black" />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <MaterialIcons style={styles.iconLogin} name="lock" size={24} color="black" />
                        <TextInput
                            style={styles.input}
                            placeholder="ConfirmPassword"
                            onChangeText={setConfirmPassword}
                            secureTextEntry
                        />
                    </View>
                    <View>
                        <TouchableHighlight onPress={Register} activeOpacity={0.9} underlayColor="#DDDDDD" style={{
                            width: 200,
                            borderRadius: 25,
                            height: 50,
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: 40,
                            backgroundColor: "#7ae0ff",
                        }}>
                            <Text>Register</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        height: 50,
        width: 250,
        margin: 12,
        padding: 10,
        backgroundColor: '#E0F8FF',
        borderRadius: 100 / 2,
        paddingHorizontal: 15,
        paddingLeft: 40,
    },
    iconLogin: {
        padding: 10,
        position: 'absolute',
        zIndex: 999,
        left: 13,
        opacity: 0.3,
    }
});
