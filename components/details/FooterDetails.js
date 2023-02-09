import { Button, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Cart from '../Cart/Cart'
import ModalAdd from './ModalAdd'
import UseOrientation from '../hooks/UseOrientation'

export default function FooterDetails({ data, addToCart, dataToCart }) {
    const [add, setAdd] = useState(false)

    function AddAndClose() {
        setAdd(!add)
    }

    const orientation = UseOrientation()

    return (
        <>
            <TouchableOpacity style={[styles.container, { width: orientation.width / 2 }]} onPress={AddAndClose}>
                <Text style={styles.Add}>
                    Add
                </Text>
            </TouchableOpacity>
            {add && <ModalAdd AddAndClose={AddAndClose} addToCart={addToCart} data={data} dataToCart={dataToCart} />}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        right: 15,
        bottom: 15,
        flexDirection: 'row',
        backgroundColor: '#FFE0E0',
        borderRadius: 10,
        paddingVertical: 20,
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#E0F8FF'
    },
    Add: {
        fontSize: 20,
    }
})
