import LottieView from 'lottie-react-native'


export default function ActivityIndicator({visible = false}) {

    // if(!visible) return null;
if(visible)
    return (
    <LottieView 
        // style={{
        //     width: 200,
        //     height: 200
        // }}
        autoPlay
        loop
        source={require('../assets/animations/lf20_2svadkl0.json')}
    />)

    return null
}