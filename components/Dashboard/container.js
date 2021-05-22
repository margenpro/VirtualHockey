import React, { useState, useEffect } from "react";
import { Layout } from "./layout";
import { connect } from 'react-redux'

const Dashboard = ({ navigation, user, videos }) => {
  const [videoShow, setvideoShow] = useState(false);
  const [nroVideo, setNroVideo] = useState("")

  useEffect(() => { 
    const lastVideo = user.lastVideo == 0 ? 1: user.lastVideo
    setNroVideo(lastVideo)
  }, [videoShow]);

  return (
    <>
      <Layout
        videoShow={videoShow}
        setvideoShow={setvideoShow}
        navigation={navigation}
        nroVideo={nroVideo}
      />
    </>
  );
};
const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    videos: state.videosReducer.videos
  }
}
export default connect(mapStateToProps, {})(Dashboard)