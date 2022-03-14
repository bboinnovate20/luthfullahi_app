import React from 'react';
import { View, Text } from 'react-native';
import { ImageBackground } from 'react-native-web';
import AppText from '../components/AppText';
import ContentListings from '../components/ContentListings';
import HeaderOne from '../components/HeaderOne';
import SafeViewScreen from '../components/SafeViewScreen';

import { donation } from '../data/donation';

export default function AppDonate() {

    return (
      <ContentListings data={donation} name='name' headerName='Special Donation' 

      SubHeader={() => (
        <AppText _style={{padding: 20, fontSize: 20}}>Current ongoing Luthfullahi Programme
        and other Islamic right support</AppText>
      )}
      
      navigate='AboutDonation'
      />
    );
}
