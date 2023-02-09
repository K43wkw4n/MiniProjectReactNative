import { View, Text, Modal, StyleSheet, Image, Dimensions, Thumbnail, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import HeaderDetails from './HeaderDetails'
import { Rating, AirbnbRating } from 'react-native-ratings';
import FooterDetails from './FooterDetails';
import Cart from '../Cart/Cart';
import { Data } from '../data/Data';
import ZoomImage from '../zoomImage/ZoomImage';
import UseOrientation from '../hooks/UseOrientation'

export default function Details({ data, onCancel, dataToCart, addToCart }) {
    const [cart, setCart] = useState(false)

    // useEffect(() => {
    //     wait(0).then(() => Loading(true));
    //     wait(1500).then(() => Loading(false));
    // }, [])

    const randomOldPrice = (Math.random() * (30 - 10 + 1) + 10)
    // (Math.random(3) + 10) / 100)

    function openCart() {
        setCart(!cart)
    }

    const {
        id,
        title,
        description,
        price,
        discountPercentage,
        rating,
        stock,
        brand,
        category,
        thumbnail,
        images
    } = data

    // console.log('details', dataToCart)

    const Count = dataToCart.length;

    const orientation = UseOrientation()

    const width = orientation.width

    const [detail, setDetail] = useState(false)
    const [dataDetail, setDataDetail] = useState([])

    function OpenDetail(data) {
        setDetail(!detail)
        setDataDetail(data)
    }

    return (
        <>
            <Modal animationType="slide">
                <View style={Styles.container}>
                    <HeaderDetails onCancel={onCancel} open={openCart} data={Count} />
                    <ScrollView>
                        <View>
                            <View>
                                <Image
                                    style={[Styles.imagesMain, { width: width }]}
                                    source={{
                                        uri: thumbnail
                                    }}
                                />
                            </View>
                            <View>
                                <Text style={[Styles.moredetailsText, Styles.marginleft]}>
                                    more details
                                </Text>
                                <ScrollView horizontal={true}>
                                    {images?.map((_, i) => (
                                        <View key={i}>
                                            <Image
                                                style={Styles.moredetails}
                                                source={{
                                                    uri: images[i]
                                                }}
                                            />
                                        </View>
                                    ))}
                                </ScrollView>
                            </View>
                            <View style={Styles.Horizon}>
                                <Text style={Styles.fontSizeTitle}>
                                    {title}
                                </Text>
                                <View style={Styles.vertical}>
                                    <Text>
                                        ฿ {price}
                                    </Text>
                                    <Text style={Styles.oldPrice}>
                                        ฿ {price + price * (randomOldPrice / 100).toFixed(2)}
                                    </Text>
                                </View>
                                <View style={[Styles.row, Styles.between]}>
                                    <View style={Styles.rating}>
                                        <Rating
                                            ratingCount={5}
                                            imageSize={20}
                                            startingValue={rating}
                                            fractions={2}
                                            readonly
                                        />
                                        <Text style={Styles.ratingCount}>{rating}</Text>
                                    </View>
                                    <View>
                                        <Text>
                                            {stock} pieces available
                                        </Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={Styles.fontSize}>
                                        Details
                                    </Text>
                                    <Text style={Styles.marginleft}>
                                        {description}
                                    </Text>
                                </View>
                                <View>
                                    <Text style={Styles.fontSize}>
                                        Brand
                                    </Text>
                                    <Text style={Styles.marginleft}>
                                        {brand}
                                    </Text>
                                </View>
                                <View>
                                    <View>
                                        <Text style={[Styles.vertical, Styles.fontSize]}>
                                            something similar
                                        </Text>
                                    </View>
                                    <View style={Styles.vertical}>
                                        <ScrollView horizontal={true}>
                                            {Data?.map((item) => (
                                                <TouchableOpacity key={item.id} onPress={() => OpenDetail(item)}>
                                                    {data.id != item.id &&
                                                        <>
                                                            {data.category == item.category &&
                                                                <Image
                                                                    style={Styles.images}
                                                                    source={{
                                                                        uri: item.thumbnail
                                                                    }}
                                                                />
                                                            }
                                                        </>
                                                    }
                                                </TouchableOpacity>
                                            ))}
                                        </ScrollView>
                                    </View>
                                    <Text>Other</Text>
                                    <View style={Styles.vertical}>
                                        <ScrollView horizontal={true}>
                                            {Data?.map((item) => (
                                                <TouchableOpacity key={item.id} onPress={() => OpenDetail(item)}>
                                                    {data.id != item.id &&
                                                        <>
                                                            {data.category != item.category &&
                                                                <Image
                                                                    style={Styles.images}
                                                                    source={{
                                                                        uri: item.thumbnail
                                                                    }}
                                                                />
                                                            }
                                                        </>
                                                    }
                                                </TouchableOpacity>
                                            ))}
                                        </ScrollView>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                    {cart && <Cart
                        Cancel={openCart}
                        data={dataToCart}
                    />}
                </View>
                <FooterDetails data={data} addToCart={addToCart} dataToCart={dataToCart} />
            </Modal>
            {detail && <Details
                data={dataDetail}
                onCancel={OpenDetail}
                dataToCart={dataToCart}
                addToCart={addToCart}
            />}
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
