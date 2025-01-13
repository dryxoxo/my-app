import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { LightTheme } from '../../theme/theme';


interface ScreenTemplateProps {
    children: React.ReactNode
}

const ScreenTemplate: React.FC<ScreenTemplateProps> = ({ children }) => {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            {children}
        </View>
)
}

export default ScreenTemplate

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: LightTheme.primary
    },
    
    container: {
        flex: 1,
        backgroundColor: LightTheme.background,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
});