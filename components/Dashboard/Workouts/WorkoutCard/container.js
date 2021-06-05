import React, { useState, useEffect } from "react";
import { Image, Text } from "react-native";
import { Layout } from "./layout";
import { connect } from "react-redux";
import { getStorage } from "../../../../firebase";

const WorkoutCard = ({
  navigation,
  user,
  setVideoShow,
  setNroVideo,
  videos,
}) => {
  const lastVideo = user.lastVideo;
  const video = () => {
    try {
      videos.find((v) => v.nro === lastVideo);
    } catch (e) {
      console.log(e);
    }
  };
  const videoDescription = video.description;
  const videoTitle = video.title;

  const storage = getStorage();
  const storageRef = storage.ref();

  const [videoImage, setVideoImage] = useState();

  useEffect(() => {
    getUrlVideoImage();
  }, []);

  const getUrlVideoImage = async () => {
    await storageRef
      .child("images/videoImages/" + lastVideo + ".png")
      .getDownloadURL()
      .then((resolve) => {
        setVideoImage(resolve);
      })
      .catch((e) => console.log(e.code, e.message));
  };

  const handleOnPress = () => {
    setNroVideo(lastVideo);
    setVideoShow(true);
  };

  return (
    <>
      <Layout
        videoImage={videoImage}
        videoDescription={videoDescription}
        handleOnPress={handleOnPress}
        videoTitle={videoTitle}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
  videos: state.videosReducer.videos,
});

export default connect(mapStateToProps, {})(WorkoutCard);
