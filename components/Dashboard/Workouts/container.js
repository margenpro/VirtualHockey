import React, { useState, useEffect } from "react";
import { Layout } from "./layout";
import { connect } from 'react-redux'

const Workouts = ({ navigation, user, videos }) => {
  const [videoShow, setVideoShow] = useState(false);
  const [nroVideo, setNroVideo] = useState("")

  useEffect(() => { 
  }, [videoShow]);
 
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
const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    videos: state.videosReducer.videos
  }
}
export default connect(mapStateToProps, {})(Workouts)
/*
import React, { useState, useEffect } from "react";
import { Image, View, Text } from "react-native";
import { Layout } from "./layout";
import { WorkoutCard } from "./WorkoutCard/container";
import { styles } from "./styles";
import { connect } from "react-redux";

function Workouts({ navigation, user, setVideoShow }) {
  const [videoImages, setVideoImages] = useState([{},{},{}]);

  useEffect(() => {
    videosList();
  }, []);

  const videosList = async () => {
    let arrayVideos = [];
    for (let i = lastVideo; i > 0; i--) {
      await storageRef
        .child("images/videoImages/" + i + ".png")
        .getDownloadURL()
        .then((resolve) => {
          arrayVideos[lastVideo - i] = resolve;
        })
        .catch((e) => console.log(e.code, e.message));
    }
    setVideoImages(arrayVideos);
  };

  return (
    <Layout
      username={user.username ? user.username : "Elina"}
      points={user.points ? user.points : "2450"}
      videoImages={videoImages}
      setVideoShow={setVideoShow}
    />
  );
}
const mapStateToProps = (state) => ({
  user: state.userReducer.user,
});

export default connect(mapStateToProps, {})(Workouts);
*/