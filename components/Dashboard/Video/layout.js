import React from 'react';
import { Image, Text, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import { WebView } from 'react-native-webview';
import { Frame } from '../../Frame'


export function Layout({

}) {
    const idVideo = "95716154"

    return (
        <Frame>
            <WebView
                source={{ html: '<iframe width="100%" height="50%" src="https://www.youtube.com/embed/cqyziA30whE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>' }}
                style={{ marginTop: 20 }}
            />
        </Frame>
    );
}