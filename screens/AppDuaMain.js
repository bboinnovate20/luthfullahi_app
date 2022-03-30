import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native'

import React from 'react'
import AppText from '../components/AppText'
import SafeViewScreen from '../components/SafeViewScreen'


import Content from '../components/Content'
import { duaContent } from '../data/duas'

export default function AppDuaMain({navigation, route}) {
   
    function contentFind() {
        const find = duaContent.find((dua) => dua.id === route.params.id)

        return find.content
    }
   
    return (
        <>
        <Content data={contentFind()} 
                 headerName={route.params.content} 
                 imageInclude={false} 
                 duaContent={true} />
                
            
        </>

    )
}