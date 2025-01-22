import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ScreenTemplate from '../../template/ScreenTemplate'
import Backdrop from '../../atoms/Backdrop'
import AuthForm from '../../moleculs/auth/AuthForm'
import AuthMessage from '../../moleculs/auth/AuthMessage'
import { AxiosError } from 'axios'
import { registerNewAccount } from '../../../api/userRegister'
import { userSendOTP } from '../../../api/userSendOtp'
import { register } from '../../../redux/auth/authSlice'
import { useNavigation } from '@react-navigation/native'
import { useAppDispatch } from '../../../hooks/hooks'
import { RootStackNavigationProp } from '../../../navigation/types'

const RegisterOrganism = () => {

    const navigation = useNavigation<RootStackNavigationProp>();
    const dispatch = useAppDispatch()

    const [fullname, setfullname] = useState<string>('')
    const [phoneNumber, setphoneNumber] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isSuccess, setIsSuccess] = useState<boolean>(true)
    const [message, setMessage] = useState<string>('')

    const handleRegister = async () => {
        setIsLoading(true)
        try {
            const result = await registerNewAccount(fullname, phoneNumber)
            const uniqueId = result?.data?.data?.unique_id
            await userSendOTP(uniqueId)
            setIsSuccess(true)
            setMessage('')
            dispatch(register({ unique_id: uniqueId }))
            navigation.navigate('OTP')
        } catch (error) {
            if (error instanceof AxiosError && error.response?.data.detail) {
                setMessage(error.response.data.detail);
                setIsSuccess(false)
                console.log("masuk sini", message)
            }
        } finally {
            setIsLoading(false)
        }
    };

    return (
        <ScreenTemplate>
            <Backdrop />
            <View style={{ paddingHorizontal: 24, position: 'absolute', top: 120, width: '100%' }}>
                <AuthMessage type='signup' />
                <View style={{ backgroundColor: '#fff', width: '100%', borderRadius: 10 }}>
                    <AuthForm type='signup'
                    onFullnameChange={setfullname}
                    onPhoneNumberChange={setphoneNumber}
                    isLoading={isLoading}
                    isSuccess={isSuccess}
                    message={message}
                    handleRegister={handleRegister}
                    />
                </View>
            </View>
        </ScreenTemplate>
    )
}

export default RegisterOrganism

const styles = StyleSheet.create({})