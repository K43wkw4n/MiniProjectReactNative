import { View, Text, StyleSheet, SectionList, Image } from 'react-native'
import React from 'react'
import UseOrientation from '../hooks/UseOrientation';

const DATA = [
    {
        title: 'Computer',
        data: ["https://www.apple.com/newsroom/images/product/mac/standard/Apple-MacBook-Pro-M2-Pro-and-M2-Max-hero-230117.jpg.landing-big_2x.jpg", "https://zazana.com/wp-content/uploads/2014/08/Analytical-engine.jpg", 'https://s359.kapook.com/pagebuilder/6ee700ba-49fb-42af-9a64-e52640404bc7.jpg'],
    },
    {
        title: 'IPhone',
        data: ['https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-1-202209?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753619946', 'https://images.droidsans.com/wp-content/uploads/2019/09/history-of-iphone-till-2018.jpg', 'https://www.macthai.com/wp-content/uploads/2015/11/the-astonishing-rise-of-iphone-sales-in-one-amazing-chart.png'],
    },
];

export default function Main() {

    const orientation = UseOrientation()

    const width = orientation.width

    return (
        <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
                <View style={styles.item}>
                    <Image
                        style={{ height: width / 2, width: width, marginVertical: 10 }}
                        source={{
                            uri: item
                        }}
                    />
                </View>
            )}
            renderSectionHeader={({ section: { title } }) => (
                <View style={{ alignItems: 'center', backgroundColor: '#fff' }}>
                    <Text style={styles.header}>{title}</Text>
                </View>
            )}
        />
    )
}

const styles = StyleSheet.create({
    item: {

    },
    header: {
        fontSize: 32,
        backgroundColor: '#fff',
        paddingVertical: 30,
    },
    title: {
        fontSize: 24,
    },
})