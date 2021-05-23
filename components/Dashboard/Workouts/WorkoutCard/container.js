import React, { useState, useEffect } from "react";
import { Image, Text } from "react-native";
import { Layout } from "./layout";
import { connect } from "react-redux";
import { getStorage } from "../../../../firebase";

const WorkoutCard = ({ navigation, lastVideo }) => {
  const placeholder = "../../../../assets/images/card.png";
  const videoDescription =
    "Hands and puck skills are a big part of this workout. Work on your dexterity while pushing your fitness limits";

  const storage = getStorage();
  const storageRef = storage.ref();

  const [videoImage, setVideoImage] = useState(placeholder);

  useEffect(() => {
    const getUrlVideoImage = async () => {
      const nextVideo = parseInt(lastVideo + 1);
      await storageRef
        .child("images/videoImages/" + nextVideo + ".png")
        .getDownloadURL()
        .then((resolve) => {
          setVideoImage(resolve);
        })
        .catch((e) => console.log(e.code, e.message));
    };

    getUrlVideoImage();
  }, []);

  return <Layout videoImage={videoImage} videoDescription={videoDescription}/>;
};

const mapStateToProps = (state) => ({
  lastVideo: state.userReducer.user.lastVideo,
});

export default connect(mapStateToProps, {})(WorkoutCard);
