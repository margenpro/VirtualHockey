import React from 'react';
import styles from "./styles";
import { Frame } from '../../Frame'
import { Audio, Video } from 'expo-av';

export function Layout({
    video,
    playFullScreen,
}) {
    const urlVideo = "https://player.vimeo.com/external/475218949.hd.mp4?s=ba45e54d6ef6152a1837619dd9e4ce5fe8641ea0&profile_id=175"
    return (
        
        <Video
            ref={video}
            style={styles.video}
            source={{
                uri: urlVideo,
            }}
            useNativeControls
            resizeMode="contain"
            onLoadStart={playFullScreen}
        />
        
    );
}