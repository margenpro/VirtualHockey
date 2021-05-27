import React, { useEffect, useRef, useState } from "react";
import { Layout } from "./layout";
import * as ScreenOrientation from "expo-screen-orientation";
import { Platform } from "react-native";
import { connect } from 'react-redux'
import { setterUserAction } from '../../../redux/actions/userActions'
import { getFirestore } from '../../../firebase'

const Video = ({ setvideoShow, videos, user, nroVideo, setUser }) => {

  const video = useRef(null);
  const [urlVideo, setUrlVideo] = useState(undefined)
  const db = getFirestore()

  useEffect(() => {
    setUrlVideo(videos.find(v => v.nro === nroVideo).url)
  }, [])

  const onVideoFinish = async playbackStatus => {
    if (playbackStatus.didJustFinish) {
      if (user.lastVideo < videos.length) {
        //actualizar lastVideoWatched del usuario logueado en firebase
        nroVideo++
        try {
          await db.collection("users")
            .doc(user.id)
            .update({
              "lastVideoWatched": nroVideo
            })
          setUser({ lastVideo: nroVideo })
        } catch (error) {
        }
      }

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
    {console.log("vas a ver video: "+nroVideo)}
    {urlVideo && 
    <Layout
      urlVideo={urlVideo}
      video={video}
      presentFullScreen={presentFullScreen}
      playVideo={playVideo}
      fullScreenHandler={fullScreenHandler}
      onVideoFinish={onVideoFinish}
    />
    }
    </>
  );
}
const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    videos: state.videosReducer.videos
  }
}
const actionCreators = {
  setUser: setterUserAction
}

export default connect(mapStateToProps, actionCreators)(Video)