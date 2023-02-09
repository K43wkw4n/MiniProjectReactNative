import { View, Text, Modal, StyleSheet } from 'react-native'
import React from 'react'
import ImageViewer from 'react-native-image-zoom-viewer';

export default function ZoomImage({ thumbnail }) {
    const images = [
        {
            url: thumbnail,
            props: {
                source: thumbnail
            }
        }
    ]

    // console.log(images)

    return (
        <Modal visible={true} transparent={true} >
            <ImageViewer imageUrls={images} />
            <Text>
                111111111111
            </Text>
        </Modal>
    )
}
