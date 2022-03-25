import {useState} from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import React from 'react'
import * as Fonts from 'expo-font'


export default function QuranAppText({children, _style, font, ...props}) {

    const [loaded, setLoad] = useState(false)

    async function useFont() {
        await Fonts.loadAsync({
            'ArabicFont': require('../assets/fonts/premium_font3.ttf')
        })
    }
    if(!loaded) {   
        useFont().then(() => {
            setLoad(true)
        })
    }


  return (
     <Text {...props}  style={[_style, style.container, loaded && {fontFamily: 'ArabicFont', fontWeight: '500'} ]}>{children}</Text>
  )
}

const style = StyleSheet.create({
    container: {
       
    }
})