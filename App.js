import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
// import AppWelcomeScreen from './//screens/AppWelcomeScreen'
import AppDashBoard from './screens/AppDashBoard'
import OctraMarketAds from './components/OctraMarketAds'
import AppNavigation from './components/AppNavigation'
import AppQuran from './screens/AppQuran'
import AppQuranDetails from './screens/AppQuranDetail'
import AppShare from './screens/AppShare'

export default function App(props) {
  return (
    // <AppWelcomeScreen />
    <>
      <>
        {/* <AppDashBoard /> */}
        {/* <AppQuran /> */}
        {/* <AppQuranDetails /> */}
        <AppShare/>
        
      </>
      <OctraMarketAds />
      <AppNavigation />
    </>
  )
}