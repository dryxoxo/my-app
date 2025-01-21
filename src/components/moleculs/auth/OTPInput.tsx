import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { OtpInput } from 'react-native-otp-entry'


interface otpProps {
    type: 'pin' | 'otp'
    onTextChange?: (text: string)=>void;
    validateOtp?: boolean;
  }

const OTPInput: React.FC<otpProps> = ({onTextChange, type}) => {
    const currentStyles = styles(type);
    return (
        <OtpInput
            numberOfDigits={6}
            focusColor="pink"
            autoFocus={true}
            hideStick={false}
            blurOnFilled={true}
            disabled={false}
            type="numeric"
            secureTextEntry={type == 'pin' ? true : false}
            focusStickBlinkingDuration={500}
            onFilled={onTextChange}
            textInputProps={{
                accessibilityLabel: "One-Time Password",
            }}
            theme={{
                containerStyle: currentStyles.containerOTP,
                pinCodeContainerStyle: currentStyles.pinCodeContainer,
                pinCodeTextStyle: currentStyles.pinCodeText,
                focusStickStyle: currentStyles.focusStick,
                focusedPinCodeContainerStyle: currentStyles.activePinCodeContainer,
                filledPinCodeContainerStyle: currentStyles.filledPinCodeContainer,
                disabledPinCodeContainerStyle: currentStyles.disabledPinCodeContainer,
            }}
        />
    )
}

export default OTPInput

// const styles = StyleSheet.create({
//     containerOTP: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         paddingHorizontal: 24,
//         marginTop: 30,
//         marginBottom: 20
//     },
//     pinCodeContainer: {
//         width: 50,
//         height: 50,
//         borderWidth: 0,
//         borderColor: '#ccc',
//         borderRadius: 2,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     pinCodeText: {
//         fontSize: 18,
//         color: '#000',
//         textAlign: 'center',
//     },
//     focusStick: {
//         height: '80%',
//         borderWidth: 1,
//         borderColor: 'blue',
//         backgroundColor: 'green',
//         width: '100%',
//         marginVertical: 'auto'
//     },
//     activePinCodeContainer: {
//         borderWidth: 0,
//         borderColor: 'white',
//         backgroundColor: 'red',
//         borderRadius: 15
//     },
//     placeholderText: {
//         fontSize: 18,
//         color: '#ccc',
//     },
//     filledPinCodeContainer: {
//         borderColor: '#000',
//         backgroundColor: '#f0f0f0',
//     },
//     disabledPinCodeContainer: {
//         borderColor: '#ddd',
//         backgroundColor: '#f7f7f7',
//     },
// });

const styles = (type:'pin' | 'otp') => StyleSheet.create({
    containerOTP: {
        flexDirection: 'row',
        justifyContent: type === 'pin' ?'space-evenly' : 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
        marginTop: 30,
        marginBottom: 20,
    },
    pinCodeContainer: {
        width: type === 'pin' ? 20 : 50,  // Size 20 jika tipe pin
        height: type === 'pin' ? 20 : 50, // Size 20 jika tipe pin
        borderWidth: 1,
        borderColor: '#e0e0e0',  // Warna abu-abu muda
        borderRadius: type === 'pin' ? 100 : 5, // Border radius 100% jika tipe pin
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    pinCodeText: type === 'pin' ? {color: 'black'} : {  // Tidak menerapkan style jika tipe adalah 'pin'
        fontSize: 18,
        color: '#555',
        textAlign: 'center',
    },
    focusStick: {
        height: '80%',
        borderWidth: 1,
        borderColor: '#6c63ff',  // Warna biru ungu untuk fokus
        backgroundColor: '#c5cae9',  // Latar belakang biru muda untuk fokus
        width: '100%',
        marginVertical: 'auto',
    },
    activePinCodeContainer: {
        borderWidth: 1,
        borderColor: '#6c63ff',  // Warna biru ungu saat aktif
        backgroundColor: '#e8eaf6',  // Latar belakang biru lembut saat aktif
        borderRadius: type === 'pin' ? 100 : 5,
    },
    filledPinCodeContainer: {
        borderColor: '#b0b0b0',  // Warna abu-abu gelap saat terisi
        backgroundColor: type === 'pin' ? 'black':'#d6d6d6',  // Latar belakang abu-abu lebih gelap saat terisi
    },
    disabledPinCodeContainer: {
        borderColor: '#d3d3d3',  // Warna abu-abu saat disabled
        backgroundColor: '#f5f5f5',  // Latar belakang abu-abu terang saat disabled
    },
});



