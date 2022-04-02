import { View, Text, StyleSheet, Linking } from 'react-native'
import React from 'react'
import OctraMarketAds from './components/OctraMarketAds'

import { NavigationContainer } from '@react-navigation/native'
import _AppNavigation from './navigation/_AppNavigation'
import TabNavigation from './navigation/TabNavigation'
import MiscContext from './misc/context'
import getLocation from './api/location'

import {useEffect, useState} from 'react'
import AlertInfo from './components/AlertInfo'
import * as Location from 'expo-location'
import { getCurrentDate } from './misc/misc'

export default function App(props) {

  const [isPermitted, setPermission] = useState(true)
  const [location, setLocation] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
      init()
  }, [])
  
  async function init() {
      const result = await askPermission()
      if(result) {
        await getLocationData()
      }
  }    
    
  async function getLocationData() {
      const [gregorian, hijri] = getCurrentDate()
      const _hijri = hijri.split('/')
      const result = await getLocation(location.coords, +_hijri[1], _hijri[0])

      if(result.ok) {
        const allMonth = result.data
        const year = +_hijri[0]
        const _month = +_hijri[1]
        const day = +_hijri[2]
        const _allMonth = {...allMonth}
        const inMonth = _allMonth.data

        inMonth.forEach(element => {
          if(+element['date']['hijri']['day'] == day){
            setData(element['timings'])
          }
        });
      }
      return;
  }

  async function askPermission() {
    let reqLocation = await  Location.requestForegroundPermissionsAsync()

    if(reqLocation.status !== 'granted') {
      setPermission(false)
      return
    }
      
    setPermission(true)
    const _location = await Location.getCurrentPositionAsync({})
    
    if(_location) {
        setLocation(_location)
        return true
    }
  }

  function askAgain() {
    return location.canAskAgain = true
  }
  

  return (
    
    !isPermitted ? <AlertInfo onPress={() => {
        askAgain()
        Linking.openSettings()
        }} /> :
        <MiscContext.Provider value={{location, data}}>
          <NavigationContainer>
              <TabNavigation/>
          </NavigationContainer>
          <OctraMarketAds />
        </MiscContext.Provider>
  )
}