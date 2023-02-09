import { View, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Details from './Details'

export default function DetailsTest({ Data, data, dataToCart, addToCart }) {

    const [detail, setDetail] = useState(false)

    function OpenDetail() {
        setDetail(!detail)
    }
    
    return (
        <>
            <View style={Styles.vertical}>
                <ScrollView horizontal={true}>
                    {Data.map((item) => (
                        <View key={item.id}>
                            {data.id != item.id &&
                                <>
                                    {data.category == item.category &&
                                        <TouchableOpacity onPress={OpenDetail}>
                                            <Image
                                                style={Styles.images}
                                                source={{
                                                    uri: item.thumbnail
                                                }}
                                            />
                                            {detail && (
                                                <Details
                                                    data={item.id}
                                                    addToCart
                                                    dataToCart
                                                />
                                            )}
                                        </TouchableOpacity>

                                    }

                                </>

                            }
                        </View>
                    ))}
                </ScrollView>
            </View> 
        </>
    )
}

const width = Dimensions.get("window").width;

const Styles = StyleSheet.create({
    container: {
        marginBottom: 65,
    },
    oldPrice: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
    },
    rating: {
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    ratingCount: {
        paddingLeft: 10
    },
    Horizon: {
        paddingHorizontal: '2%',
    },
    vertical: {
        paddingVertical: '2%',
    },
    row: {
        flexDirection: 'row',
        paddingBottom: 10,
        borderBottomWidth: 5,
        borderBottomColor: 'gray'
    },
    between: {
        justifyContent: 'space-between',
    },
    imagesMain: {
        width: width,
        height: 200,
    },
    images: {
        width: width / 2,
        height: 200,
        marginHorizontal: 2,
        borderRadius: 10,
    },
    fontSizeTitle: {
        fontSize: 20,
        marginVertical: 5,
    },
    fontSize: {
        fontSize: 17,
    },
    marginleft: {
        marginLeft: 5,
    },
    moredetails: {
        width: width / 3,
        height: 100,
        marginHorizontal: 2,
        borderRadius: 10,
    },
    moredetailsText: {
        marginVertical: 4,
    }
})
