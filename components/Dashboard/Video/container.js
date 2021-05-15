import React, { useRef } from "react";
import { Layout } from "./layout";
import * as ScreenOrientation from "expo-screen-orientation";
import { Platform } from "react-native";

export function Video({ setvideoShow, urlVideo }) {
  const video = useRef(null);

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
        console.log("-----------------");
        console.log("2");
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
      />
    </>
  );
}
