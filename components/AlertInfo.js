import {View, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native'
import colors from '../config/color'
import AppButton from './AppButton'

import AppText from "./AppText"


export default function AlertInfo({onPress}) {

    return (
        <View style={style.container}>
            <AppText _style={style.text}>Asalam Alaykum!</AppText>
            <AppText _style={{fontSize: 20, textAlign: 'center', marginBottom: 20}}>We will need your location to better acuracy</AppText>
            <View>
                <ImageBackground source={require('../assets/image/icons8-lock.png')}
                style={{width: 80, height: 80, marginRight: 'auto', marginLeft: 'auto'}}
                resizeMode='contain'
                />
                <AppButton _style={{marginLeft: 'auto', marginRight: 'auto'}}>
                    <TouchableOpacity onPress={onPress}><AppText _style={{color: '#fff', fontSize: 20}}>Allow Permission now</AppText></TouchableOpacity>
                </AppButton>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        position: 'absolute',
        top: '30%',
        left: '10%',
        right: '10%',
        width:'80%'
    },


    text: {
        color: colors.primaryColor,
        fontSize: 30,
        textAlign: 'center'
    }
})