import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import  Constants  from 'expo-constants'


export default function SafeViewScreen(props) {
  
  return (
    <SafeAreaView style={[style.container,   props.style]}>
        {props.children}
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
    container: {
        flex: 1,      
        paddingTop: Constants.statusBarHeight
    }
})