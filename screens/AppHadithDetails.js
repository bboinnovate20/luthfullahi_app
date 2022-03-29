import { useState, useEffect } from 'react'

import { View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native'
import { allHadith } from '../data/hadithDetails'
import HeaderDetail from '../components/HeaderDetail'
import { hadith } from '../data/hadithsCollection'
import AppText from '../components/AppText'
import colors  from '../config/color'
import hadithsCollection from '../data/hadithData'
// import {Calendar} from 'react-native-calendars'


export default function AppHadithDetails({navigation, route}) {
    
    const [getHadith, setHadiths] = useState([])

    useEffect(() => {
        const hadith = hadithsCollection.find((hadith) => hadith.id === route.params.id)
        setHadiths(hadith)
        
    }, [])

    return (
       <FlatList 
            data={getHadith.books}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
            <TouchableOpacity onPress={() => navigation.navigate('HadithMainContent', {id: item.id, name: item.name, collection: getHadith.collection})}>
                    <AppText _style={style.hadithListing}>{item.name} </AppText>
            </TouchableOpacity>
                )}
                ListHeaderComponent={() => (
                    <HeaderDetail source={getHadith.arabic} />
                )}
       />
    )
}


const style = StyleSheet.create({
    hadithListing: {
        padding: 15,
        fontSize: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#FABC02',
    }    
})