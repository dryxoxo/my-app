import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OTPInput from '../../components/moleculs/auth/OTPInput'
import Button from '../../components/atoms/Button'

const PinPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Create Your Pin</Text>
          <Text style={styles.subtitle}>For security purposes, please create your pin</Text>
        </View>
        <View>
          <OTPInput type='pin' />
        </View>
        <View style={styles.forgetPinContainer}>
          <Text style={styles.forgetPinText}>Forget PIN?</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button text={'Verify'} variant={'primary'} />
        </View>
      </View>
    </View>
  )
}

export default PinPage

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    paddingHorizontal: 26,
    alignItems: 'center',
  },
  innerContainer: {
    marginTop: 40,
  },
  textContainer: {
    gap: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#6c63ff',
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
  },
  forgetPinContainer: {
    flex: 1,
    marginTop: 10
  },
  forgetPinText: {
    textAlign: 'center',
  },
  buttonContainer: {
    marginBottom: 60,
  },
})
