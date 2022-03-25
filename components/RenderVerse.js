import {useState,useRef, forwardRef}  from 'react'

import { useNavigation } from '@react-navigation/native'
import {View, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native'
import QuranAppText from './QuranAppText'
import * as icons from '../assets/app_asset/icon/icon'
import colors from '../config/color'
import AppText from './AppText'
import * as FileSystem from 'expo-file-system'
import {  } from 'react/cjs/react.production.min'

const RenderVerse = forwardRef(({content, id, english, transliteration, fontSize, icon, onPress, _style, layout}, ref) => {
    const navigation = useNavigation()
   

    return (
        <View ref={ref} style={[style.container, _style]}
        >
                    <View style={{flexBasis: '5%', justifyContent: 'space-between', height: 60, alignItems: 'center', marginTop: 20 }}>
                       <TouchableOpacity onPress={() => {
                           onPress()    
                    }}>{icons[icon]}</TouchableOpacity> 
                       <TouchableOpacity onPress={() => {navigation.navigate('Share')}}>{icons.share}</TouchableOpacity>   
                    </View>
                    <View style={{flexBasis: '90%'}}>
                        <View style={style.arabic}>
                            <QuranAppText _style={{fontSize: fontSize[0], marginBottom: 10, lineHeight: 66}}>{content}
                            <View>
                                <ImageBackground source={require('../assets/icons/verse_indicator.png')} resizeMode='contain'
                                    style={{ width: 40, height:40, justifyContent: 'center', alignItems: 'center', marginTop: 15}}
                                >
                                    <AppText _style={{fontSize: 20}}>{id}</AppText>
                                </ImageBackground>
                            </View>
                            </QuranAppText>
                        </View>
                        <View>
                            <AppText _style={{fontSize: fontSize[1], color: colors.darkSecondaryColor, marginBottom:10}}>{transliteration}</AppText>
                            <AppText _style={{fontSize: fontSize[1], marginBottom: 10}}>{english}</AppText>
                        </View>
                    </View>
                </View>
    )
})


const style = StyleSheet.create({
    container : {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    arabic: {
        flexDirection: 'row-reverse',
        // alignItems: 'flex-end',

        // justifyContent: 'flex-end'
        
    }
})

export default RenderVerse;