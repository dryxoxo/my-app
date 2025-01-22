import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import OTPInput from '../../components/moleculs/auth/OTPInput'
import Button from '../../components/atoms/Button'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { createPIN } from '../../api/userRegister'

const PinPage = () => {

  const [pin, setpin] = useState<string>('')
  const uniqueId = useSelector((state: RootState) => state.auth.unique_id);


  const handleCreatePin = async ()=> {
    console.log({pin})
    const result = await createPIN(pin, uniqueId as string)
    console.log({result})
    const accessToken = result.data.access_token
    const refreshToken = result.data.refresh_token
    const tokenType = result.data.token_type

    Alert.alert(`Token: ${accessToken}\nRefresh Token: ${refreshToken}\nToken Type: ${tokenType}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Create Your Pin</Text>
          <Text style={styles.subtitle}>For security purposes, please create your pin</Text>
        </View>
        <View>
          <OTPInput type='pin' onTextChange={setpin}/>
        </View>
        <View style={styles.forgetPinContainer}>
          <Text style={styles.forgetPinText}>Forget PIN?</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button text={'Verify'} variant={'primary'} onPress={handleCreatePin}/>
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
