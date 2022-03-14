import react, { useState } from 'react'

import { useRoute } from '@react-navigation/native';
import { TextInput, View, KeyboardAvoidingView, Platform } from 'react-native';
import AppText from '../components/AppText';
import HeaderDetail from '../components/HeaderDetail';
import SafeViewScreen from '../components/SafeViewScreen';
import AppButton from '../components/AppButton'



export default function AppAboutDonation() {
    
    const route = useRoute()

    const [count, setCount] = useState(0);
    

    function changeValue(e) {
        // console.log(e)
    }

    return (
        <SafeViewScreen>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
               
            >

                <HeaderDetail includeImage={false} altName={`${route.params.name} Donation`} />
                <View style={{padding: 20,}}>
                    <AppText>Salam Alaykum Warahmotulahi Wabarakatuhu</AppText>
                    <TextInput 
                    keyboardType='number-pad'
                        placeholder='Amount to Donate'
                        onChangeText={changeValue}
                        style={{padding: 10, borderWidth: 1, borderRadius: 15, fontSize: 30, paddingHorizontal: 20, marginVertical:25}}
                    />
                    <AppButton _style={{paddingVertical: 20}}>
                        Earn {route.params.name} reward now
                    </AppButton>
                </View>

            </KeyboardAvoidingView>
        </SafeViewScreen>
    )
}