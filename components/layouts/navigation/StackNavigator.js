import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import Home from '../../content/Home'
import Details from '../../details/Details'

const Stack = createStackNavigator()

export const StackNavigator = () => {
    return (
        <>
            <Stack.Navigator screenOptions={{ headerShown: false, ...TransitionPresets.SlideFromRightIOS, }}>
                <Stack.Screen
                    name="Home1"
                    component={Home}
                />
                <Stack.Screen
                    name="Details"
                    component={Details}
                />
            </Stack.Navigator>
        </>
    )
}