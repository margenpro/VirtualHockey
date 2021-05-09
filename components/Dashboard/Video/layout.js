import React from 'react';
import styles from "./styles";
import { Frame } from '../../Frame'
import { Video } from 'expo-av';
import { Text, View, Image, TouchableOpacity } from 'react-native';

export function Layout({
    video,
    playFullScreen,
    show,
    setShow
}) {
    //Esto tiene que ir en el container
    const urlVideo = "https://player.vimeo.com/external/475218949.hd.mp4?s=ba45e54d6ef6152a1837619dd9e4ce5fe8641ea0&profile_id=175"
    return (
        <Frame>
            {show ? (
                <Video
                    ref={video}
                    style={styles.video}
                    source={{
                        uri: urlVideo,
                    }}
                    useNativeControls
                    resizeMode="contain"
                    onLoadStart={playFullScreen}
                    onLayout={() => setShow(!show)}                    
                />
            ) : null}


        </Frame>
    );
}