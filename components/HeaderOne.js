import {View, Text, Image, StyleSheet} from 'react-native'
import AppText from './AppText'
import colors from '../config/color'
import { getFontScale } from 'react-native/Libraries/Utilities/PixelRatio'

export default function HeaderOne({isBoth = true, right, left, children}) {

    return (
        <View style={style.header}>
                {
                    isBoth ?
                    <>
                        <AppText _style={{color: "#000", fontSize: 30, fontWeight: 'bold'}}>{left}</AppText>
                        <Image source={right} style={{width: 120}} resizeMode='contain'></Image>
                        
                    </> : 
                    <View>
                        {children}
                    </View>
                }
        </View>
    )
}


const style = StyleSheet.create({
    header: {
        backgroundColor: colors.tertiaryColor, 
        width: "110%", 
        transform: [{scale: 1.1}],
        marginTop:-25,
        paddingTop: 15, 
        marginBottom:10,  
        height:100, borderRadius: 100, 
        flexDirection: 'row', 
        marginLeft: '-5%', 
        justifyContent: 'space-around', 
        alignItems: 'center',
        borderRadius: 200
    }

})


