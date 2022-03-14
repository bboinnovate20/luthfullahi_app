import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import HeaderDetail from '../components/HeaderDetail';
import SafeViewScreen from '../components/SafeViewScreen';
import { share } from '../assets/app_asset/icon/icon';
import AppText from './AppText';

export default function Content ({data, shareContent, headerName, imageInclude}) {

    return (
      <SafeViewScreen>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
          <View style={style.container}>
              {item.narrator && <Text style={{fontWeight: 'bold', paddingBottom:10}}>{item.narrator}</Text> }
              {item.name && <AppText _style={{fontSize: 25, fontWeight: 'bold'}}>{item.name}</AppText>}
            <Text style={style.hadith}>
                {item.content}
            </Text>
            <TouchableOpacity onPress={shareContent} style={{paddingTop: 10, alignItems:'flex-end', paddingRight: 20}}>{share}</TouchableOpacity> 
        </View>

          )}

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

    
  }
})