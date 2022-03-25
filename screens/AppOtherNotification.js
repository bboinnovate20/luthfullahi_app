import AppText from "../components/AppText";
import Notification from "../components/Notification";
import SafeViewScreen from "../components/SafeViewScreen";


export default function AppOtherNotification({navigation}) {
    return (
        <SafeViewScreen>
            <Notification onPress={(id) => navigation.navigate('ContentNotification', {id: id})}/>
        </SafeViewScreen>
    )
}