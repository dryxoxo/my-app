import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LightTheme } from '../../theme/theme'

interface AuthMessageProps {
    type: 'login' | 'signup'
}
const AuthMessage: React.FC<AuthMessageProps> = ({ type }) => {

    const result = type == 'login' ? (
        <View style={styles.container}>
            <Text style={styles.h1}>Sign In to your Account</Text>
            <Text style={styles.h5}>Enter your email and password to log in</Text>
        </View>
    ) : (
        <View style={styles.container}>
            <Text style={styles.h1}>Sign Up</Text>
            <Text style={styles.h5}>Already have an account? Log In</Text>
        </View>
    )
    return (
        <>
        {result}
        </>
    )
}

export default AuthMessage

const styles = StyleSheet.create({
    container:{
        gap: 12,
        marginBottom: 32
    },
    h1: {
        fontSize: 40,
        color: LightTheme.text.backlight,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    h5: {
        fontSize: 18,
        color: LightTheme.text.backlight,
        textAlign: 'center'
    }
})