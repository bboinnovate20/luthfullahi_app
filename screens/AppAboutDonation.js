import { useRoute } from '@react-navigation/native';
import { Text, View } from 'react-native';
import AppText from '../components/AppText';
import Content from '../components/Content'
import HeaderDetail from '../components/HeaderDetail';
import SafeViewScreen from '../components/SafeViewScreen';
import AppButton from '../components/AppButton'

export default function AppAboutDonation({navigation, route}) {
  

    return (
        <SafeViewScreen>
            <HeaderDetail includeImage={false} altName={route.params.name} />
            <View style={{padding: 20}}>
                <AppText _style={{fontSize: 17}}>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit`
                }</AppText>
                <AppButton onPress={() => navigation.navigate('AmountPage', {name: route.params.name})} _style={{paddingVertical: 20, marginTop: 30}} _text={{fontSize: 25}}>Donate Now</AppButton>
            </View>
        </SafeViewScreen>
    )
}