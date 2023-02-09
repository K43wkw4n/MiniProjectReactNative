import { View, Text, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';

export default function HeaderHome() {
  return (
    <View style={Styles.Header}>
      <View style={Styles.icon}>
        <SimpleLineIcons name="home" size={30} color="black" />
      </View>
      <View style={Styles.logo}>
        <Text>WednesDay Shop</Text>
        <Text>DropDown</Text>
      </View>
      {/* <TextInput placeholder="Search" style={styles.textInput} /> */}
    </View>
  )
}

const Styles = StyleSheet.create({
  Header: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingLeft: 10,
  },
  icon: {
    backgroundColor: '#E0F8FF',
    borderRadius: 100 / 2,
    padding: 10,
  },
  logo: {
    justifyContent: 'center',
    paddingLeft: 5,
  }
});
