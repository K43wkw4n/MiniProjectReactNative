import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StackNavigator } from "./StackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons, SimpleLineIcons, MaterialIcons } from "@expo/vector-icons";
import Messenger from "../../chat/Messenger";
import Setting from "../../setting/Setting";
import Me from "../../me/Me";
import Main from "../../content/Main";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
    Restaurants: "md-restaurant",
    Map: "md-map",
    Settings: "md-settings",
};

const createScreen = ({ route }) => ({
    headerShown: false,
    tabBarIcon: ({ color, size }) => {
        let iconName = TAB_ICON[route.name]
        return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: "#A3CBD2",
    tabBarInactiveTintColor: "gray",
})

export const TabNavigator = () => (
    <Tab.Navigator screenOptions={createScreen} headerMode="none">
        <Tab.Screen name="Main" component={Main} options={{
            headerShown: '', tabBarIcon: () => (
                <MaterialIcons name="domain-verification" size={24} color="black" />
            ),
        }} />
        <Tab.Screen name="Home" component={StackNavigator} options={{
            headerShown: '', tabBarIcon: () => (
                <SimpleLineIcons name="home" size={24} color="black" />
            ),
        }} />
        <Tab.Screen name="Messenger" component={Messenger} options={{
            tabBarBadge: 3,
            headerShown: '', tabBarIcon: () => (
                <Ionicons name="chatbubble-ellipses-outline" size={24} color="black" />
            ),
        }} />
        <Tab.Screen name="Me" component={Me} options={{
            headerShown: '', tabBarIcon: () => (
                <Ionicons name="person-outline" size={24} color="black" />
            ),
        }} />
    </Tab.Navigator>
);
