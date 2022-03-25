import react from "react";

 import { createStackNavigator } from "@react-navigation/stack";
import AppHadith from "../screens/AppHadtih";
import AppQuran from "../screens/AppQuran";
import AppQuranDetails from "../screens/AppQuranDetail";
import AppHadithDetails from "../screens/AppHadithDetails";
import AppHadithMainContent from "../screens/AppHadithMaintContent";
import AppDua from "../screens/AppDua";
import AppDuaMain from "../screens/AppDuaMain";
import AppDuaListings from "../screens/AppDuaListings";
import AppFiqhu from "../screens/AppFiqhu";
import AppFiqhuListings from "../screens/AppFiqhuListings";
import AppFiqhuContent from "../screens/AppFiqhuContent";
import AppPrayerTime from "../screens/AppPrayerTime";
import AppTesbih from "../screens/AppTesbih";
import AppCalendar from "../screens/AppCalendar";
import AppQibla from "../screens/AppQibla";
import AppLuthResources from "../screens/AppLuthResource";
import AppAboutDonation from "../screens/AppAboutDonation";
import AppDonate from "../screens/AppDonate";
import AppDonationPage from "../screens/AppDonationPage";
import AppNotificationContent from "../screens/AppNotificationContent";
import AppOtherNotification from "../screens/AppOtherNotification";

 const Stack = createStackNavigator();
 
 export function QuranNavigation () {
     
 
     return (
         <Stack.Navigator screenOptions={{
             headerShown: false
         }}>
             <Stack.Screen name="QuranMain" component={AppQuran}/>
             <Stack.Screen name="QuranDetails" component={AppQuranDetails} />
         </Stack.Navigator>
     )
 }
 
 export function HadithNavigation () {
     
    // const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="HadithMain" component={AppHadith}/>
            <Stack.Screen name="HadithDetails" component={AppHadithDetails} />
            <Stack.Screen name="HadithMainContent" component={AppHadithMainContent}/>
        </Stack.Navigator>
    )
}

export function FiqhuNavigation () {
     
    // const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="FiqhuMain" component={AppFiqhu}/>
            <Stack.Screen name="FiqhuLists" 
            options={({route}) => {
                
            }}
            
            component={AppFiqhuListings}/>
            <Stack.Screen name="FiqhuContent" component={AppFiqhuContent}/>
        </Stack.Navigator>
    )
}

export function CalenderNavigation() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="CalendarMain" component={AppCalendar}/>
        </Stack.Navigator>
    )
}

export function QiblaNavigation() {

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="QiblaMain" component={AppQibla}/>
        </Stack.Navigator>
    )
}

export function ETesbi() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="ETesbih" component={AppTesbih}/>
          
        </Stack.Navigator>
    )
}

export function Dua() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="DuaMain" component={AppDua}/>
            <Stack.Screen name="DuaListings" component={AppDuaListings} />
            <Stack.Screen name="DuaContent" component={AppDuaMain} />
        </Stack.Navigator>
    )
}

export function PrayerTime() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="PrayerTimeMain" component={AppPrayerTime}/>

        </Stack.Navigator>
    )
    
}


export function LuthResources() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="LuthResources" component={AppLuthResources}/>

        </Stack.Navigator>
    )
    
}

export function Donate() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
            
        }}>
            <Stack.Screen name="DonateMain" component={AppDonate}/>
            <Stack.Screen name="AboutDonate" component={AppAboutDonation}/>
            <Stack.Screen name="AmountPage" component={AppDonationPage}/>
            

        </Stack.Navigator>
    )
    
}

export function Notification() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
            
        }}>
            <Stack.Screen name="Notification" component={AppOtherNotification}/>
            <Stack.Screen name="ContentNotification" component={AppNotificationContent}/>

        </Stack.Navigator>
    )
    
}
