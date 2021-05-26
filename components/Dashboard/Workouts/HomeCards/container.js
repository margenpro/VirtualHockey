import React, { useState, useEffect } from "react";
import { Layout } from "./layout";
import { connect } from "react-redux";
import { getStorage} from "../../../../firebase";

function HomeCards({ navigation, user, setVideoShow, setNroVideo }) {
  const storage = getStorage();
  const storageRef = storage.ref();
  
  const [videoImages, setVideoImages] = useState([{},{},{}]);

  useEffect(() => {
    videosList();
  }, []);

  const videosList = async () => {
    let arrayVideos = [];
    for (let i = user.lastVideo; i > 0; i--) {
      await storageRef
        .child("images/videoImages/" + i + ".png")
        .getDownloadURL()
        .then((resolve) => {
          arrayVideos[user.lastVideo - i] = resolve;
        })
        .catch((e) => console.log(e.code, e.message));
    }
    setVideoImages(arrayVideos);
  };

  return (
    <>
    <Layout
      username={user.username ? user.username : "Elina"}
      points={user.points ? user.points : "2450"}
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