import React from 'react';
import styles from "./styles";
import { Frame } from '../../Frame'
import { Video } from 'expo-av';

export function Layout({
    urlVideo,
    video,
    presentFullScreen,
    playVideo,
    fullScreenHandler,
    onVideoFinish,
}) {
    return (
        <Frame>
            <Video
                ref={video}
                style={styles.video}
                source={{ uri: urlVideo }}
                // useNativeControls
                resizeMode="contain"
                onLoadStart={presentFullScreen}
                onReadyForDisplay={playVideo}
                onFullscreenUpdate={fullScreenHandler}
                onPlaybackStatusUpdate={status => onVideoFinish(status)}
            />
        </Frame>
    )
}