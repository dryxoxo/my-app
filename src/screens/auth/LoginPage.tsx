import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthOrganism from '../../components/organism/auth/AuthOrganism'


const LoginPage = () => {
  return (
    <AuthOrganism type='login' />
  )
}

export default LoginPage

const styles = StyleSheet.create({})