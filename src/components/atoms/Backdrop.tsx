import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Background } from '../../assets/icons/icons'
import { LightTheme } from '../../theme/theme'

const Backdrop = () => {
  return (
      <View style={{ width: '100%', backgroundColor: '#2567E8' }}>
        <Background width={'100%'} />
      </View>
  )
}

export default Backdrop

const styles = StyleSheet.create({
    container: {
        width:'100%',
        backgroundColor: LightTheme.primary
    }
})