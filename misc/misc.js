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
