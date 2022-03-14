import { View, Text, StyleSheet, FlatList, ImageBackground, TouchableOpacity, Image} from 'react-native'

import React, { useState } from 'react'
import AppText from '../components/AppText'
import SafeViewScreen from '../components/SafeViewScreen'
import {eachSurah} from '../data/eachSurah'
import colors from '../config/color'
import * as icons from '../assets/app_asset/icon/icon'
import { verses } from '../data/eachVerse'



export default function AppQuranDetails({route, navigation}) {

    const [defaultSize, reset] = useState([28, 18])

    function renderVerse(id, content, english, transliteration) {
        return (
            <View style={style.container}>
                    <View style={{flexBasis: '5%', justifyContent: 'space-between', height: 60, alignItems: 'center', marginTop: 20 }}>
                       <TouchableOpacity>{icons.play}</TouchableOpacity> 
                       <TouchableOpacity onPress={() => {navigation.navigate('Share')}}>{icons.share}</TouchableOpacity>   
                    </View>
                    <View style={{flexBasis: '90%'}}>
                        <View style={style.arabic}>
                            <AppText _style={{fontSize: defaultSize[0], fontWeight: 'bold', marginBottom: 10}}>{content}</AppText>
                            <ImageBackground source={require('../assets/icons/verse_indicator.png')} resizeMode='contain'
                                style={{ width: 50, height: 35, justifyContent: 'center', alignItems: 'center'}}
                            >
                                <AppText _style={{fontSize: 20}}>{id}</AppText>
                            </ImageBackground>
                            
                        </View>
                        <View>
                            <AppText _style={{fontSize: defaultSize[1], marginBottom: 10}}>{english}</AppText>
                            <AppText _style={{fontSize: defaultSize[1], color: colors.darkSecondaryColor}}>{transliteration}</AppText>
                        </View>
                    </View>
                </View>
        )
    }

    //temporary function

    function findSurah(id) {
        const surah = eachSurah.find((each) => each.id === id)
        return surah.surahInEnglish
    }   


    return (
        <SafeViewScreen >
            <FlatList
                data={verses}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => 
                  renderVerse(item.aid, item.content, item.english, item.transliteration)  
                }
                ItemSeparatorComponent={() => 
                    <View style={{flex: 1, backgroundColor: '#70707020', width: '100%', height:2}}></View>
                }

                ListHeaderComponent={() => (
                    <View>
                        <AppText _style={{textAlign: 'center', fontSize: 22, marginBottom: -5}}>Surat-l-{findSurah(route.params.id)}</AppText>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center'}}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>{icons.back}</TouchableOpacity>
                            <View style=
                                    {{backgroundColor: colors.tertiaryColor, 
                                    flexBasis: '85%', alignItems: 'center',
                                    paddingVertical: 10
                                    }}>
                                <Image source={require('../assets/icons/bismillah.png')} resizeMode='contain' style={{width: '80%', height: 45}}/>
                            </View>
                        </View>
                    </View>
                )}
            />

        </SafeViewScreen>
    )

}

const style = StyleSheet.create({
    container : {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    arabic: {
        flexDirection: 'row-reverse',
        alignItems: 'center'
    }
})
