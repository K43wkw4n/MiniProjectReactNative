import { StyleSheet, Text, View, FlatList, RefreshControl } from 'react-native'
import React, { useState, useCallback } from 'react'
import FormPost from '../FormPost';
import { Data } from '../data/Data';
import UseOrientation from '../hooks/UseOrientation'
import Slide from '../slider/Slide';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function Flatlist({ Products, addToCart, dataToCart }) {
    const orientation = UseOrientation()

    const width = orientation.width

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        wait(1000).then(() => setRefreshing(false));
    }, []);

    // console.log(width)

    const { products } = Products

    return (
        <>
            <View style={style.container}>
                <FlatList
                    ListHeaderComponent={
                        <>
                            <Slide />
                            {/* <Slider /> */}
                        </>
                    }
                    data={products}
                    renderItem={(item) => <FormPost dataItem={item} addToCart={addToCart} dataToCart={dataToCart} />}
                    keyExtractor={(Data) => Data?.id}
                    key={width <= 392.72727272727275 ? 'vertical' : 'horizontal'}
                    numColumns={width <= 392.72727272727275 ? 2 : 4}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                />
            </View>
        </>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    }
})
