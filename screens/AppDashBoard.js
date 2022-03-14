import { View, Text, StyleSheet, Image, Animated,FlatList} from 'react-native'
import React, { useRef } from 'react'
import AppText from '../components/AppText'
import SafeViewScreen from '../components/SafeViewScreen'
import colors from '../config/color'
import DashboardFeatures from '../components/DashboardFeatures'
import Notification from '../components/Notification'
// import { ScrollView } from 'react-native-virtualized-view'
import * as icon from '../assets/app_asset/icon/icon'



export default function AppDashBoard() {
  const scroll = useRef(new Animated.Value(0))

  const Item = [
    {
      id: 1,
      item: <DashboardFeatures />
    },
    {
      id: 2,
      item:  <Notification/>
    }
  ]

  return (
    <>
    
    
      <FlatList style={style.body}
      data={Item}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => item.item}
      ListHeaderComponent={() => (
        <View style={{marginBottom: 50}}>   
          <Image style={style.dashboard} source={require('../assets/app_asset/dashboard.png')}></Image>
          
            <View style={[style.header]}>
              <View>
                <AppText _style={style.dateText}>Thursday, 24 February</AppText>
                <AppText _style={[style.dateText, { 
                  backgroundColor: colors.secondaryColor,
                  padding: 6,
                  borderRadius: 8,
                  color: '#000'
                  }]}>23 Rajab 1442 AH</AppText>
              </View>
              <View style={{flexDirection: 'row', paddingRight: 10, alignItems: 'center'}}>
                <View style={{width:50, height: 50, marginRight: 20}}>
                  <Image source={require('../assets/icons/premium.png')}></Image>
                </View>
                <View style={{}}>
                  {icon.Settings}
                </View>
              </View>
            </View>
              <View style={{justifyContent: 'center', marginTop: -10 }}>
                <AppText _style={[style.headerTime, {fontSize: 28, fontWeight: 'bold'}]}>Dhur</AppText>
                <AppText _style={[style.headerTime, {fontSize: 50}]}>1:00 
                  <AppText _style={{fontSize: 30}}>pm</AppText>
                  </AppText>
              </View>
          </View>
      )}
      />
            
          
        


      </>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },

  dashboard: {
    position: 'absolute',
    top: -70,
    width: '100%'

  },
  dateText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14.5
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    paddingTop: 40,
  },

  headerTime: {
    color: '#fff', textAlign: 'center',
    marginBottom: -15
  }
})