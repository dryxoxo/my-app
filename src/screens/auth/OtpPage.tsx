import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { OtpInput } from "react-native-otp-entry";
import { DeviceOTP } from '../../assets/icons/icons';
import Button from '../../components/atoms/Button';

const OtpPage = () => {
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
                <OtpInput
                    numberOfDigits={6}
                    focusColor="green"
                    autoFocus={false}
                    hideStick={true}
                    placeholder=" "
                    blurOnFilled={true}
                    disabled={false}
                    type="numeric"
                    secureTextEntry={false}
                    focusStickBlinkingDuration={500}
                    onFocus={() => console.log("Focused")}
                    onBlur={() => console.log("Blurred")}
                    onTextChange={(text) => console.log(text)}
                    onFilled={(text) => console.log(`OTP is ${text}`)}
                    textInputProps={{
                        accessibilityLabel: "One-Time Password",
                    }}
                    theme={{
                        containerStyle: styles.containerOTP,
                        pinCodeContainerStyle: styles.pinCodeContainer,
                        pinCodeTextStyle: styles.pinCodeText,
                        focusStickStyle: styles.focusStick,
                        focusedPinCodeContainerStyle: styles.activePinCodeContainer,
                        placeholderTextStyle: styles.placeholderText,
                        filledPinCodeContainerStyle: styles.filledPinCodeContainer,
                        disabledPinCodeContainerStyle: styles.disabledPinCodeContainer,
                    }}
                />
            </View>
            <View style={{flex: 1}}>
                <Text style={{ color: '#B9B9B9' }}>Didn’t you receive the OTP? <Text style={{ color: '#1D3BFF' }}>Resend OTP</Text></Text>
            </View>
            <View style={{ width: '100%', marginBottom: 40}}>
                <View style={{ paddingHorizontal: 24 }}>
                    <Button text='Verify' variant='primary' />
                </View>
            </View>
        </View>

    )
}

export default OtpPage

const styles = StyleSheet.create({
    containerOTP: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
        marginTop: 30,
        marginBottom: 20
    },
    pinCodeContainer: {
        width: 40,
        height: 40,
        borderWidth: 0,
        borderColor: '#ccc',
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pinCodeText: {
        fontSize: 18,
        color: '#000',
        textAlign: 'center',
    },
    focusStick: {
        height: 2,
        backgroundColor: 'green',
        width: '100%',
    },
    activePinCodeContainer: {
        borderColor: 'green',
    },
    placeholderText: {
        fontSize: 18,
        color: '#ccc',
    },
    filledPinCodeContainer: {
        borderColor: '#000',
        backgroundColor: '#f0f0f0',
    },
    disabledPinCodeContainer: {
        borderColor: '#ddd',
        backgroundColor: '#f7f7f7',
    },
});