
import { View, Text, StyleSheet, FlatList, ImageBackground, Image} from 'react-native'
import AppText from '../components/AppText'
import SafeViewScreen from '../components/SafeViewScreen'
import HeaderOne from '../components/HeaderOne'

export default function AppQuran(props) {


    return (
        <SafeViewScreen>
            <HeaderOne isBoth={false}> 
                <View style={{alignItems: 'center'}}>
                    <AppText _style={{fontSize: 25, fontWeight: 'bold'}}>SHARE</AppText>
                    <AppText _style={{fontSize: 15}}>Share and earn reward</AppText>
                </View>
            </HeaderOne>
        </SafeViewScreen>
    )   
}