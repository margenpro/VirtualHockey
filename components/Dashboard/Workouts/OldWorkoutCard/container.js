import React, { useState, useEffect } from "react";
import { Layout } from "./layout";
import { connect } from "react-redux";
import { getStorage } from "../../../../firebase";

const OldWorkoutCard = ({ navigation, image, nro, setVideoShow, setNroVideo }) => {
  const placeholder = 'https://app.virtualhockey.com/wp-content/uploads/2020/11/1.png';

  useEffect(()=> {
    setNroVideo(nro)
  },[])

  return (
    <>
    <Layout
      image={image}
      setVideoShow={setVideoShow}
      setNroVideo={setNroVideo}
      nro={nro}
    />
    </>
  );
};

const mapStateToProps = (state) => ({
  lastVideo: state.userReducer.user.lastVideo,
});

export default connect(mapStateToProps, {})(OldWorkoutCard);
