import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
// import AppWelcomeScreen from './//screens/AppWelcomeScreen'
import AppDashBoard from './screens/AppDashBoard'
import OctraMarketAds from './components/OctraMarketAds'
import AppNavigation from './components/AppNavigation'
import AppQuran from './screens/AppQuran'
import AppQuranDetails from './screens/AppQuranDetail'
import AppShare from './screens/AppShare'
import AppHadith from './screens/AppHadtih'
import { NavigationContainer } from '@react-navigation/native'
import _AppNavigation from './navigation/_AppNavigation'
import TabNavigation from './navigation/TabNavigation'

export default function App(props) {
  return (
    // <AppWelcomeScreen />
    <>
      <NavigationContainer>
          {/* <_AppNavigation /> */}
          <TabNavigation/>
      </NavigationContainer>
      <OctraMarketAds />
    </>
   
    // // <>
    // //   <>
    // //     <AppDashBoard />
    //     {/* <AppQuran /> */}
    //     {/* <AppQuranDetails /> */}
    //     {/* <AppShare/> */}
    //     {/* <AppHadith /> */}
    //   </>
    //   // <AppNavigation />
    // </>
  )
}