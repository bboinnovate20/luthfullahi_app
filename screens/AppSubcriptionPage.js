import react, { useState } from 'react'

import { useRoute } from '@react-navigation/native';
import { TextInput, View, KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import AppText from '../components/AppText';
import HeaderDetail from '../components/HeaderDetail';
import SafeViewScreen from '../components/SafeViewScreen';
import AppButton from '../components/AppButton'
import AppPicker from '../components/AppPicker';
import { amount } from '../data/subcriptionAmount';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { borderColor, color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import colors from '../config/color';


export default function AppSubcriptionPage() {

    const [category, setCategory] = useState('')  
    const [possibleAmount, setPossibleAmount] = useState([])  
    const [plan, setPlan] = useState(0)
    const [isActive, setActive] = useState([colors.primaryColor, 1])

    const activeStyle = {
        backgroundColor: colors.primaryColor, 
        color: '#fff'
    }

    function changeActive(id) {
        if(isActive[1] === id) return activeStyle
        return {color: colors.primaryColor}
    }

    function onChangeActive(id) {
        const active = [...isActive]
        active[1] = id
        setActive([...active])
    }

    function resetActive() {
        const active = [...isActive]
        active[1] = 1
        setActive([...active])

    }

    return (
        <SafeViewScreen>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
               
            >
                <HeaderDetail includeImage={false} altName='Subcription Page' />
                <View style={{padding: 20,}}>
                    <View>
                        <AppText _style={{fontSize: 30}}>Choose Payment Plan</AppText>
                        <AppText _style={{fontSize: 17}}>Every penny you spend towards Islamic services
will surely be rewarded from Allah</AppText>
                    </View>
                    <AppPicker 
                    placeholder='--Select Amount' data={amount} category={category} onPress={() => setModal(true)} 
                    selectedItem={category}
                    onSelectItem={(item) => {
                        setCategory(item.amount)
                        setPossibleAmount(item.plan)
                        resetActive()
                    }
                    }
                    />
                    <FlatList 
                        data={possibleAmount}
                        keyExtractor={(item) => item.id}
                        numColumns={2}
                        renderItem={({item}) => 
                        <TouchableOpacity onPress={() => onChangeActive(item.id)}>
                            <AppText _style={[style.amount, changeActive(item.id)]}>
                                {item.plan}</AppText>
                        </TouchableOpacity>
                            
                        }

                        ItemSeparatorComponent={() => <View style={{width: 20, height: 20}}></View>}
                    />

                    <AppButton _style={{paddingVertical: 20}}>
                       Subcribe Now
                    </AppButton>
                </View>

            </KeyboardAvoidingView>
        </SafeViewScreen>
    )
}


const style = StyleSheet.create({
    amount: {
        borderRadius: 15,
        borderWidth: 2,
        fontSize: 20,
        padding: 10,
        paddingHorizontal: 19,
        marginRight: 20,
        borderColor: colors.primaryColor
    }
})