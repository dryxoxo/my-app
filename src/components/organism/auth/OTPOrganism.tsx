import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { DeviceOTP } from '../../../assets/icons/icons'
import OTPInput from '../../moleculs/auth/OTPInput'
import Button from '../../atoms/Button'
import { useAppSelector } from '../../../hooks/hooks'
import { RootState } from '../../../redux/store'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { userVerifOTP } from '../../../api/userSendOtp'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import { RootStackNavigationProp } from '../../../navigation/types'


const OTPOrganism = () => {

    const navigation = useNavigation<RootStackNavigationProp>();
    const [OTP, setOTP] = useState<string>('')
    const uniqueId = useAppSelector((state: RootState) => state.auth.unique_id);
    
    const checkStoredData = async () => {
        const keys = await AsyncStorage.getAllKeys();
        const data = await AsyncStorage.multiGet(keys);
        console.log('Stored keys and values:', data);
      };

    const handleOTP = async () => {
        console.log(uniqueId)
        try {
            const result = await userVerifOTP(uniqueId as string, OTP)
            const message = result.data.message
            Alert.alert(message)
            navigation.navigate('Pin')
            console.log("handleOTP:", message)
        } catch (error) {
            try {
                const result = await userVerifOTP(uniqueId as string, OTP);
                console.log("handleOTP result:", result);
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    Alert.alert(error.response?.data.detail);
                }
            }
        }

    }

    return (
        <View style={{ backgroundColor: '#FFF', height: '100%', alignItems: 'center', flexDirection: 'column' }}>
            <View style={{ marginTop: 40 }}>
                <DeviceOTP height={300} width={300} />
            </View>
            <View style={{ marginTop: 40, gap: 20 }}>
                <Text style={{ fontWeight: '700', fontSize: 32, textAlign: 'center' }}>OTP Verification</Text>
                <Text style={{ textAlign: 'center' }}>Enter the OTP sent to <Text style={{ fontWeight: '700' }}>+91 987987333</Text></Text>
            </View>
            <View>
                <OTPInput onTextChange={setOTP} type={'otp'}/>
            </View>
            <View style={{ flex: 1 }}>
                <Text style={{ color: '#B9B9B9' }}>Didn’t you receive the OTP? <Text style={{ color: '#1D3BFF' }}>Resend OTP</Text></Text>
            </View>
            <View style={{ width: '100%', marginBottom: 40 }}>
                <View style={{ paddingHorizontal: 24 }}>
                    <Button text='Verify' variant='primary' onPress={handleOTP}/>
                </View>
            </View>
        </View>
    )
}

export default OTPOrganism

const styles = StyleSheet.create({})