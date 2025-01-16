import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Button from '../../atoms/Button'
import { Google } from '../../../assets/icons/icons'
import Input from '../../atoms/Input'
import { useNavigation } from '@react-navigation/native'
import { RootStackNavigationProp } from '../../../navigation/types'
import { login } from '../../../api/userGeneral'
import { registerNewAccount } from '../../../api/userRegister'


interface AuthFormProps {
    type: 'login' | 'signup'
}

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
    const navigation = useNavigation<RootStackNavigationProp>();
    const isLogin = type === 'login'

    const goToRegister = () => { navigation.navigate('Register') }
    const goToOTP = () => { navigation.navigate('OTP') }

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [fullname, setfullname] = useState<string>('')
    const [phoneNumber, setphoneNumber] = useState<string>('')


    const handleLogin = async () => {
        const formLogin = {
            username,
            password,
        };

        try {
            const result = await login(username, password)
            console.log('result: ', result?.data?.data?.unique_id);
        } catch (error) {
            console.log('error', error)
        }
        navigation.navigate('OTP')
    };

    const handleRegister = async () => {
        const formLogin = {
            fullname,
            phoneNumber
        };

        try {
            const result = await registerNewAccount(fullname, phoneNumber)
            console.log('result: ', result?.data?.data?.unique_id);
        } catch (error) {
            console.log(error)
        }
        navigation.navigate('OTP')
        console.log('Register Form:', formLogin);
    };

    return (
        <View style={{ padding: 24, flexDirection: 'column', gap: 26 }}>
            {isLogin ? (
                <>
                    <Button variant='outline' Icon={Google} text='Continue With Google' onPress={goToOTP} />
                    <View style={{ flexDirection: 'row', alignContent: 'center' }}>
                        <View style={{ flex: 1, height: 1, borderWidth: 1, borderColor: '#e6eaec', marginVertical: 'auto' }} />
                        <Text style={{ marginHorizontal: 16, color: '#6c7278' }}>Or Login With</Text>
                        <View style={{ flex: 1, height: 1, borderWidth: 1, borderColor: '#e6eaec', marginVertical: 'auto' }} />
                    </View>
                    <View style={{ flexDirection: 'column', gap: 16 }}>
                        <Input type='default' placeholder='E-Mail Or Phone Number' onChangeText={setUsername} value={username} />
                        <Input type='default' placeholder='Password' onChangeText={setPassword} value={password} />
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
                    <Button onPress={handleLogin} variant='primary' text='Log In' />
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
                        <Input type='default' placeholder='Fullname' value={fullname} onChangeText={setfullname} />
                        <Input type='numeric' placeholder='Phone Number' value={phoneNumber} onChangeText={setphoneNumber} />
                    </View>
                    <Button variant='primary' text='Sign Up' onPress={handleRegister} />
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