import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native'

import React from 'react'
import AppText from '../components/AppText'
import SafeViewScreen from '../components/SafeViewScreen'
import { dua } from '../data/duas'
import HeaderOne from '../components/HeaderOne'
import colors from '../config/color'


export default function AppDua({navigation, route}) {
    return (
        <SafeViewScreen>

            <FlatList
            data={dua}
            keyExtractor={(item) => item.id}
            renderItem={({item})  => <View>
                <TouchableOpacity onPress={() => navigation.navigate('DuaListings', {listings: item.listing, name: item.name, id: item.id})}>
                    <AppText _style={style.headlines}>{item.name}</AppText>
                </TouchableOpacity>
            </View> }
            
            ListHeaderComponent={() => <HeaderOne left="Dua" />}
            />
            </SafeViewScreen>
    )
}


const style = StyleSheet.create({
    headlines: {
        backgroundColor: colors.primaryColor,
        margin: 13,
        padding: 15,
        paddingVertical: 20,
        borderRadius: 10,
        color: '#fff',
        fontSize: 21
    }
})