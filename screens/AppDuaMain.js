import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native'

import React from 'react'
import AppText from '../components/AppText'
import SafeViewScreen from '../components/SafeViewScreen'


import Content from '../components/Content'
import { duaContent } from '../data/duas'

export default function AppDuaMain({navigation, route}) {
   
   
    return (
        
           <Content data={duaContent[route.params.id]} 
                    headerName={route.params.name} 
                    imageInclude={false} 
            />

    )
}