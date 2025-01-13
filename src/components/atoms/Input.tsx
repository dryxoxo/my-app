import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'


interface InputProps {
  type: 'email-address' | 'numeric' | 'default';
  placeholder: string
}

const Input: React.FC<InputProps> = ({type, placeholder}) => {
  return (
    <TextInput
      style={{
        paddingHorizontal: 14,
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: '#EFF0F6',
        borderRadius: 10,
        padding: 10,
      }}
      placeholder={placeholder}
      keyboardType={type}
    />
  )
}

export default Input

const styles = StyleSheet.create({})