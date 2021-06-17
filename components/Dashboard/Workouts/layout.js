import React from "react";
import Video from "../Video/container"
import HomeCards from "./HomeCards/container"

export function Layout({ videoShow, setVideoShow, navigation, nroVideo, setNroVideo, earnedPoints, setEarnedPoints }) {
  return (
    <React.Fragment>
      {videoShow ? (
        <Video
          setvideoShow={setVideoShow}
          nroVideo={nroVideo}
          setEarnedPoints={setEarnedPoints}
          earnedPoints={earnedPoints} />
      ) : (
        <HomeCards
          setVideoShow={setVideoShow}
          navigation={navigation}
          setNroVideo={setNroVideo}
          earnedPoints={earnedPoints} />
      )}
    </React.Fragment>
  );
}