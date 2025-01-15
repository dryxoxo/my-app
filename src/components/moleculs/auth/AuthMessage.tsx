import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LightTheme } from '../../../theme/theme'
import { useNavigation } from '@react-navigation/native'
import { RootStackNavigationProp } from '../../../navigation/types'

interface AuthMessageProps {
    type: 'login' | 'signup'
}
const AuthMessage: React.FC<AuthMessageProps> = ({ type }) => {

    const navigation = useNavigation<RootStackNavigationProp>();
    const goToLogin = () => { navigation.navigate('Login') }

    const isLogin = type == 'login' ? (
        <View style={styles.container}>
            <Text style={styles.h1}>Sign In to your Account</Text>
            <Text style={styles.h5}>Enter your email and password to log in</Text>
        </View>
    ) : (
        <View style={styles.container}>
            <Text style={styles.h1}>Sign Up</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.h5}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => goToLogin()}>
                    <Text style={[styles.h5, { fontWeight: 'bold' }]}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
    return (
        <>
            {isLogin}
        </>
    )
}

export default AuthMessage

const styles = StyleSheet.create({
    container: {
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