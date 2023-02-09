import { View, Image, StyleSheet, Text } from 'react-native'
import React from 'react'
import { ImageSlider } from "react-native-image-slider-banner";
import { imagesSlide } from '../data/Data'
import UseOrientation from '../hooks/UseOrientation'

export default function Slide() {
    const orientation = UseOrientation()

    const width = orientation.width
    const height = orientation.height

    return (
        <>
            <View>
                <ImageSlider
                    data={imagesSlide}
                    autoPlay
                    // onItemChanged={(item) => console.log("item", item)}
                    closeIconColor="#fff"
                    timer={2500}
                    preview={false}
                    caroselImageStyle={[{ resizeMode: 'cover', width: width }, width > 392.72727272727275 && { height: height }]}
                    showIndicator={false}
                />
            </View>
        </>
    )
}
