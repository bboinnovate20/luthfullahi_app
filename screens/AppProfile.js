import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import SafeViewScreen from '../components/SafeViewScreen';
import AppText from '../components/AppText'
import colors from '../config/color';
import AppButton from '../components/AppButton';

export default function AppProfile() {

    function RowSchedule({left, right}) {
      return (
        <View style={{flexDirection: 'row', marginBottom: 20, justifyContent: 'space-between', width: '90%'}}>
            <AppText _style={{fontSize: 20}}>{left}</AppText>
            <AppText _style={{fontSize: 20, flexBasis: '50%'}}>{right}</AppText>
          </View>
      )
    }

    return (
      <SafeViewScreen>

        <ImageBackground source={require('../assets/image/headerBk.png')} style={{width: '100%', height: 200, marginTop: -50, transform: [{scale: 1.2}], justifyContent: 'center'}} >
          <View style={{padding: 45, marginTop: 100, flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
                <View style={{ width: 120, height: 120, overflow: 'hidden', borderRadius: 100, justifyContent: 'flex-start', alignItems: 'center'}}>
                  <Image source={require('../assets/image/muslim_photo.jpeg')} style={{width: '100%', height: '190%'}} resizeMode='contain'  />
                </View>
                <AppText _style={{fontSize: 20, textAlign: 'center'}}>Engr. Adeniyi</AppText>
            </View>
               <View style={{flexDirection: 'row', alignItems: 'center', marginTop: -50}}>
    
                 <Image source={require('../assets/icons/premium_icon.png')} style={{width: 60, height: 60, marginRight: -40, zIndex: 1}}/>
                 <AppText _style={{backgroundColor: '#fff', padding: 7, borderRadius: 10, paddingLeft: 40}}>PREMIUM USER</AppText>
               </View>
          </View>
        </ImageBackground>
        <View style={{marginTop: 90, padding: 20,}}>
          <View>
            <AppText _style={{backgroundColor: colors.secondaryColor, padding: 10, marginBottom: 20, fontSize: 20, borderRadius: 15, fontWeight: 'bold'}}>PAYMENT DETAILS</AppText>
            <RowSchedule left="Payment due:" right='21st May 2016' />
            <RowSchedule left="Payment Plan:" right='Monthly' />
            <RowSchedule left="Amount:" right='N10,000.00' />
          </View>
          <View style={{alignItems: 'center'}}>
            <AppText _style={{width: '80%', color:colors.tertiaryColor, textAlign: 'center', fontSize: 20}}>Jazakumullahu Khairan for your utmost support</AppText>
          </View>
          <AppButton color='transparent' _text={{color: colors.tertiaryColor}} _style={{borderWidth: 2, borderColor: colors.tertiaryColor, marginTop: 30}}>Unsubcribe</AppButton>
        </View>
      </SafeViewScreen>
    );

}
