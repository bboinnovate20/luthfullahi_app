
import {useState} from 'react';
import { Modal, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import AppText from './AppText';

import { amount } from '../data/subcriptionAmount';
import colors from '../config/color';
import SafeViewScreen from './SafeViewScreen';

export default function AppPicker({placeholder, onSelectItem, numOfColumn, data, selectedItem, property, wrapperStyle, _style, text }) {
    const [showModal, setModal] = useState(false)

    return (
        <View style={wrapperStyle && {alignItems: 'flex-end'}}>
            <TouchableOpacity onPress={() => setModal(true)} style={wrapperStyle}>
                <View style={[style.container, _style]}>
                    <AppText numberOfLines={1}  _style={[style.amount, text]}>{selectedItem ? selectedItem : placeholder}</AppText>
                </View>
            </TouchableOpacity>
            <Modal visible={showModal} animationType="slide">
                <SafeViewScreen>
                    <FlatList
                        // horizontal={true}
                        numColumns={numOfColumn || 2}
                       data={data}
                       keyExtractor={(item) => item.id }
                       renderItem={({item}) => 
                       <TouchableOpacity onPress={() => 
                            {onSelectItem(item)
                            setModal(false)}
                        }>
                           <AppText  _style={style.headlines} >{property ? item[property] : item.amount}</AppText>
                       </TouchableOpacity>
                        }
                    />
                </SafeViewScreen>
            </Modal>
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        padding: 20,
        borderWidth: 1,
        borderRadius: 15,
        marginVertical: 10
    },

    amount: {
        fontSize: 20,
        color: '#707070'
    },

    headlines: {
        backgroundColor: colors.primaryColor,
        margin: 13,
        padding: 15,
        paddingVertical: 20,
        borderRadius: 10,
        color: '#fff',
        fontSize: 21,
        minWidth: '40%',
        fontSize: 25
    }
})