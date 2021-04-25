import React from 'react';
import { Image, Text, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import { WebView } from 'react-native-webview';
import { Frame } from '../../Frame'
import { Audio, Video } from 'expo-av';

export function Layout({
    getUrl
}) {
    const idVideo = "95716154"
    return (
        <Frame>
            {/* <WebView
                source={{ html: '<iframe width="100%" height="50%" src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>' }}
                style={{ marginTop: 20 }}
            /> */}
             <Video
        source={{
          uri: getUrl(),
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
      />
        </Frame>
    );
}