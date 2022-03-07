import { View, Text, StyleSheet, FlatList, ImageBackground, Image} from 'react-native'

import React from 'react'
import AppText from '../components/AppText'
import SafeViewScreen from '../components/SafeViewScreen'
import {eachSurah} from '../data/eachSurah'
import colors from '../config/color'

import HeaderOne from '../components/HeaderOne'


export default function AppQuran(props) {

    function renderTemplate(no, surahInEnglish, verse, surahInArabic) {
        return (<View style={style.container}>
                <View style={{justifyContent: 'center'}}>
                    <ImageBackground source={require('../assets/icons/verse_indicator.png')} resizeMode='contain'
                        style={{width: 50, height: 50, flex: 1, justifyContent: 'center', alignItems: 'center'}}
                    >
                        <AppText _style={{fontSize: 20}}>{no}</AppText>
                    </ImageBackground>

                </View>
                <View style={{flexBasis: '30%'}}>
                    <AppText _style={{fontSize: 20, fontWeight: 'bold'}}>{surahInEnglish}</AppText>
                    <AppText>{verse} - VERSES</AppText>
                </View>
                <View style={{flexBasis: '40%', alignItems: 'flex-end'}}>
                    <AppText>{surahInArabic}</AppText>
                </View>
            </View>)
    }
    return (
        <SafeViewScreen>
            <FlatList
            data={eachSurah}
            keyExtractor= {(item) => item.id.toString()}
            
            renderItem= {({item}) => 
               renderTemplate(item.id, item.surahInEnglish, item.verses, item.surahInArabic)
            }
            ItemSeparatorComponent={() =>
                <View style={{width:12}}></View>
            } 
            ListHeaderComponent={() => 
                // <View style={style.header}>
                //         <AppText _style={{color: "#000", fontSize: 30, fontWeight: 'bold'}}>Al-Qur'an</AppText>
                //         <Image source={require('../assets/icons/arabictext.png')} style={{width: 100}} resizeMode='contain'></Image>
                // </View>
                <HeaderOne left="Al-Qur'an" right={require("../assets/icons/arabictext.png")}/>
            }
            />      
           

            
        </SafeViewScreen>
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

    }
})