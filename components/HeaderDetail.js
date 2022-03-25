import React from 'react'
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native'
import * as icons from '../assets/app_asset/icon/icon'
import AppText from './AppText'
import colors from '../config/color'
import { useNavigation } from '@react-navigation/native'

export default function HeaderDetail({topHeader, source, nav, includeImage = true, altName}) {
    const navigation = useNavigation()

    return (
        <View>
                        <AppText _style={{textAlign: 'center', fontSize: 22, marginBottom: -5}}>{topHeader}</AppText>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center'}}>
                            <TouchableOpacity onPress={() => nav ? navigation.navigate(nav) : navigation.goBack()}>{icons.back}</TouchableOpacity>
                            <View style=
                                    {{backgroundColor: colors.tertiaryColor, 
                                    flexBasis: '85%', alignItems: 'center',
                                    paddingVertical: 10
                                    }}>
                                        {includeImage ? <Image source={source} resizeMode='contain' style={{width: '80%', height: 45}}/> : <AppText _style={style.text}>{altName}</AppText>}
                            </View>
                        </View>
        </View>
    )
}

const style = StyleSheet.create({
    text: {
        color: "#000",
        fontSize: 27,
        padding: 10,
    }
})