import { View, Text, StyleSheet, Platform } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'

export default function AppText({children, _style, ...props}) {
    const [loading] = useFonts({
        OpenSan: require('../assets/fonts/OpenSans.ttf')
    })

    if(!loading) return null

  return (
     <Text {...props} style={[_style, style.container]}>{children}</Text>
  )
}

const style = StyleSheet.create({
    container: {
        fontFamily: 'OpenSan'
    }
})