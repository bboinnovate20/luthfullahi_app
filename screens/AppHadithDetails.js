import { View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native'
import { allHadith } from '../data/hadithDetails'
import HeaderDetail from '../components/HeaderDetail'
import { hadith } from '../data/hadithsCollection'
import AppText from '../components/AppText'
import colors  from '../config/color'
import {} from 'react-native-gesture-handler'


export default function AppHadithDetails({navigation, route}) {

function  renderArabicText() {

    return hadith.find((item) => item.id === route.params.id)
}

    return (
       <FlatList 
            
            data={allHadith}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
            <TouchableOpacity onPress={() => navigation.navigate('HadithMainContent')}>
                    <AppText _style={style.hadithListing}>{item.name}</AppText>
            </TouchableOpacity>
                )}
                ListHeaderComponent={() => (
                    <HeaderDetail source={renderArabicText().arabic} />
                )}ß
       />
    )
}


const style = StyleSheet.create({
    hadithListing: {
        padding: 15,
        fontSize: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#FABC02',
    }    
})