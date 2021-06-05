import React, { useEffect, useState } from "react";
import { Layout } from "./layout";
import "firebase/auth";
import { useFirebaseApp } from "reactfire";
import { connect } from "react-redux";
import { setterUserAction } from "../../../../redux/actions/userActions";
import { getStorage } from "../../../../firebase";

const UserAvatar = ({
  navigation,
  setvideoShow,
  user,
  videos,
  setUserRanking,
  name="sample_image",
}) => {
  const DEFAULT_URL = "https://thumbs.dreamstime.com/z/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"
  const firebase = useFirebaseApp();
  const db = firebase.firestore();
  const [profileImage, setProfileImage] = useState(DEFAULT_URL);
  const storage = getStorage();
  const storageRef = storage.ref();
  const URL = "images/sample_image.png"

  useEffect(() => {
    getProfileImage();
  });

  const getProfileImage = async () => {
    let temp;
    await storageRef
      .child(URL)
      .getDownloadURL()
      .then((resolve) => {
        temp = resolve;
      })
      .catch((e) => console.log(e.code, e.message));
    setProfileImage(temp);
  };

  return (
    <>
      <Layout profileImage={profileImage}></Layout>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
  videos: state.videosReducer.videos,
});

const actionCreators = {
  setUserRanking: setterUserAction,
};

export default connect(mapStateToProps, actionCreators)(UserAvatar);
