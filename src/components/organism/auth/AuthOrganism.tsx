import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenTemplate from '../../template/ScreenTemplate'
import Backdrop from '../../atoms/Backdrop'
import AuthMessage from '../../moleculs/auth/AuthMessage'
import AuthForm from '../../moleculs/auth/AuthForm'


interface AuthOrganismProps {
    type: 'login' | 'signup'
}
const AuthOrganism: React.FC<AuthOrganismProps> = ({ type }) => {
    const isLogin = type === 'login'
    return (
        <>
            {isLogin ? (
                <ScreenTemplate>
                    <Backdrop />
                    <View style={{ paddingHorizontal: 24, position: 'absolute', top: 120, width: '100%' }}>
                        <AuthMessage type='login' />
                        <View style={{ backgroundColor: '#fff', width: '100%', borderRadius: 10 }}>
                            <AuthForm type='login' />
                        </View>
                    </View>
                </ScreenTemplate>
            ) : (
                <ScreenTemplate>
                    <Backdrop />
                    <View style={{ paddingHorizontal: 24, position: 'absolute', top: 120, width: '100%' }}>
                        <AuthMessage type='signup' />
                        <View style={{ backgroundColor: '#fff', width: '100%', borderRadius: 10 }}>
                            <AuthForm type='signup' />
                        </View>
                    </View>
                </ScreenTemplate>
            )}
        </>

    )
}

export default AuthOrganism

const styles = StyleSheet.create({})