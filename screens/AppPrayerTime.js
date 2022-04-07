import { useContext, useEffect, useState } from "react";
import { render } from "react-dom";
import { FlatList,ScrollView, ImageBackground, View, TouchableWithoutFeedback} from "react-native";
import getLocation from "../api/location";
import AppText from "../components/AppText";
import SafeViewScreen from "../components/SafeViewScreen";
import { prayerTime } from "../data/prayerTime";
import MiscContext from "../misc/context";
import { getCurrentDate, getGregoryDate, getHijriDate } from "../misc/misc";

export default function  AppPrayerTime({route}) {

    const {data} = useContext(MiscContext)
    const [timing, setTiming] = useState([])


    function convertToHours(data) {
        let time = data.substring(0,5)
        time = time.split(':')

        time[0] = time[0] % 12 || 12  
        return time.join(':')

    }
    useEffect(() => {
        const dataArray = []
        for(let d in data) {
            dataArray.push({name: d, time: convertToHours(data[d]), opt: (d == 'Fajr' | d=='Sunrise') ? 'am' : 'pm'})
        }
        setTiming([...dataArray])
    }, [])
    
    return (
        <SafeViewScreen>
            <ImageBackground source={require('../assets/prayerbk.png')} style={{width: '100%', height:180, justifyContent: 'center'}} resizeMode='cover'>
                <View style={{justifyContent: 'center', alignItems: 'center', marginTop:-10}}>
                    <AppText _style={{fontSize: 30}}>Asr</AppText>
                    <AppText _style={{fontSize: 40, fontWeight: 'bold'}}>4:10pm</AppText>

                </View>
            </ImageBackground>
            <FlatList
                style={{margin: 20, backgroundColor: '#fff', padding: 10, borderRadius: 20, marginTop: -30}}
                data={timing}
                keyExtractor={(item) => item.name}
                renderItem={({item}) => (
                    <TouchableWithoutFeedback >
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomWidth: 1, paddingVertical: 25, borderBottomColor: '#70707040'}}>
                            <AppText _style={{fontSize: 22}}>{item.name}</AppText>
                            <AppText _style={{fontSize: 22}}>{(item.time) + ` ${item.opt}`}</AppText>
                        </View>
                    </TouchableWithoutFeedback>
                )}

                ListHeaderComponent={() => (
                    <View style={{alignItems:'center'}}>
                        <AppText _style={{fontSize: 18}}>{getGregoryDate()}</AppText>
                        <AppText _style={{fontSize: 18}}>{getHijriDate()}</AppText>
                    </View>
                )}
            />
        
        </SafeViewScreen>
    )
}