import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { DeviceOTP } from '../../../assets/icons/icons'
import OTPInput from '../../moleculs/auth/OTPInput'
import Button from '../../atoms/Button'


const OTPOrganism = () => {

    const [OTP, setOTP] = useState<string>('')

    const handleOTP = () => {
        const payload = {
            OTP
        }

        console.log("OTP: ", payload)
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
                <OTPInput onTextChange={setOTP}/>
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