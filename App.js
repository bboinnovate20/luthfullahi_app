import {useEffect, useState, useRef} from 'react'

import { View, Text, StyleSheet, Platform } from 'react-native'
import React from 'react'
import OctraMarketAds from './components/OctraMarketAds'

import { NavigationContainer } from '@react-navigation/native'
import _AppNavigation from './navigation/_AppNavigation'
import TabNavigation from './navigation/TabNavigation'
import MiscContext from './misc/context'
import getLocation from './api/location'

import AlertInfo from './components/AlertInfo'
import * as Location from 'expo-location'
import { addItem, addNotificationListener, getCurrentDate, getItem, getToken, notificationHandler, scheduleNotification } from './misc/misc'
import {useNetInfo} from '@react-native-community/netinfo'
import * as Notifications from 'expo-notifications'

export default function App(props) {

  const [isPermitted, setPermission] = useState(true)
  const [location, setLocation] = useState([])
  const [data, setData] = useState([])
  const netInfo = useNetInfo();
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  const notificationFun = async() => {
    const token = await getToken()
    if(token) {
       setExpoPushToken(token.data)
      notificationListener.current = Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification)
        // console.log(notification)
      })

      responseListener.current = Notifications.addNotificationResponseReceivedListener((response) => {
        // console.log(response)

      })
    }

  
      await Notifications.setNotificationChannelAsync("adhan", {
        name: "Adhan notification",
        importance: Notifications.AndroidImportance.HIGH,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF0000",
        sound: 'adhan.wav',
      });

    // await scheduleNotification()
    await Notifications.scheduleNotificationAsync({
      content: {
          title: "Adhan Asri Prayer📬",
          body: 'Mogrib Prayer  is on',
          // data: { data: 'my data' },
          sound: 'adhan.wav',
      },
        trigger: { 
            seconds: 1,
            channelId: "adhan",    
      },
    });
  }

  useEffect(() => {
      init()
      notificationHandler()
      notificationFun()

      return () => {
        Notifications.removeNotificationSubscription(
          notificationListener.current
        );
        Notifications.removeNotificationSubscription(responseListener.current);
      };
  }, [])
  
  async function init() {

      const result = await askPermission()

      if(result){
        if(netInfo.isInternetReachable){
          await getLocationData()
          return;
        }
        const timings = await getItem('-timing');
        if(timings) {
          setData(timings)
        }
      }
  }    
    
  async function getLocationData() {
      const [gregorian, hijri] = getCurrentDate()
      const _hijri = hijri.split('/')
      const result = await getLocation(location.coords, +_hijri[1], _hijri[0])

      if(result.ok) {
        const allMonth = result.data
        const day = +_hijri[2]
        const inMonth = allMonth.data

        inMonth.forEach(async (element) => {
          if(+element['date']['hijri']['day'] == day){
            await addItem('timing', element['timings'])
            setData(element['timings'])
          }
        });
      }
      return;
  }

  async function askPermission() {
    let reqLocation = await  Location.requestForegroundPermissionsAsync()
    let reqNotification = await Notifications.requestPermissionsAsync()
    
    if(reqLocation.status !== 'granted' && reqNotification.status !== 'granted') {
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