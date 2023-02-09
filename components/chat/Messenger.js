import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import {
  SafeAreaView,
  View,
  VirtualizedList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from 'react-native';

const getItem = (_data, index) => ({
  id: Math.random().toString(12).substring(0),
  title: `chat ${index + 1}`,
});

const getItemCount = _data => 20;

const Item = ({ title }) => (
  <View style={styles.item}>
    <View>
      <Image style={{ height: 40, width: 40 }} source={{
        uri: "https://cdn-icons-png.flaticon.com/512/4711/4711987.png"
      }} />
    </View>
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={{ left: 20 }}>Bot send to you</Text>
    </View>
  </View>
);

export default function Messenger() {
  return (
    <>
      <VirtualizedList
        initialNumToRender={7}
        renderItem={({ item }) => <TouchableOpacity><Item title={item.title} /></TouchableOpacity>}
        keyExtractor={item => item.id}
        getItemCount={getItemCount}
        getItem={getItem}
      // ListFooterComponent={
      //   <View style={{ alignItems: 'center', backgroundColor: '#fff' }}>
      //     <Text style={{ padding: 10, backgroundColor: '#fff', fontSize: 20 }}>See More</Text>
      //   </View>}
      />

    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    borderWidth: 0.5,
    flexDirection: 'row',
  },
  title: {
    left: 20,
    fontSize: 20,
  },
});