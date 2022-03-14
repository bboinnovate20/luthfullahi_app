import react, { useState } from 'react'

import { View, Text, StyleSheet, FlatList, ImageBackground, Image} from 'react-native'
import AppText from '../components/AppText'
import SafeViewScreen from '../components/SafeViewScreen'
import HeaderOne from '../components/HeaderOne'
import colors from '../config/color'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function AppTesbih() {

    const [counter, setCounter] = useState([0,0,0])

    function increaseCounter() {
        let format = [...counter]

        if(format[2] < 9) {
            format[2]++
            return setCounter([...format])
        }

        if(format[1] == 9 && format[2] == 9) {
            format[0]++ 
            format[1] = 0
            format[2] = 0
            return setCounter([...format])
        }

        if(format[2] == 9) {
            format[1]++ 
            format[2] = 0
            return setCounter([...format])
        }
        
        return      setCounter(counter)   
    }

    function reset() {
        const format = [...counter]

        format[0] = 0
        format[1] = 0
        format[2] = 0
    
        return setCounter([...format])
    
    }

    return (
        <SafeViewScreen>
            <HeaderOne isBoth={false}>
                        <AppText _style={{fontSize: 30, fontWeight: 'bold'}}>E-Tesbih</AppText>
            </HeaderOne>
                <ImageBackground source={require('../assets/prayerbk.png')} 
                    style={{width: '100%', flex: 1, alignItems: 'center', justifyContent: 'center',
                       
                        }}
                    resizeMode='cover'
            
                    >
                    <ImageBackground style={{ transform: [{scale: 1.2}], width: '100%', height: 300, alignItems: 'center', justifyContent: 'center'}} source={require('../assets/image/tesbih.png')}
                        resizeMode='contain'
                    >
                        <View style={{alignItems: 'center', height: 200}}>
                            <AppText _style={{color: '#000', borderRadius: 10, backgroundColor: '#FFF9D9', textAlign: 'center', width:130, padding: 10, fontSize: 30, marginBottom: 10}}>{counter.join('')}</AppText>
                            <AppText onPress={reset} _style={{color: colors.tertiaryColor, backgroundColor: '#FFF9D9', padding: 7, paddingHorizontal: 14, alignSelf: 'flex-end'}}>RESET</AppText>
                            <TouchableOpacity onPress={() => increaseCounter()}>
                                <View style={{backgroundColor: colors.primaryColor, width: 80, height: 80, borderWidth: 8, borderColor: "#fff", borderRadius:100, marginTop:15}} />
                            </TouchableOpacity>

                        </View>
                        
                    </ImageBackground>
            </ImageBackground>
        </SafeViewScreen>
    )

}