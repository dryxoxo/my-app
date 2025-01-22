import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Button from '../../atoms/Button'
import { Google } from '../../../assets/icons/icons'
import Input from '../../atoms/Input'
import { useNavigation } from '@react-navigation/native'
import { RootStackNavigationProp } from '../../../navigation/types'
import { login } from '../../../api/userGeneral'
import { registerNewAccount } from '../../../api/userRegister'
import { userSendOTP } from '../../../api/userSendOtp'
import { getItem, setItem } from '../../../utils/asyncStorage'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { register } from '../../../redux/auth/authSlice'
import { RootState } from '../../../redux/store'
import { AxiosError } from 'axios'

interface AuthFormProps {
    type: 'login' | 'signup',
    onUsernameChange?: (text: string) => void,
    onPasswordChange?: (text: string) => void,
    onFullnameChange?: (text: string) => void,
    onPhoneNumberChange?: (text: string) => void,
    handleLogin?: () => void,
    handleRegister?: () => void,
    isLoading?: boolean,
    isSuccess?: boolean,
    message?: string

}

const AuthForm: React.FC<AuthFormProps> = ({ type, onUsernameChange, onPasswordChange, isLoading, handleLogin, isSuccess, message, onPhoneNumberChange, onFullnameChange, handleRegister }) => {
    const navigation = useNavigation<RootStackNavigationProp>();
    const isLogin = type === 'login'
    const goToRegister = () => { navigation.navigate('Register') }

    return (
        <View style={{ padding: 24, flexDirection: 'column', gap: 26 }}>
            {isLogin ? (
                <>
                    <Button variant='outline' Icon={Google} text='Continue With Google' />
                    <View style={{ flexDirection: 'row', alignContent: 'center' }}>
                        <View style={{ flex: 1, height: 1, borderWidth: 1, borderColor: '#e6eaec', marginVertical: 'auto' }} />
                        <Text style={{ marginHorizontal: 16, color: '#6c7278' }}>Or Login With</Text>
                        <View style={{ flex: 1, height: 1, borderWidth: 1, borderColor: '#e6eaec', marginVertical: 'auto' }} />
                    </View>
                    <View style={{ flexDirection: 'column', gap: 16 }}>
                        {message && <Text style={{ color: 'red', textAlign: 'center' }}>{message}</Text>}
                        <Input type='default' placeholder='E-Mail Or Phone Number' onChangeText={onUsernameChange} isSuccess={isSuccess} />
                        <Input type='default' placeholder='Password' onChangeText={onPasswordChange} isSuccess={isSuccess} />
                        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity style={{
                                    width: 19,
                                    height: 19,
                                    borderWidth: 1,
                                    borderColor: '#ccc',
                                    borderRadius: 4,
                                    marginRight: 10,
                                }} />
                                <Text style={{ color: '#6c7278' }}>Remember Me</Text>
                            </View>
                            <Text style={{ color: '#4D81E7' }}>Forgot Password</Text>
                        </View>
                    </View>
                    <Button onPress={handleLogin} variant='primary' text='Log In' isLoading={isLoading} />
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#6c7278' }}>Don't have an account? </Text>
                        <TouchableOpacity onPress={() => goToRegister()}>
                            <Text style={{ color: '#1D61E7' }}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </>
            ) : (
                <>
                    <View style={{ flexDirection: 'column', gap: 16 }}>
                        {message && <Text style={{ color: 'red', textAlign: 'center' }}>{message}</Text>}
                        <Input type='default' placeholder='Fullname' onChangeText={onFullnameChange} isSuccess={isSuccess} />
                        <Input type='numeric' placeholder='Phone Number' onChangeText={onPhoneNumberChange} isSuccess={isSuccess} />
                    </View>
                    <Button variant='primary' text='Sign Up' onPress={handleRegister} isLoading={isLoading} />
                    <View style={{ flexDirection: 'row', alignContent: 'center' }}>
                        <View style={{ flex: 1, height: 1, borderWidth: 1, borderColor: '#e6eaec', marginVertical: 'auto' }} />
                        <Text style={{ marginHorizontal: 16, color: '#6c7278' }}>Or</Text>
                        <View style={{ flex: 1, height: 1, borderWidth: 1, borderColor: '#e6eaec', marginVertical: 'auto' }} />
                    </View>
                    <Button variant='outline' Icon={Google} text='Sign Up With Google' />
                </>
            )}

        </View>
    )
}

export default AuthForm

const styles = StyleSheet.create({})