import React from 'react';
import { Image, Text, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import { Frame } from '../../Frame'
import { Audio, Video } from 'expo-av';

export function Layout({
    //videoUri,
    getUrl
}) {
    const idVideo = "95716154"
    return (
        <Frame>
            <Video
                source={{
                    uri: getUrl() //videoUri,
                }}
                useNativeControls
                resizeMode='contain'
                isLooping
            />
        </Frame>
    );
}