import React, { useState, useEffect } from "react";
import { Layout } from "./layout";

export const Dashboard = ({ navigation }) => {
  const [videoShow, setvideoShow] = useState(false);
  const [urlVideo, setUrlVideo] = useState(
    "https://player.vimeo.com/external/475218949.hd.mp4?s=ba45e54d6ef6152a1837619dd9e4ce5fe8641ea0&profile_id=175"
  );

  useEffect(() => {}, [videoShow]);

  return (
    <Layout
      videoShow={videoShow}
      setvideoShow={setvideoShow}
      navigation={navigation}
      urlVideo={urlVideo}
    />
  );
};
