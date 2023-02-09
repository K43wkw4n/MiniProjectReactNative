import { View, Text, Image, StyleSheet, TouchableHighlight, Switch, ScrollView } from 'react-native'
import React, { useState } from 'react'

export default function Med({ onLogin, name, Pass }) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <>
            <View style={[styles.Vertical, styles.backGcolor, { flex: 1 }]}>
                <ScrollView>
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            source={{ uri: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZYZRnFinCRXJw89SIRVXYnX27jjH5CmpqEgxAaKUfAGyD7kACvXutDSl51VPBaSPlLTE&usqp=CAU` }}
                            style={styles.Image}
                        />
                    </View>
                    <View style={[styles.name, { alignItems: 'center' }]}>
                        <Text style={{ fontSize: 20 }}>{name}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            {isEnabled ? <Text style={{ marginTop: 14 }}>{Pass}</Text> : <Text style={{ marginTop: 14 }}></Text>}
                            <Switch
                                trackColor={{ false: '#767577', true: '#81b0ff' }}
                                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                            <Text style={{ marginTop: 14, left: 5 }}>See password</Text>
                        </View>
                    </View>
                    <TouchableHighlight activeOpacity={0.9} underlayColor="#DDDDDD" style={{ padding: 20 }}><Text>Home</Text></TouchableHighlight>
                    <TouchableHighlight style={{ padding: 20 }}><Text>Settings</Text></TouchableHighlight>
                    <TouchableHighlight style={{ padding: 20 }}><Text>News</Text></TouchableHighlight>
                    <TouchableHighlight style={{ padding: 20 }}><Text>Favorite</Text></TouchableHighlight>
                    <View style={{ alignItems: 'center', marginTop: 30 }}>
                        <Text style={styles.logOut} onPress={onLogin}>
                            Logout
                        </Text>
                    </View>
                </ScrollView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    Image: {
        width: 200,
        height: 200,
    },
    Vertical: {
        paddingVertical: 20
    },
    name: {
        justifyContent: 'center',
    },
    backGcolor: {
        backgroundColor: '#fff'
    },
    logOut: {
        fontSize: 20,
        backgroundColor: '#E0F8FF',
        padding: 15,
        paddingHorizontal: 20,
        borderRadius: 100 / 2
    }
})
