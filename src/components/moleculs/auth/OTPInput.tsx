import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { OtpInput } from 'react-native-otp-entry'


interface otpProps {
    onTextChange?: (text: string)=>void;
    validateOtp?: boolean;
  }

const OTPInput: React.FC<otpProps> = ({onTextChange}) => {
    return (
        <OtpInput
            numberOfDigits={6}
            focusColor="pink"
            autoFocus={true}
            hideStick={false}
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
        width: 50,
        height: 50,
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
        height: '80%',
        borderWidth: 1,
        borderColor: 'blue',
        backgroundColor: 'green',
        width: '100%',
        marginVertical: 'auto'
    },
    activePinCodeContainer: {
        borderWidth: 0,
        borderColor: 'white',
        backgroundColor: 'red',
        borderRadius: 15
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

