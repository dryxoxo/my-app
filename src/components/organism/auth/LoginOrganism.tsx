import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ScreenTemplate from '../../template/ScreenTemplate'
import Backdrop from '../../atoms/Backdrop'
import AuthMessage from '../../moleculs/auth/AuthMessage'
import AuthForm from '../../moleculs/auth/AuthForm'
import { login } from '../../../api/userGeneral'
import { AxiosError } from 'axios'

const LoginOrganism = () => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isSuccess, setIsSuccess] = useState<boolean>(true)
    const [message, setMessage] = useState<string>('')

    const handleLogin = async () => {
        setIsLoading(true)
        try {
            const result = await login(username, password)
            console.log('result: ', result?.data);
            setIsSuccess(true)
            Alert.alert(`Token: ${result?.data.access_token}\nRefresh Token: ${result?.data.refresh_token}\nToken Type: ${result?.data.token_type}`);
        } catch (error) {
            if (error instanceof AxiosError && error.response?.data.detail) {
                setMessage(error.response.data.detail);
                setIsSuccess(false)
                console.log("masuk sini login:", message)
            }
        } finally {
            setIsLoading(false)
        }
    };

    return (
        <ScreenTemplate>
            <Backdrop />
            <View style={{ paddingHorizontal: 24, position: 'absolute', top: 120, width: '100%' }}>
                <AuthMessage type='login' />
                <View style={{ backgroundColor: '#fff', width: '100%', borderRadius: 10 }}>
                    <AuthForm
                        type='login'
                        onUsernameChange={setUsername}
                        onPasswordChange={setPassword}
                        isLoading={isLoading}
                        handleLogin={handleLogin}
                        isSuccess={isSuccess}
                        message={message}
                    />
                </View>
            </View>
        </ScreenTemplate>
    )
}

export default LoginOrganism

const styles = StyleSheet.create({})