import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import AppText from './AppText'
export default function OctraMarketAds() {
  return (
    <View style={style.container}>
      <AppText _style={{color: '#fff'}}>OctraMarketAds</AppText>
    </View>
  )
  }

  const style = StyleSheet.create({
    container: {
        backgroundColor: 'orange',
        alignItems: 'center',
        padding: 20
    }
  })