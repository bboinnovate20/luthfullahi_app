import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../config/color'

export default function AppButton({children,_text, _style, ...props}) {

  return (
    <View style={[_style, {padding: 8, backgroundColor:colors.primaryColor, marginVertical:10, borderRadius:8, width:"90%"}]} >
          <TouchableOpacity>
          <Text {...props} style={[_text, {color: "#fff", textAlign: 'center', fontSize: 18}]} >{children}</Text>
         </TouchableOpacity>
        </View> 
  ) }

const style = StyleSheet.create({

})
