import React,  { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import HeaderDetail from '../components/HeaderDetail';
import SafeViewScreen from '../components/SafeViewScreen';
import { share } from '../assets/app_asset/icon/icon';
import { shadowColor, shadowOffset } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { hadithbooks } from '../data/hadithData';

export default function AppHadithMainContent ({route}) {

    const [hadith, setHadith] = useState([])
    
    function getHadith(bookNo, collection) {
      return hadithbooks.find((each) => each.book === bookNo && each.collection === collection)
    }
    useEffect(() => {
      const {id, collection} = route.params
      setHadith(getHadith(id, collection).hadiths)
      // return (
      //   // setHadith([])
      // )
    }, [])


    return (
      <SafeViewScreen>
        <FlatList
          data={hadith}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
              <View style={style.container}>
                <Text style={{fontWeight: 'bold', paddingBottom:10, fontSize: 17}}>{item.chapter_title}</Text>
                <Text style={{fontWeight: 'bold', paddingBottom:10, fontSize: 20}}>{item.arabic_chapter_title}</Text>
                <Text style={style.hadith}>{item.text}</Text>
                <Text style={style.hadith}>{item.arabic_text}</Text>
                <TouchableOpacity style={{paddingTop: 10, alignItems:'flex-end', paddingRight: 20}}>{share}</TouchableOpacity> 
            </View>
          )}

          ListHeaderComponent={() => <HeaderDetail includeImage={false} altName={route.params.name}/>}
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