import React from "react";
import Video from "../Video/container"
import HomeCards from "./HomeCards/container"

export function Layout({ videoShow, setVideoShow, navigation, nroVideo, setNroVideo }) {
  return (
    <React.Fragment>
      {videoShow ? (
        <Video setvideoShow={setVideoShow} nroVideo={nroVideo}/>
      ) : (
        <HomeCards setVideoShow={setVideoShow} navigation={navigation} setNroVideo={setNroVideo}/>
      )}
    </React.Fragment>
  );
}