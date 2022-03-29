import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native'

import React from 'react'
import AppText from '../components/AppText'
import SafeViewScreen from '../components/SafeViewScreen'
import {eachSurah} from '../data/eachSurah'
import colors from '../config/color'

import HeaderOne from '../components/HeaderOne'
import { hadith } from '../data/hadithsCollection'
import hadithsCollection from '../data/hadithData'


export default function AppHadith({navigation}) {
    return (
        <SafeViewScreen>
            <HeaderOne left="Hadith" right={require('../')}/>
            <FlatList
                style={{padding: 20}}
                data={hadithsCollection}
                keyExtractor={(item)=> item.id}
                numColumns={2}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate("HadithDetails", {id: item.id})}>
                        <Image source={item.source} style={{margin:20}} resizeMode='contain' />
                    </TouchableOpacity>
                )}
               
            >

            </FlatList>

        </SafeViewScreen>
    )
}