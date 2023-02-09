import { View, Text, TextInput, StyleSheet, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
import Register from './Register'
import { MaterialIcons } from '@expo/vector-icons';

export default function Login({ data, setLogined, onRegister, onLogin }) {
    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])

    const [register, setRegister] = useState(false)

    function OpenRegister() {
        setRegister(!register)
    }

    console.log('login', data)

    function login() {
        const loginEmail = data.find(x => x.email === email)
        const loginPassword = data.find(x => x.password === password)
        if ([loginEmail?.email].includes(email) && [loginPassword?.password].includes(password)) {
            setLogined(true)
            onLogin(email, password)
        } else {
            alert('Please enter a valid email and password address.')
        }
    }

    return (
        <>
            <View style={styles.container}>
                <Text style={{ fontSize: 30 }}>Login</Text>
                <View>
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
                </View>
                <Text style={{ borderBottomWidth: 0.8, fontSize: 15 }} onPress={OpenRegister}>Register</Text>
                <View>
                    <TouchableHighlight style={{
                        width: 200,
                        borderRadius: 25,
                        height: 50,
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 40,
                        backgroundColor: "#7ae0ff",
                    }}
                        onPress={login}
                    ><Text>Login</Text></TouchableHighlight>
                </View>
            </View>
            {register &&
                <Register data={data} OpenRegister={OpenRegister} onRegister={onRegister} />
            }
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