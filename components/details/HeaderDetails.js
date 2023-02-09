import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Badge } from 'react-native-paper';

export default function HeaderDetails({ onCancel, open, data }) {
    // console.log('HeaderDetails', data)

    return (
        <View style={[Styles.Header, open && Styles.between]}>
            <TouchableWithoutFeedback onPress={onCancel}>
                <SimpleLineIcons style={Styles.back} name="arrow-left" size={24} color="black" />
            </TouchableWithoutFeedback>
            {open ?
                <View>
                    <View style={Styles.positionCountCart}>
                        {data !== 0 && <Badge style={Styles.countCart}>{data}</Badge>}
                    </View>
                    {/* {data.map((item) => (
                        <View key={item.id}>
                            {item.id && <View style={Styles.positionCountCart}>
                                <Badge style={Styles.countCart}>{item.id}</Badge>
                            </View>}
                        </View>

                    ))} */}
                    <EvilIcons onPress={open} style={Styles.basket} name="cart" size={40} color="black" />
                </View>
                :
                <Text style={Styles.cart}>
                    Cart
                </Text>
            }
        </View>
    )
}

const Styles = StyleSheet.create({
    Header: {
        flexDirection: "row",
        paddingVertical: 10,
        paddingLeft: 10,
        borderBottomWidth: 0.2,
    },
    between: {
        justifyContent: 'space-between',
    },
    back: {
        backgroundColor: '#E0F8FF',
        borderRadius: 100 / 2,
        padding: 10,
    },
    basket: {
        marginRight: 15,
        marginTop: 10,
    },
    cart: {
        marginTop: 10,
        marginLeft: 20,
        fontSize: 20,
    },
    positionCountCart: {
        position: 'absolute',
        marginLeft: 24,
    },
    countCart: {
        backgroundColor: '#E0F8FF',
        color: '#000',
        fontSize: 18,
    },
});
