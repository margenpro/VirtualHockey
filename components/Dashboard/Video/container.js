import React, { useState, useEffect, useRef } from "react";
import { Layout } from "./layout";
import * as ScreenOrientation from "expo-screen-orientation"
import { BackHandler } from 'react-native'

export function Video({ navigation, route }) {

    const video = useRef(null);
    //const [status, setStatus] = useState({});
    const [urlVideo, setUrlVideo] = useState('');
    const [show, setShow] = useState(false)

    const playFullScreen = () => {
        video.current.presentFullscreenPlayer()
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
        video.current.playAsync()
    }

    const exitFullScreen = () => {
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)
    }
    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", exitFullScreen)
        return () => BackHandler.removeEventListener("hardwareBackPress",exitFullScreen)
    },[])
    return (
        <>
            <Layout
                urlVideo={urlVideo}
                video={video}
                playFullScreen={playFullScreen}
                show={setShow}
                setShow={setShow}
            />
        </>
    );
}



