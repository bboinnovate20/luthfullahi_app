import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native'

import React from 'react'
import AppText from '../components/AppText'
import SafeViewScreen from '../components/SafeViewScreen'
import { dua } from '../data/duas'
import HeaderOne from '../components/HeaderOne'
import colors from '../config/color'
import HeaderDetail from './HeaderDetail'
import { useNavigation } from '@react-navigation/native'

export default function ContentListings({data, name, headerName,isHeader, SubHeader, navigate, options}) {
    const navigation = useNavigation()

    return (
        <SafeViewScreen>
            <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({item})  => <View>
                <TouchableOpacity onPress={() => navigation.navigate(navigate, {...item, ...options})}>
                    <AppText _style={style.headlines}>{item[name]}</AppText>
                </TouchableOpacity>
            </View> }
            
            ListHeaderComponent={() =>  
                SubHeader ? (
                <>
                    <HeaderDetail includeImage={false} altName={headerName} />
                    <SubHeader />
                </>
                 ) :
                 <HeaderDetail includeImage={false} altName={headerName} />
                }
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