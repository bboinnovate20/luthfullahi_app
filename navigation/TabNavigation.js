import react from "react";
import AppText from "../components/AppText";
import AppDashBoard from "../screens/AppDashBoard";
import AppQuran from "../screens/AppQuran";
import AppHadith from "../screens/AppHadtih";
import AppQuranDetails from "../screens/AppQuranDetail";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AppProfile from "../screens/AppProfile";
import AppDonate from "../screens/AppDonate";
import navigation, { DonateIcon, HomeIcon, ProfileIcon } from "../data/navigation";
import Svg, {G, Path} from 'react-native-svg'
import colors from "../config/color";
import _AppNavigation from '../navigation/_AppNavigation'
import { Donate } from "./FeaturesNavigation";

export default function TabNavigation () {
    
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarLabelPosition: 'beside-icon',
            tabBarActiveTintColor: colors.primaryColor
        }}>
            <Tab.Screen
            name="Home" options={{
                tabBarIcon: ({color }) => <HomeIcon color={color}/>
            }} component={_AppNavigation}/>

            <Tab.Screen name="Profile" component={AppProfile} 
            options={{tabBarIcon:({color}) => <ProfileIcon color={color}/> }}/>

            <Tab.Screen name="Donate" component={Donate}
            options={{tabBarIcon:({color}) => <DonateIcon color={color}/> }}/>
            {/* <Tab.Screen name="Hadith" component={AppHadith}/> */}
        </Tab.Navigator>
    )
}

