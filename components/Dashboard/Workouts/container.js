import React, { useState, useEffect } from "react";
import { Layout } from "./layout";
import { connect } from "react-redux";

const Workouts = ({ navigation, user, videos }) => {
  const [videoShow, setVideoShow] = useState(false);
  const [nroVideo, setNroVideo] = useState("");
  /*
  useEffect(() => { 
  }, [videoShow]);
 */

  return (
    <>
      <Layout
        videoShow={videoShow}
        setVideoShow={setVideoShow}
        navigation={navigation}
        nroVideo={nroVideo}
        setNroVideo={setNroVideo}
      />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    videos: state.videosReducer.videos,
  };
};
export default connect(mapStateToProps, {})(Workouts);
