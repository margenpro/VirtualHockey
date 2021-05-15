import React from "react";
import { Video } from "./Video/container";
import HomeWork from "./HomeWork/container";

export function Layout({ videoShow, setvideoShow, navigation, urlVideo }) {
  return (
    <React.Fragment>
      {videoShow ? (
        <Video setvideoShow={setvideoShow} urlVideo= {urlVideo}/>
      ) : (
        <HomeWork setvideoShow={setvideoShow} navigation={navigation}/>
      )}
    </React.Fragment>
  );
}
