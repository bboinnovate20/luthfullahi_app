
import { View,TouchableOpacity, Image, FlatList, Dimensions, Animated, BackHandler} from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import {Audio} from 'expo-av'


import AppText from '../components/AppText' 
import AppPicker from '../components/AppPicker'

import colors from '../config/color'
import * as icons from '../assets/app_asset/icon/icon'
import * as FileSystem from 'expo-file-system'
import fullQuran from '../data/_fullQuran'


import RenderVerse from '../components/RenderVerse'
import { reciter } from '../data/quranReciter'

import {pauseAudio, resumeAudio, playAudio, playNextAudio}from '../misc/misc'

const PREFIX = 'http://www.everyayah.com/data/'
const DEVICE_PREFIX = FileSystem.documentDirectory

export default function AppQuranDetails({route, navigation}) {
    const totalVerse = getQuran(route.params.id).total_verses;
    //states
    const [fontSize, setFontSize] = useState([30, 20])
    const [currentReciter, setCurrentReciter] = useState(setCurrentReciterDetails(1))
    const [objectPlayBack, setObjectPlayBack] = useState(null)
    const [soundObject, setSoundObject] = useState(null)
    const [currentAudio, setCurrentAudio] = useState(0)
    const [selectedItem, setSelectedItem] = useState(0)
    const [getURI, setURI] = useState('')
    const {width, height} = Dimensions.get('window')

    const indexRef = useRef(0)
    const verseRender = useRef(null)
    const scrollY = useRef(new Animated.Value(0)).current

    useEffect(() => {
        scrollY.addListener(() => {
            BackHandler.addEventListener('hardwareBackPress', () => {
                objectPlayBack.unloadAsync()
            })
        })
    }, [selectedItem])

    function getQuran(id) {
        const _fullQuran = fullQuran.find(each => each.id === id)
        return _fullQuran
    }

    function updateIndex() {
        const newIndex = indexRef.current + 1;
        indexRef.current = newIndex 
        return indexRef.current
    }

    function setIndex(id) {
        indexRef.current = id;
    }

    //functions
    function setCurrentReciterDetails(id) {
        return reciter.find((e) => e.id === id)
    }    

    function formatNumber(number) {
        const num = number.toString()     
        const result = num.length % 3
        if(result !== 0){
        const arr = Array(3 - result).fill('0')
        
        arr.push(number)
        
        return arr.join('')
        }
        return num;
    }

    function combineVerseChapter(chapterID, verseID) {
        return `${formatNumber(chapterID)}${formatNumber(verseID)}`
    }

    function generateOnlineURI(id) {
        const audioName = combineVerseChapter(route.params.id,id) + '.mp3'
        return PREFIX + currentReciter.name + currentReciter.suffix + audioName;
    }

    // /-----------------------------------/
    async function checkIfDirectoryExist(currentReciter) {
        const status = await FileSystem.getInfoAsync(FileSystem.documentDirectory+currentReciter, {encoding: FileSystem.EncodingType.Base64})
        
        return status.exists
    }

    async function checkIfFileExists(cur=rentReciter, filename) {
        const status = await FileSystem.getInfoAsync(FileSystem.documentDirectory+currentReciter+'/'+filename + '.mp3')
        return status.exists
    }

     async function downloadAudio(uniqueName, currentReciter, uri) {
        try {
            const status =  FileSystem.downloadAsync(uri, FileSystem.documentDirectory+currentReciter+'/'+ uniqueName + '.mp3')
            return status
        }
        catch (err) {
            return err
        }
    }

    async function createLocalDirectory(currentReciter) {
            return await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory+currentReciter+'/')
    }               
 
    async function createLocalAudio(id) {
        const localFilename = combineVerseChapter(route.params.id, id)
        const onlineFilename = generateOnlineURI(id)

        const checkIfExist = await checkIfDirectoryExist(currentReciter)

        if(!checkIfExist) {
            const status = await createLocalDirectory(currentReciter)

            if(status) {
               await downloadAudio(localFilename, currentReciter, onlineFilename)
            }

            return
        }

        const checkFileExist = await checkIfFileExists(currentReciter, localFilename)

        if(!checkFileExist) {
            return await downloadAudio(localFilename, currentReciter, onlineFilename)
        }
        
    }

    async function _getURI(id, currentReciter) {
        let uri;

        const localFilename = combineVerseChapter(route.params.id, id)

        //determine whether to generate from online or from file system
        const statusResult = await checkIfDirectoryExist(currentReciter);
        const statusResult2 = await checkIfFileExists(currentReciter, localFilename)
  
        if(statusResult && statusResult2) {
                uri = DEVICE_PREFIX + currentReciter+'/'+localFilename+'.mp3'       
        }
        else {
                await createLocalAudio(id)
                uri = generateOnlineURI(id) 
        }
        return uri
    }

     // /-----------------------------------/
    async function playMusic(id) {
        let uri = await _getURI(id, currentReciter.name)
        // moveTo(id)
        setIndex(id)
            if(soundObject === null) {
                setCurrentAudio(id)
                setSelectedItem(id)
                const playbackObject = new Audio.Sound();
                const status = await playAudio(playbackObject, uri)
    
                setObjectPlayBack(playbackObject) 
                setSoundObject({...status})
    
                return playbackObject.setOnPlaybackStatusUpdate(async (onPlayback) => {
                    if(onPlayback.didJustFinish) {
                        if(indexRef.current < totalVerse) {
                                const index = updateIndex()
                                const uri = await _getURI(index, currentReciter.name)
                                const status = await playNextAudio(playbackObject, uri)
                                // moveTo(index) 
                            
                                if(status){
                                    setCurrentAudio(0)
                                    setSelectedItem(0)
                                    setSelectedItem(index)
                                }
                            }
                            else {
                                setCurrentAudio(0)
                                setSelectedItem(0)
                                setSelectedItem(0)
                                playbackObject.unloadAsync()
                            }
                    }
                })
            }

        
            if(soundObject.isLoaded) {
                //pause audio
                if(currentAudio != id && (soundObject.isPlaying || !soundObject.isPlaying)) {
                    const [status] = await playNextAudio(objectPlayBack, uri)
                    setSoundObject({...status})
                    setCurrentAudio(id)
                    setSelectedItem(id)
                    return
                    // setObjectPlayBack(_objectPlayBack)
                }

                
                if(soundObject.isPlaying) {
                    const status = await pauseAudio(objectPlayBack)
                    setSelectedItem(0)
                    return setSoundObject({...status})
                }
    
                //resume audio
                if(currentAudio === id) {
                    const status = await resumeAudio(objectPlayBack)
                    setSelectedItem(id)
                    return setSoundObject({...status})
                }
            }
    }
    function moveTo(id) {
        verseRender.current.scrollToOffset({
            offset: 200 * id
        })
    }

    return (
        <>
        <Animated.FlatList 
            style={{backgroundColor: '#fff'}}
            ref={verseRender}
            scrollEventThrottle={16}
            onScroll={Animated.event(
                [{nativeEvent: 
                    {
                        contentOffset: {
                            y: scrollY
                        }
                    }
                }
            ],
            {useNativeDriver: true}
            )}
            data={getQuran(route.params.id).verses} 
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => 
            
            <RenderVerse onPress={() => {
                playMusic(item.id)
            }} 
                icon={selectedItem == item.id ? 'stop' : 'play'}
                id={item.id} fontSize={fontSize} content={item.text} transliteration={item.transliteration} english={item.translation} 
                _style = {(selectedItem === item.id) ? {backgroundColor: '#CECDCD70'}: {backgroundColor: 'transparent'}}
                
            />
            }
            
            ListHeaderComponent={() => 
                <View>
                <AppText _style={{textAlign: 'center', fontSize: 22, marginBottom: -5}}>{}</AppText>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>{icons.back}</TouchableOpacity>
                    <View style=
                            {{backgroundColor: colors.tertiaryColor, 
                            flexBasis: '85%', alignItems: 'center',
                            paddingVertical: 10
                            }}>
                        <Image source={require('../assets/icons/bismillah.png')} resizeMode='contain' style={{width: '80%', height: 45}}/>
                    </View>
                </View>
                <AppPicker placeholder={currentReciter.name} data={reciter}
                    property='name'
                    onSelectItem={(item) => setCurrentReciter(setCurrentReciterDetails(item.id))}
                    numOfColumn={1}
                    text={{fontSize: 15, color: '#fff', paddingLeft: 10}}
                    wrapperStyle={{width: '45%', height: 40, alignItems: 'flex-end', marginRight: 10}} 
                    _style={{padding: 0, width: '100%', height: '80%', backgroundColor: colors.primaryColor}}
                    />
                </View> 
            }
        />       
        </>
    )
}
