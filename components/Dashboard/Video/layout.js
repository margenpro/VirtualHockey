import React from 'react';
import styles from "./styles";
import { WebView } from 'react-native-webview'


export function Layout({
    videoUri,
    getUrl
}) {
    const vid = videoUri()
    return (

        <WebView
            source={{ uri: "https://player.vimeo.com/external/475218949.hd.mp4?s=ba45e54d6ef6152a1837619dd9e4ce5fe8641ea0&profile_id=175" + "&autoplay=1&mute=1&showinfo=0&controls=1&fullscreen=1" }}
            style={{ flex: 1, alignSelf: 'stretch' }}
            allowsFullscreenVideo={true}
            scalesPageToFit={true}
            originWhitelist={['https://*']}
            allowsFullscreenVideo={true}
            allowsInlineMediaPlayback={true}
            javaScriptEnabled={true}
            scalesPageToFit={true}
            domStorageEnabled={true}
            scrollEnabled={false}
            automaticallyAdjustContentInsets={true}
            startInLoadingState={true}
            injectedJavaScript="document.body.scrollHeight;"
            mediaPlaybackRequiresUserAction={false}
        />
    );
}