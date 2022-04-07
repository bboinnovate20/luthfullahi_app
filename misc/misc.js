import * as Notification from 'expo-notifications'
import momentHijri from "moment-hijri"
var dayjs = require('dayjs')
import getMonth from "../data/months"

export async function playAudio(objectPlayBack, uri) {
    return await objectPlayBack.loadAsync({uri}, {shouldPlay: true})
}

export async function pauseAudio(objectPlayBack) {     
    return await objectPlayBack.setStatusAsync({shouldPlay: false})
}

export async function resumeAudio(objectPlayBack) {     
    return await objectPlayBack.setStatusAsync({shouldPlay: true})
}

export async function playNextAudio(_objectPlayBack, uri) {
    await _objectPlayBack.stopAsync()
    await _objectPlayBack.unloadAsync()
    const status = await playAudio(_objectPlayBack, uri)
    return [status]
}


// <------------------------------------>


export function getCurrentDate() {
    const gregorian = dayjs().format('YYYY/MM/DD')
    momentHijri.locale('en')
    const hijri = momentHijri(gregorian, 'YYYY/MM/DD').format('iYYYY/iM/iD')

    return [gregorian, hijri]
}

export function getGregoryDate() {
    let currentDate = dayjs().$d
    currentDate = currentDate.toString().split(' ')
    return currentDate[0] + " " + currentDate[1] + " " + currentDate[2] + " " + currentDate[3]
}

export function getHijriDate() {
    let hijri = getCurrentDate()[1]
    hijri = hijri.split('/')
    
    return `${hijri[2]} ${getMonth(hijri[1])} ${hijri[0]}`
}

const prefix = '@luthfullahi'

export async function addItem(key, value) {
    try {
        return await AsyncStorage.setItem(prefix+key, JSON.stringify(value))
    }
    catch(err) {
        return null
    }
}

 export async function getItem(key) {
    try {
       const item = await AsyncStorage.getItem(prefix+key)
       if(!item) return null
       return JSON.parse(item)
    }
    catch(err) {
        return null
    }
}

export const notificationHandler = () => {
    Notification.setNotificationHandler({
        handleNotification: async () => ({
            shouldShowAlert: true,
            shouldPlaySound: true,
            shouldSetBadge: false,
        })
    })
}

export const getToken = async () => {
    try {
        return await Notification.getExpoPushTokenAsync()
    }
    catch (err) {
        return null
    }
}

export const scheduleNotification = async () => {

    await Notification.scheduleNotificationAsync({
        
        content: {
            title: "Adhan Asri Prayer📬",
            body: 'Asri Prayer is on',
            data: { data: 'my data' },
            sound: 'adhan.wav',
            vibrate: true 
        },
          trigger: { 
              seconds: 1,
              channelId: "adhan",    
        },
          
    });

}