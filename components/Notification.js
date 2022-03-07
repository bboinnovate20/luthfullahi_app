import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React from 'react'
import AppText from './AppText'
import notification from '../data/notification'
import colors from '../config/color'
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace'
import AppButton from './AppButton'

export default function Notification() {
  function renderTemplate(title, content, date) {
    return (
      <View style={style.container}>
        <View style={style.date}>
          <AppText _style={{color: '#fff'}}>{date.day}</AppText>
          <AppText _style={{color: '#fff', fontSize:15}}>{date.month}</AppText>
        </View>
        <View  style={style.content}>
          <AppText _style={{fontSize:16, fontWeight: 'bold' }}>{title}</AppText>
          <AppText numberOfLines={1}  >{content}</AppText>
        </View>
        <View style={style.next}>
          <Image source={require('../assets/icons/arrow-front.png')}></Image>
        </View>
      </View>
    )
  }

    const style = StyleSheet.create({
      
      content: {
          flex: 1
      },

      container: {
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10
      },  

      date: {
          backgroundColor: colors.tertiaryColor,
          padding: 10,
          paddingHorizontal: 15,
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 10,
          borderRadius: 5,
          
      },

      next: {
        padding: 10,
        paddingLeft: 15
      }
      

    })

  return (
    <>
        <View>
            
            <FlatList
                data={notification}
                keyExtractor= {(item) => item.id.toString()}
                
                renderItem= {({item}) => 
                  renderTemplate(item.title, item.content, item.date)        
                }
                ItemSeparatorComponent={() =>
                    <View style={{width:12}}></View>
                } 
                ListHeaderComponent={() => 
                  <View style={mainStyle.headerNotication}>
                    <Image source={require('../assets/icons/notification.png')}></Image>
                    <AppText _style={{fontSize: 18, fontWeight: 'bold'}}>Important Notification</AppText>
                    <AppText _style={{color: 'gray', fontSize: 18}}>2022</AppText>
                  </View>
                }
                />      
        </View>
        <AppButton _style={{alignSelf: 'center'}} >See more notification</AppButton>     
    </>
  )
}

const mainStyle = StyleSheet.create({
    headerNotication: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      alignItems: 'center',
      marginTop: 10,
      
    }  
})