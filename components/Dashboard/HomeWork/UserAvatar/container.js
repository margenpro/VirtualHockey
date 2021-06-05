import React, { useEffect, useState } from "react";
import { Layout } from "./layout";
import "firebase/auth";
import { useFirebaseApp } from "reactfire";
import { connect } from "react-redux";
import { setterUserAction } from "../../../../redux/actions/userActions";
import { getStorage } from "../../../../firebase";
import { useIsFocused } from "@react-navigation/native";

const UserAvatar = ({
  navigation,
  setvideoShow,
  user,
  setUserRanking,
  name = "sample_image",
  changeEvent,
}) => {
  const DEFAULT_URL =
    "https://thumbs.dreamstime.com/z/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg";
  const firebase = useFirebaseApp();
  const db = firebase.firestore();
  const [profileImage, setProfileImage] = useState(DEFAULT_URL);
  const storage = getStorage();
  const storageRef = storage.ref();
  const URL = "images/avatars/" + user.username + ".png";

  const isFocused = useIsFocused();

  useEffect(() => {
    getProfileImage();
  });

  useEffect(() => {
    console.log("hcie un re redner de user avatarqwe");
  }, []);

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

  return isFocused ? <Layout profileImage={profileImage}></Layout> : <Layout profileImage={null}></Layout>;
};

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
});

const actionCreators = {
  setUserRanking: setterUserAction,
};

export default connect(mapStateToProps, actionCreators)(UserAvatar);
