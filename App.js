import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar as StatusBars } from 'react-native';
import Home from './components/content/Home';
import FooterHome from './components/layouts/FooterHome';
import HeaderHome from './components/layouts/HeaderHome';
import Image from './components/Image'
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import Slide from './components/slider/Slide';
import { TabNavigator } from './components/layouts/navigation/TabNavigator';

//height : 783.2727272727273
//width :=: 392.72727272727275
//color A3CBD2 green
//color D18F9C red
//color ECEDEA gray
//color E0F8FF blue

export default function App() {
  return (
    <>
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style='auto' />
        <HeaderHome />
      </View>
      <TabNavigator />
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBars.currentHeight,
  },
});
