
import { View, Text, StyleSheet, FlatList, ImageBackground, Image} from 'react-native'
import AppText from '../components/AppText'
import SafeViewScreen from '../components/SafeViewScreen'
import HeaderOne from '../components/HeaderOne'
import AppButton from '../components/AppButton'

export default function AppShare(props) {
    return (
        <SafeViewScreen>
            <HeaderOne isBoth={false}> 
                <View style={{alignItems: 'center'}}>
                    <AppText _style={{fontSize: 25, fontWeight: 'bold'}}>SHARE</AppText>
                    <AppText _style={{fontSize: 15}}>Share and earn reward</AppText>
                </View>
            </HeaderOne>
            <View style={{alignItems: 'center', justifyContent: 'flex-start', flex: 1}}>
                <ImageBackground 
                    source={require('../assets/icons/share_bk.png')}
                    style={{width: "95%", height: "95%", alignItems:'center', justifyContent:'center', marginLeft: '5%'}}
                    resizeMode="contain"
                    >
                    <View style={{width:'75%', marginTop: 50}}>
                        <AppText numberOfLines={3} _style={{paddingBottom:10,color: '#fff', textAlign: 'center'}}>Allah is the best planner, He knows the hidden and every thing that encompasses it!</AppText>
                        <AppText numberOfLines={3} _style={{color: '#fff',  textAlign: 'center'}}>Allah is the best planner, He knows the hidden and every thing that encompasses it!</AppText>
                        <AppText numberOfLines={1} _style={{color: '#fff',  textAlign: 'center'}}>Q2: V5</AppText>
                    </View>
                </ImageBackground>
                <AppButton _style={{marginTop: -50, paddingVertical:15}}>SHARE</AppButton>
            </View>
        </SafeViewScreen>
    )   
}