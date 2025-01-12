import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Background, Google, Logo } from './src/assets/icons/icons';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ width: '100%', backgroundColor: '#2567E8' }}>
        <Background width={'100%'} />
      </View>
      <View style={{ paddingHorizontal: 24, position: 'absolute', top: 120, width: '100%' }}>
        <View style={{gap:12, marginBottom:32}}>
          <Text style={{ color: '#fff', fontSize: 40, textAlign: 'center', fontWeight:'bold' }}>Sign In to your Account</Text>
          <Text style={{ color: '#fff', fontSize: 18, textAlign: 'center' }}>Enter your email and password to log in</Text>
        </View>
        <View style={{ backgroundColor: '#fff', width: '100%', borderRadius: 10 }}>
          <View style={{ padding: 24, flexDirection: 'column', gap: 26 }}>
            <TouchableOpacity style={{ paddingVertical: 14, borderWidth: 1, borderColor: '#EFF0F6', borderRadius: 10 }}>
              <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', gap: '10' }}>
                <Google width={18} height={18} />
                <Text style={{ fontSize: 14, fontWeight: 'semibold' }}>Continue With Google</Text>
              </View>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignContent: 'center' }}>
              <View style={{ flex: 1, height: 1, borderWidth: 1, borderColor: '#e6eaec', marginVertical: 'auto' }} />
              <Text style={{ marginHorizontal: 16, color: '#6c7278' }}>Or Login With</Text>
              <View style={{ flex: 1, height: 1, borderWidth: 1, borderColor: '#e6eaec', marginVertical: 'auto' }} />
            </View>
            <View style={{ flexDirection: 'column', gap: 16 }}>
              <TextInput
                style={{
                  paddingHorizontal: 14,
                  paddingVertical: 12,
                  borderWidth: 1,
                  borderColor: '#EFF0F6',
                  borderRadius: 10,
                  padding: 10,
                }}
                placeholder="E-Mail"
                keyboardType="email-address"
              />
              <TextInput
                style={{
                  paddingHorizontal: 14,
                  paddingVertical: 12,
                  borderWidth: 1,
                  borderColor: '#EFF0F6',
                  borderRadius: 10,
                  padding: 10,
                }}
                placeholder="Password"
              />
              <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity style={{
                    width: 19,
                    height: 19,
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: 4,
                    marginRight: 10,
                  }} />
                  <Text style={{ color: '#6c7278' }}>Remember Me</Text>
                </View>
                <Text style={{ color: '#4D81E7' }}>Forgot Password</Text>
              </View>
            </View>
            <TouchableOpacity style={{ paddingVertical: 14, width: '100%', backgroundColor: '#1D61E7', borderRadius: 10 }}>
              <Text style={{ textAlign: 'center', color: '#FFFFFF' }}> Log In</Text>
            </TouchableOpacity>
            <Text style={{ textAlign: 'center', color: '#6c7278' }}>Dont have an account? <Text style={{ color: '#1D61E7' }}>Sign Up</Text></Text>
          </View>
        </View>
      </View>
    </View>
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
