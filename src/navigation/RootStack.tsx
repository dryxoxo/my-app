import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import LoginPage from '../screens/auth/LoginPage';
import RegisterPage from '../screens/auth/RegisterPage';
import OtpPage from '../screens/auth/OtpPage';

const RootStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={LoginPage} />
            <Stack.Screen name='Register' component={RegisterPage} />
            <Stack.Screen name='OTP' component={OtpPage} />
        </Stack.Navigator>
    )
}

export default RootStack

const styles = StyleSheet.create({})