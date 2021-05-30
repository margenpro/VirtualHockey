import React, { useState, useEffect } from "react";
import { Layout } from "./layout";
import { connect } from "react-redux";
import { getStorage } from "../../../../firebase";

function HomeCards({ navigation, user, setVideoShow, setNroVideo }) {
  const storage = getStorage();
  const storageRef = storage.ref();

  const [videoImages, setVideoImages] = useState([]);
  const lastVideo = user.lastVideo
  useEffect(() => {
    videosList();
  }, []);

  const videosList = async () => {
    let arrayVideos = []
    for (let i = (lastVideo - 1); i > 0 ; i--) {
      await storageRef
        .child("images/videoImages/" + i + ".png")
        .getDownloadURL()
        .then((resolve) => {
          arrayVideos[(lastVideo - i)] = {
            url: resolve,
            id: i
          }
        })
        .catch((e) => console.log(e.code, e.message));
    }
    setVideoImages(arrayVideos);
  };

  return (
    <>
      <Layout
        username={user.username}
        points={user.points}
        videoImages={videoImages}
        setVideoShow={setVideoShow}
        setNroVideo={setNroVideo}
      />
    </>
  );
}
const mapStateToProps = (state) => ({
  user: state.userReducer.user,
});

export default connect(mapStateToProps, {})(HomeCards);
