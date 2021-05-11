import React, { useState, useEffect, useRef } from "react";
import { Layout } from "./layout";
import * as ScreenOrientation from "expo-screen-orientation"
import * as vid from 'expo-av/build/Video';

export function Video({ navigation, route }) {

    const video = useRef(null);
    //const [urlVideo, setUrlVideo] = useState('');
    const urlVideo = "https://player.vimeo.com/external/475218949.hd.mp4?s=ba45e54d6ef6152a1837619dd9e4ce5fe8641ea0&profile_id=175"

    const presentFullScreen = () => {
        video.current.presentFullscreenPlayer()
    }
    const playVideo = () => {
        video.current.playAsync()
    }
    const fullScreenHandler = ({ fullscreenUpdate }) => {
        switch (fullscreenUpdate) {
            case vid.FULLSCREEN_UPDATE_PLAYER_WILL_PRESENT:
                ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
                break
            case vid.IOS_FULLSCREEN_UPDATE_PLAYER_WILL_PRESENT:
                ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
                break
            case vid.FULLSCREEN_UPDATE_PLAYER_WILL_DISMISS:
                ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)
                video.current.stopAsync()
                navigation.navigate("Dashboard")
                break
            case vid.IOS_FULLSCREEN_UPDATE_PLAYER_WILL_DISMISS:
                ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)
                video.current.stopAsync()
                navigation.navigate("Dashboard")
                break
        }
    }

    return (
        <>
            <Layout
                urlVideo={urlVideo}
                video={video}
                presentFullScreen={presentFullScreen}
                playVideo={playVideo}
                fullScreenHandler={fullScreenHandler}
            />
        </>
    );
}



