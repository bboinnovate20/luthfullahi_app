import { useRoute } from '@react-navigation/native'
import React from 'react'

import {View} from 'react-native'
import AppText from '../components/AppText'
import HeaderDetail from '../components/HeaderDetail'
import notification from '../data/notification'

export default function AppNotificationContent({route}) {


    function findNotification(id) {
        return notification.find((_id) => _id.id === id)

    }
    return (
        <>
            <HeaderDetail 
                includeImage={false}
                altName={findNotification(route.params.id).title}
            />
            <AppText _style={{fontSize: 20, padding: 15, lineHeight: 33}}>
              {findNotification(route.params.id).content}
            </AppText>
        </>
    )
}