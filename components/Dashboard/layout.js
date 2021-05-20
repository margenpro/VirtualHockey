import React from "react";
import Video from "./Video/container";
import HomeWork from "./HomeWork/container";

export function Layout({ videoShow, setvideoShow, navigation, nroVideo }) {
  return (
    <React.Fragment>
      {videoShow ? (
        <Video setvideoShow={setvideoShow} nroVideo={nroVideo}/>
      ) : (
        <HomeWork setvideoShow={setvideoShow} navigation={navigation}/>
      )}
    </React.Fragment>
  );
}
