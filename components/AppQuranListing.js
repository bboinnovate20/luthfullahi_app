import React, { Component, PureComponent } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native'
import AppText from './AppText';
import colors from '../config/color'
import { useNavigation } from '@react-navigation/native';
import QuranAppText from './QuranAppText';

export default function AppQuranListing({no, surahInArabic, surahInEnglish, verse }) {
    const navigation = useNavigation();


    return (
            <TouchableOpacity onPress={() => navigation.navigate('QuranDetails', {id:no})}>
                <View style={style.container}>
                        <View >
                            <ImageBackground source={require('../assets/icons/verse_indicator.png')} resizeMode='contain'
                                style={{width: 50, flex: 1, justifyContent: 'center', alignItems: 'center'}}
                            >
                                <AppText _style={{fontSize: 20, justifyContent: 'center'}}>{no}</AppText>
                            </ImageBackground>
    
                        </View>
                        <View style={{flexBasis: '45%'}}>
                            <AppText _style={{fontSize: 23, fontWeight: 'bold'}}>{surahInEnglish}</AppText>
                            <AppText>{verse} - VERSES</AppText>
                        </View>
                        <View style={{flexBasis: '35%', alignItems: 'flex-end'}}>
                            <QuranAppText numberOfLines={1} _style={style.arabic}>{surahInArabic}</QuranAppText>
                        </View>
                    </View>
            </TouchableOpacity>
            )
    
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 18,
        justifyContent: 'space-between'
    },

    header: {
        backgroundColor: colors.tertiaryColor, 
        width: "110%", 
        marginTop:-25,
        paddingTop: 15, 
        marginBottom:10,  
        height:100, borderRadius: 100, 
        flexDirection: 'row', 
        marginLeft: '-5%', 
        justifyContent: 'space-around', 
        alignItems: 'center'

    },

    arabic: {
        fontSize: 29
    }   
})