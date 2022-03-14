import { Image, View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import React from 'react'
import { mainFeatures } from '../data/features'
import AppText from './AppText'
import AppButton from '../components/AppButton'
import colors from '../config/color'
import { useNavigation } from '@react-navigation/native'

export default function DashboardFeatures() {

    const navigation = useNavigation()

  return (
    
    <>
        <View style={style.container}>
            <FlatList
                data={mainFeatures}
                style={{paddingBottom: 10}}
                keyExtractor= {(item) => item.id.toString()}
                numColumns={4}
                renderItem= {({item}) => 
                <TouchableOpacity onPress={() => navigation.navigate(item.name)}>
                       <View style={{width:90, justifyContent: 'center', justifyContent: 'flex-start'}}>
                           <View style={{height:75, flexDirection:'row', justifyContent:'center', overflow:'hidden', borderRadius: 100, alignItems: 'center', width: "100%", heigh: "100%"}}>
                            {item.icon}
                           </View>
                           <AppText _style={{fontSize: 13, fontWeight: 'bold', textAlign: 'center'}}>{item.name}</AppText>
                       </View> 
                </TouchableOpacity>}
                ItemSeparatorComponent={() =>
                    <View style={{height:20}}></View>
                } 
                ListHeaderComponent={() =>
                    <View></View>
                } 
                />

                    <AppButton color='red' onPress={() => navigation.navigate('Subcription')}>
                        Subcribe for more features
                    </AppButton>            
        </View>

    </>
  )
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        borderBottomWidth: 1,
        paddingBottom: 10,
        borderBottomColor: '#0002',


    },
    feature: {
        paddingBottom: 50
  },

    buttons: {
        color: 'red'
    }
})