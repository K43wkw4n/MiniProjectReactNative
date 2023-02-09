import { View, Text, StyleSheet, TouchableHighlight, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import { Modal } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default function ModalAdd({ AddAndClose, addToCart, data, dataToCart }) {
    function onPressCart() {
        const find = dataToCart.find(x => x.Data.id === data.id)
        // console.log('find', find?.Data)
        if (![find?.Data].includes(data)) {
            const count = (Number(number))
            if (count <= data.stock) {
                addToCart(data, number)
            } else {
                alert('error, Please enter a new Quantity.')
            }
        } else if (find?.count < data.stock) {
            const count = (Number(number))
            for (let i = 0; i < dataToCart.length; i++) {
                if (dataToCart[i].Data.id === find?.Data.id) {
                    dataToCart[i].count += count
                }
            }
        }
    }

    const { thumbnail } = data

    const [number, onChangeNumber] = useState(1);

    const onChanged = (text) => {
        let newText = '';
        let numbers = '0123456789';

        for (var i = 0; i < text.length; i++) {
            if (numbers.indexOf(text[i]) > -1) {
                newText = newText + text[i];
            }
            // else {
            //     alert("please enter numbers only");
            // }
        }
        onChangeNumber(newText);
    }

    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
            >
                <Text style={styles.containerClose} onPress={AddAndClose} />
                <View style={styles.container}>
                    <Text style={styles.close} >
                        <AntDesign onPress={AddAndClose} name="close" size={30} color="black" />
                    </Text>
                    <View>
                        <Text>Details Add</Text>
                    </View>
                    <View style={styles.Vertical}>
                        <Image
                            style={styles.imagesMain}
                            source={{
                                uri: thumbnail
                            }}
                        />
                    </View>
                    <View >
                        <TextInput
                            style={styles.input}
                            keyboardType="numeric"
                            onChangeText={onChanged}
                            value={number}
                            defaultValue='1'
                            maxLength={3}
                        />
                    </View>
                    <TouchableHighlight style={styles.add} onPress={onPressCart} underlayColor="#F9E79F">
                        <Text>
                            Add To Cart
                        </Text>
                    </TouchableHighlight>
                </View>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 'auto',
        backgroundColor: '#E0F8FF',
        padding: 10,
    },
    containerClose: {
        flex: 1,
    },
    close: {
        position: 'absolute',
        // flexDirection: 'row-reverse',
        right: 0,
        padding: 10,
    },
    add: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#FFE0E0',
        padding: 20,
        borderRadius: 10,
        margin: 10,
    },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        width: 150,
    },
    imagesMain: {
        height: 100,
        width: 200,
    },
    Vertical: {
        paddingVertical: 5,
    },
})
