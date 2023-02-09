import { StyleSheet, View, Text, ImageBackground } from 'react-native'
import React from 'react'

export default function Image() {
    return (
        <View >
            <ImageBackground source={{ uri: `https://picsum.photos/1200/500?${Math.random()}` }} style={styles.image}>
                <Text style={styles.text}>Title</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 200
    },
    text: {
        color: "white",
        fontSize: 42,
        lineHeight: 500,
        fontWeight: "bold",
        textAlign: "center",
        color: '#000'
    },
    // viewPager: {
    //     flex: 1,
    // },
    // page: {
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    // content: {
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     backgroundColor: 'red',
    //     opacity: 0.5,
    // },
});