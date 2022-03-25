import react from "react";

import { createStackNavigator } from "@react-navigation/stack";
import AppShare from "../screens/AppShare";
import AppDashBoard from "../screens/AppDashBoard";
import {CalenderNavigation, Donate, Dua, FiqhuNavigation, HadithNavigation, LuthResources, Notification, PrayerTime, QiblaNavigation, QuranNavigation} from '../navigation/FeaturesNavigation'
import AppTesbih from "../screens/AppTesbih";
import AppAboutDonation from "../screens/AppAboutDonation";
import AppSubcriptionPage from "../screens/AppSubcriptionPage";
import AppNotificationContent from "../screens/AppNotificationContent";
import AppOtherNotification from "../screens/AppOtherNotification";



export default function AppNavigation () {
    
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Dashboard" component={AppDashBoard}/>
            <Stack.Screen name="Quran" component={QuranNavigation}/>
            <Stack.Screen name="Hadith" component={HadithNavigation}/>
            <Stack.Screen name="Fiqhu" component={FiqhuNavigation}/>
            <Stack.Screen name="Dua" component={Dua}/>
            <Stack.Screen name="PrayerTime" component={PrayerTime}/>
            <Stack.Screen name="ETesbih" component={AppTesbih}/>
            <Stack.Screen name="Calendar" component={CalenderNavigation}/>
            <Stack.Screen name="Qibla" component={QiblaNavigation}/>
            <Stack.Screen name="MoreResources" component={LuthResources}/>

            <Stack.Screen name="AboutDonation" component={AppAboutDonation}/>
            <Stack.Screen name="Subcription" component={AppSubcriptionPage}/>
            <Stack.Screen name="Notification" component={AppNotificationContent}/>
            <Stack.Screen name="OtherNotification" component={Notification}/>

            <Stack.Screen name="Share" component={AppShare}/>
           
        </Stack.Navigator>
    )
}

