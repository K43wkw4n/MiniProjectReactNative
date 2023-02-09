import { StyleSheet, View, FlatList, ScrollView, RefreshControl, Text } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import UseOrientation from '../hooks/UseOrientation'
import Flatlist from '../data/Flatlist';
import Image from '../Image';

// const wait = (timeout) => {
//     return new Promise(resolve => setTimeout(resolve, timeout));
// }

export default function Home() {
    const [Products, setProducts] = useState([])

    useEffect(() => {
        const random = Math.floor(Math.random() * 30) + 1
        fetch(`https://dummyjson.com/products`)
            .then(response => response.json())
            .then(e => setProducts(e))
    }, [])

    // console.log("Products👌", Products)

    const [dataToCart, setDataToCart] = useState([])

    function addToCart(Data, number) {
        setDataToCart((current) => [...current, { Data, count: number }])
    }

    // console.log(dataToCart)

    return (
        <>
            <View style={Styles.container}>
                <Flatlist Products={Products} addToCart={addToCart} dataToCart={dataToCart} />
            </View>
        </>
    )
}

const Styles = StyleSheet.create({
    container: {
        // marginBottom: 205,
    },
})
