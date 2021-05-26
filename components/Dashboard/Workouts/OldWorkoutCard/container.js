import React, { useState, useEffect } from "react";
import { Image, Text } from "react-native";
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
    {console.log("Numero en OldCard: "+nro)}
    <Layout
      image={placeholder}
      setVideoShow={setVideoShow}
      setNroVideo={setNroVideo}
    />
    </>
  );
};

const mapStateToProps = (state) => ({
  lastVideo: state.userReducer.user.lastVideo,
});

export default connect(mapStateToProps, {})(OldWorkoutCard);
