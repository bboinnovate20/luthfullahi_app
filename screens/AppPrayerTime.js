import { FlatList,ScrollView, ImageBackground, View} from "react-native";
import AppText from "../components/AppText";
import SafeViewScreen from "../components/SafeViewScreen";
import { prayerTime } from "../data/prayerTime";

export default function  AppPrayerTime({route}) {

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
                data={prayerTime}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomWidth: 1, paddingVertical: 25, borderBottomColor: '#70707040'}}>
                        <AppText _style={{fontSize: 22}}>{item.name}</AppText>
                        <AppText _style={{fontSize: 22}}>{item.time}</AppText>
                    </View>
                )}

                ListHeaderComponent={() => (
                    <View style={{alignItems:'center'}}>
                        <AppText _style={{fontSize: 18}}>Tuesday, May 15, 2020</AppText>
                        <AppText _style={{fontSize: 18}}>07 Rajab, 1443</AppText>
                    </View>
                )}
            />
        
        </SafeViewScreen>
    )
}