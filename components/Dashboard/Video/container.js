import React, { useEffect, useRef, useState } from "react";
import { Layout } from "./layout";
import * as ScreenOrientation from "expo-screen-orientation";
import { Platform, Alert } from "react-native";
import { connect } from "react-redux";
import { setterUserAction } from "../../../redux/actions/userActions";
import { getFirestore } from "../../../firebase";
import { assignPoints } from "../../../utils/functions/pointsHandler";

const Video = ({ setvideoShow, videos, user, nroVideo, setUser }) => {
  const video = useRef(null);
  const [urlVideo, setUrlVideo] = useState(undefined);
  const [earnedPoints, setEarnedPoints] = useState(0);
  const db = getFirestore();

  useEffect(() => {
    setUrlVideo(videos.find((v) => v.nro === nroVideo).url);
  }, []);

  const loadErrorHandler = () => {
    Alert.alert(
      "Ooops!",
      "An unexpected error has ocurred, please try again later.",
      [
        {
          onPress: () => setvideoShow(false),
        },
      ]
    );
  };

  const onVideoFinish = async (playbackStatus) => {
    if (playbackStatus.didJustFinish) {
      if (user.lastVideo < videos.length) {
        nroVideo++;
        try {
          await db.collection("users").doc(user.id).update({
            lastVideoWatched: nroVideo,
          });
          setUser({ lastVideo: nroVideo });
        } catch (error) {}
      }
      let points;
      try {
        points = await assignPoints("Video", user, setUser);
      } catch (e) {
        console.log(e);
      }
      if (points > 0) {
        setEarnedPoints(points);
      }
    }
  };

  const showEarnedPoints = () => {
    if (earnedPoints > 0) {
      Alert.alert(
        "Congrats!!",
        "You have earned " + earnedPoints + " points!",
        [
          {
            text: "OK",
          },
        ]
      );
    }
  };

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
          await ScreenOrientation.lockAsync(
            ScreenOrientation.OrientationLock.LANDSCAPE
          );
        }
        break;
      case 2:
        await video.current.stopAsync();
        try {
          if (Platform.OS === "ios") {
            await ScreenOrientation.lockAsync(
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
        showEarnedPoints();
        setvideoShow(false);
        break;
    }
  };

  return (
    <>
      {urlVideo && (
        <Layout
          urlVideo={urlVideo}
          video={video}
          loadErrorHandler={loadErrorHandler}
          presentFullScreen={presentFullScreen}
          playVideo={playVideo}
          fullScreenHandler={fullScreenHandler}
          onVideoFinish={onVideoFinish}
        />
      )}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    videos: state.videosReducer.videos,
  };
};
const actionCreators = {
  setUser: setterUserAction,
};

export default connect(mapStateToProps, actionCreators)(Video);
