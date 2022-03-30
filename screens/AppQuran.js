import { View, Text, StyleSheet, FlatList, VirtualizedList, ImageBackground, Image} from 'react-native'

import React, { useEffect, useState,useMemo }  from 'react'
import AppText from '../components/AppText'
import SafeViewScreen from '../components/SafeViewScreen'
import {eachSurah} from '../data/eachSurah'
import colors from '../config/color'
import allSurah from '../data/allSurah'


import HeaderOne from '../components/HeaderOne'
import { TouchableOpacity } from 'react-native-gesture-handler'

import ActivityIndicator from '../components/ActivityIndicator'
import AppQuranListing from '../components/AppQuranListing'

import QuranAppText from '../components/QuranAppText'

const AppQuran = React.memo(({navigation}) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        loadQuran();

        return setData([]);
    }, [])
    
    async function loadQuran() {    
        const result = allSurah()

        if(result) {
            setTimeout(() => {
                setData(result)
                setLoading(false)
            }, 500)
        }
    }
    return (
        <SafeViewScreen>
            {
                loading ? <ActivityIndicator visible={loading} /> :
           
            <VirtualizedList
            data={data}
            // initialNumToRender={}
            getItem={(data, index) => ({
                surah_id: data[index].id,
                surah_name: data[index].transliteration,
                surah_verse_count: data[index].total_verses,
                surah_name_arabic: data[index].name
            })}
            getItemCount={(data) => data.length}
            keyExtractor= {(item) =>item.surah_id}
            
            renderItem= {({item}) => 
                <AppQuranListing no={item.surah_id} surahInEnglish={item.surah_name} verse={item.surah_verse_count} surahInArabic={item.surah_name_arabic}/>
                //  renderTemplate(item.surah_id, item.surah_name, item.surah_verse_count, item.surah_name_arabic)
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
           

            }
        </SafeViewScreen>
    )

})

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


export default AppQuran;