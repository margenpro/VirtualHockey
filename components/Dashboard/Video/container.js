import React, { useEffect, useRef, useState } from "react";
import { Layout } from "./layout";
import * as ScreenOrientation from "expo-screen-orientation";
import { Platform } from "react-native";
import { connect } from 'react-redux'

function Video({ setvideoShow, videos, user, nroVideo }) {

  const video = useRef(null);
  const [urlVideo, setUrlVideo] = useState("")

  useEffect(() => {
    const getVideoUrl = (nro) => {
      const vid = videos.find(v => v.nro === nro)
      return vid.url
    }
    const url = getVideoUrl(nroVideo)

    setUrlVideo(url)
  })

  const onVideoFinish = playbackStatus => {
    if (playbackStatus.didJustFinish) {
      console.log("video Terminado")
      //habilitar el proximo video en current user
      if (user.lastVideo < videos.lenght()) {
        user.lastVideo = user.lastVideo + 1
      }
      //actualizar lastVideo en firebase

    }
  }

  const presentFullScreen = () => {
    video.current.presentFullscreenPlayer();
  };
  const playVideo = () => {
    video.current.playAsync();
  };
  const fullScreenHandler = async ({ fullscreenUpdate }) => {
    switch (fullscreenUpdate) {
      case 0:
        if (Platform.OS === "ios" || Platform.OS === "android") {
          ScreenOrientation.lockAsync(
            ScreenOrientation.OrientationLock.LANDSCAPE
          );
        }
        break;
      case 2:
        await video.current.stopAsync();
        try {
          if (Platform.OS === "ios") {
            ScreenOrientation.lockAsync(
              ScreenOrientation.OrientationLock.PORTRAIT_UP
            );
          } else if (Platform.OS === "android") {
            await ScreenOrientation.lockAsync(
              ScreenOrientation.OrientationLock.PORTRAIT
            );
          }
        } catch (e) {
          console.log(e);
        }
        setvideoShow(false);
        break;
    }
  };

  return (
    <>
      <Layout
        urlVideo={urlVideo}
        video={video}
        presentFullScreen={presentFullScreen}
        playVideo={playVideo}
        fullScreenHandler={fullScreenHandler}
        onVideoFinish={onVideoFinish}
      />
    </>
  );
}
const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    videos: state.videosReducer.videos
  }
}
export default connect(mapStateToProps, {})(Video)