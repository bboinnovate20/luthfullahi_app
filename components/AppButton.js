import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../config/color'

export default function AppButton({children,_text, _style, color, onPress,...props}) {

  return (
    <View style={[_style, {padding: 8, backgroundColor: color? color : colors.primaryColor, marginVertical:10, borderRadius:8, width:"90%"}]} >
          <TouchableOpacity onPress={onPress}>
          <Text {...props} style={[ {color: "#fff", textAlign: 'center', fontSize: 20}, _text]} >{children}</Text>
         </TouchableOpacity>
        </View> 
  ) }

const style = StyleSheet.create({

})
