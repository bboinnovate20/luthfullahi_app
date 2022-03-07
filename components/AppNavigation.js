import { View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import AppText from './AppText'
import navigation from '../data/navigation'

export default function AppNavigation() {

  return (
  
       <View style={{width: '100%', padding: 20}}>
            <FlatList
                data={navigation}
                keyExtractor= {(item) => item.id.toString()}
                // horizontal={true}
                numColumns={3}
                renderItem= {({item}) => 
                      <TouchableOpacity style={{width: '33%'}}>
                        <View style={{justifyContent: 'center', flexDirection:'row', alignItems:'center'}}>
                           {item.icon}
                           <AppText _style={{paddingLeft: 10}}>{item.name}</AppText>
                        </View>   
                      </TouchableOpacity>
                      }
                />

      
    </View>
  )
}