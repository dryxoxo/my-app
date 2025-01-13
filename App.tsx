import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Background, Google, Logo } from './src/assets/icons/icons';
import React from 'react';
import ScreenTemplate from './src/components/template/ScreenTemplate';
import Backdrop from './src/components/atoms/Backdrop';
import AuthMessage from './src/components/moleculs/AuthMessage';
import Button from './src/components/atoms/Button';
import Input from './src/components/atoms/Input';
import AuthForm from './src/components/moleculs/AuthForm';
import AuthOrganism from './src/components/organism/AuthOrganism';

export default function App() {
  return (
    <AuthOrganism type='login' />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f8fa',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
