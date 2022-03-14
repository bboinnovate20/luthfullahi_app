import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import HeaderDetail from '../components/HeaderDetail';
import SafeViewScreen from '../components/SafeViewScreen';
import { share } from '../assets/app_asset/icon/icon';
import { shadowColor, shadowOffset } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { hadithContent } from '../data/hadithsCollection';

export default function AppHadithMainContent () {

    return (
      <SafeViewScreen>
        

        <FlatList
          data={hadithContent}
          keyExtractor={(item) => item.id}
          renderItem={() => (
          <View style={style.container}>
            <Text style={{fontWeight: 'bold', paddingBottom:10}}>Narrated by Umar bin Khattab:</Text>
            <Text style={style.hadith}>I hear Allah Messenger saying every person 
              will get reward according to what he intended. So,
              whoever emigrated for world benefits or for a woman
              to marry, his emigration was for what he emigrated for.
            </Text>
            <TouchableOpacity style={{paddingTop: 10, alignItems:'flex-end', paddingRight: 20}}>{share}</TouchableOpacity> 
        </View>

          )}

          ListHeaderComponent={() => <HeaderDetail includeImage={false} altName="Book of Prayer" />}
        />
      </SafeViewScreen>


    );
}


const style = StyleSheet.create({
  container:{
    padding: 20,
    borderBottomColor: '#70707030',
    borderBottomWidth: 2,
  },

  hadith: {
    lineHeight: 22,
    fontSize: 18,
    
  }
})