import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native'

import React from 'react'
import AppText from '../components/AppText'
import SafeViewScreen from '../components/SafeViewScreen'
import { dua } from '../data/duas'
import HeaderOne from '../components/HeaderOne'
import colors from '../config/color'
import ContentListings from '../components/ContentListings'
import { level } from '../data/fiqhu'

export default function AppFiqhu({navigation, route}) {
    return (
        <ContentListings
            data={level}
            headerName="Fiqhu"
            navigate="FiqhuLists"
            name='topic'
        />
    )
}
