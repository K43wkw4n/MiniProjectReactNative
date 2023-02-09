import { StyleSheet, View, Text, Dimensions, Pressable, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Details from './details/Details';
import Loading from './loading/Loading';
import UseOrientation from './hooks/UseOrientation';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function FormPost({ dataItem, addToCart, dataToCart }) {
    const [detail, setDetail] = useState(false)
    const [loading, setLoading] = useState(false)

    function loadingDetails() {
        setLoading(!loading)
        const random = Math.floor(Math.random() * 400) + 300
        wait(!detail && random).then(() => setDetail(!detail));
    }

    const orientation = UseOrientation()

    const width = orientation.width

    return (
        <>
            <Pressable android_ripple={{ color: "#fff" }}
                onPress={loadingDetails}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                    },
                ]}
            >
                {({ pressed }) => (
                    <>
                        {dataItem ?
                            <View style={[Styles.container, width <= 392.72727272727275 ? { width: width / 2, } : { width: width / 4, }]}>
                                <View style={{
                                    shadowColor: "#D18F9C",
                                    shadowOffset: {
                                        width: 0,
                                        height: 6,
                                    },
                                    shadowOpacity: 0.37,
                                    shadowRadius: 7.49,

                                    elevation: 12,
                                }}>
                                    <Image
                                        style={Styles.image}
                                        source={{
                                            uri: dataItem.item?.thumbnail
                                        }}
                                    />
                                </View>
                                <View>
                                    {pressed ? <View style={{ alignItems: 'center', marginTop: 10 }}><Text>release To Details</Text></View> : <><View style={Styles.center}>
                                        <Text style={Styles.Horizon}>
                                            {dataItem.item?.title}
                                        </Text>
                                    </View>
                                        <View style={[Styles.row, Styles.Horizon]}>
                                            <Text>
                                                ฿ {dataItem.item?.price}
                                            </Text>
                                            <Text style={Styles.right}>
                                                Quantity {dataItem.item?.stock}
                                            </Text>
                                        </View>
                                    </>}
                                </View>
                            </View>
                            :
                            <View style={Styles.containerwait}>
                                <View style={{
                                    shadowColor: "#D18F9C",
                                    shadowOffset: {
                                        width: 0,
                                        height: 6,
                                    },
                                    shadowOpacity: 0.37,
                                    shadowRadius: 7.49,

                                    elevation: 12,
                                }}>
                                    <View style={Styles.imagewait}></View>
                                </View>
                                <View>
                                    <View style={Styles.centerwait}>
                                        <Text style={[Styles.Horizon, { backgroundColor: '#e0e0e0', paddingHorizontal: 40, marginVertical: 5 }]}>
                                        </Text>
                                    </View>
                                    <View style={[Styles.rowwait, Styles.Horizonwait, { backgroundColor: '#e0e0e0' }]}>
                                        <Text>
                                        </Text>
                                        <Text>
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        }
                    </>
                )}

            </Pressable>
            {detail && (
                <Details
                    data={dataItem?.item}
                    onCancel={loadingDetails}
                    addToCart={addToCart}
                    dataToCart={dataToCart}
                />
            )}
            {loading && <Loading />}
        </>
    )
}

const width = Dimensions.get("window").width;

// console.log('😊',DeviceHeight)

const Styles = StyleSheet.create({
    container: {
        padding: 5,

        justifyContent: 'center',
        // height: 255,
        // position: 'relative',
        // top: -30,
    },
    image: {
        width: null,
        height: 200,
        borderRadius: 15,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Horizon: {
        paddingHorizontal: 5,
    },
    center: {
        alignItems: 'center',
    },
    containerwait: {
        padding: 5,
        width: width / 2,
        justifyContent: 'center',
        // height: 255,
        // position: 'relative',
        // top: -30,
        backgroundColor: '#cacaca'
    },
    imagewait: {
        width: null,
        height: 200,
        borderRadius: 15,
        backgroundColor: '#dedede'
    },
    rowwait: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Horizonwait: {
        paddingHorizontal: 5,
    },
    centerwait: {
        alignItems: 'center',
    },
});
