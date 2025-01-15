import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { OtpInput } from 'react-native-otp-entry'


interface otpProps {
    onTextChange?: (text: string)=>void;
  }

const OTPInput: React.FC<otpProps> = ({onTextChange}) => {
    return (
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
            onFilled={onTextChange}
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
    )
}

export default OTPInput

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