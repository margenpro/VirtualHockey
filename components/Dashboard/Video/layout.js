import React from 'react';
import styles from "./styles";
import { View } from 'react-native'
import { WebView } from 'react-native-webview'

export function Layout({
    videoUri,
    getUrl
}) {
    const vid = videoUri()

    return (
            <WebView
                source={{
                    // uri: "https://vimeo.com/495050901/21df89583c?playsinline=0"
                    html: '<iframe src="https://player.vimeo.com/video/495050901?autoplay=1&playsinline=0" width="640" height="480" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>'
                }}
                style={{ flex: 1 }}
                // injectedJavaScript='document.getElementsByTagName("iframe")[0].pause();'
                allowsFullscreenVideo={true}
                scalesPageToFit={false}
                originWhitelist={['https://*']}
                allowsFullscreenVideo={true}
                allowsInlineMediaPlayback={true}
                javaScriptEnabled={true}
                scalesPageToFit={true}
                domStorageEnabled={true}
                scrollEnabled={false}
                automaticallyAdjustContentInsets={false}
                startInLoadingState={true}
                mediaPlaybackRequiresUserAction={false}
                useWebKit={true}
            />
            );
}