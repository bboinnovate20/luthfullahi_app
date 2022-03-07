import { View, StyleSheet, Image, Animated, Text } from 'react-native'
import React, { useEffect, useRef } from 'react'
import AppText from '../components/AppText'
import colors from '../config/color'
import { LinearGradient } from 'expo-linear-gradient'

export default function AppWelcomeScreen(props) {

    const fadeLogo = useRef(new Animated.Value(0)).current

    useEffect(() => {
        fadeIn();
    }, [])

    function fadeIn() {
      Animated.timing(fadeLogo, {
        toValue: 1,
        duration: 1000,
         useNativeDriver:  true
      }).start()
    }


    return (
            <LinearGradient style={style.background} colors={[colors.primaryColor, colors.secondaryColor]}>
              <Animated.View style={[style.container, {opacity: fadeLogo, 
                transform: [
                  {translateY: fadeLogo.interpolate({
                      inputRange: [0, 1],
                      outputRange: [50, 0]
                    })}]
              } ]}>
                    <Image 
                    style={{width: '42%', height: "18%"}}
                      source={require("../assets/app_asset/lutfullah1.png")}
                      resizeMode='stretch'/>
                      <AppText style={style.motto}>Yah Lateef Ul'Thufubi</AppText>
                </Animated.View>  
            </LinearGradient>
    )
  }
  
  const style = StyleSheet.create({
      container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'    
      },
      motto: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 16
        
      },
      safeView: {
        backgroundColor: 'red'
      },
      background: {
        position: 'absolute',
        top: 0,
        right: 0,
        height: '100%',
        width: '100%'

      }
  })