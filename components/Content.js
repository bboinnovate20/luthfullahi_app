import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import HeaderDetail from '../components/HeaderDetail';
import SafeViewScreen from '../components/SafeViewScreen';
import { share } from '../assets/app_asset/icon/icon';
import AppText from './AppText';
import QuranAppText from './QuranAppText'
import colors from '../config/color';

export default function Content ({data, shareContent, headerName, imageInclude, duaContent, children}) {

    return (
      <SafeViewScreen>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => !duaContent ? (
          <View style={style.container}>
              {item.narrator && <Text style={{fontWeight: 'bold', paddingBottom:10}}>{item.narrator}</Text> }
              {item.name && <AppText _style={{fontSize: 25, fontWeight: 'bold'}}>{item.name}</AppText>}
            <Text style={style.hadith}>
                {item.content}
            </Text>
            <TouchableOpacity onPress={shareContent} style={{paddingTop: 10, alignItems:'flex-end', paddingRight: 20}}>{share}</TouchableOpacity> 
        </View>

          ) : 
            (
              <View style={{padding: 20}}>
                <QuranAppText font2={true} _style={style.arabic} >{item.arabic_text}</QuranAppText>
                <AppText _style={style.transliteration}>{item.transliteration}</AppText>
                <AppText _style={style.translation}>{item.translation}</AppText>
              </View>
            )
        }

          ListHeaderComponent={() => <HeaderDetail includeImage={imageInclude} altName={headerName}/>}
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
    lineHeight: 28,
    fontSize: 18,
  },

  arabic: {
    fontSize: 30,
    lineHeight: 70,
    borderWidth: 5,
    padding: 10,
    textAlign: 'center',
    borderRadius: 10,
    backgroundColor: colors.lightYellow,
    borderColor: colors.primaryColor,
    marginBottom: 20
  },

  transliteration:{
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.tertiaryColor,
    marginBottom: 15
  },

  translation: {
    fontSize: 20
  }
})