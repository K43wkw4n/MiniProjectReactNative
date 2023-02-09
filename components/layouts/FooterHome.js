import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Home from '../../components/content/Home';
//icons
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
//navigations
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Messenger from '../chat/Messenger';
import Setting from '../setting/Setting';

const Stack = createBottomTabNavigator();
const Tabs = createStackNavigator();

const FooterHome = () => {

  const createScreen = ({ route }) => ({
    headerShown: false,
    tabBarIcon: ({ color, size }) => {
      let iconName = TAB_ICON[route.name]
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
  })
  return (
    <>
      <Stack.Navigator initialRouteName="Home" screenOptions={createScreen} >
        <Stack.Screen name='Home' options={{
          headerShown: '', tabBarIcon: () => (
            <SimpleLineIcons name="home" size={24} color="black" />
          ),
        }} >{(props) => <Home {...props} />}</Stack.Screen>
        <Stack.Screen name='Messenger' options={{
          tabBarBadge: 3,
          headerShown: '', tabBarIcon: () => (
            <Ionicons name="chatbubble-ellipses-outline" size={24} color="black" />
          ),
        }} >{(props) => <Messenger {...props} />}</Stack.Screen>
        <Stack.Screen name='Setting' options={{
          headerShown: '', tabBarIcon: () => (
            <Ionicons name="ios-settings-outline" size={24} color="black" />
          ),
        }} >{(props) => <Setting {...props} />}</Stack.Screen>
      </Stack.Navigator>
    </>
  )
}

export default FooterHome
