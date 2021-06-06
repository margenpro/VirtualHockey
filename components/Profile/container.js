import React, { useState, useEffect } from "react";
import "firebase/auth";
import { getStorage } from "../../firebase";
import { useFirebaseApp } from "reactfire";
import { Layout } from "./layout";
import * as ImagePicker from "expo-image-picker";
import { connect } from "react-redux";
import { signOutAction } from "../../redux/actions/userActions";
import {} from "../../";

const Profile = ({ navigation, user, signOutUser }) => {
  const storage = getStorage();
  const firebase = useFirebaseApp();

  const db = firebase.firestore();
  const [image, setImage] = useState(null);
  const [points, setPoints] = useState(user.points ? user.points : 0);
  const [email, setEmail] = useState(user.email ? user.email : "no@email.com");
  const [username, setUsername] = useState(
    user.username ? user.username : "noLog"
  );
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  // const [usernameExists, setUsernameExists] = useState(0);
  const [invalidPassword, setInvalidPassword] = useState({
    invalid: false,
    msg: "",
  });

  const uploadImage = async (image) => {
    const response = await fetch(image);
    const blob = await response.blob();
    var ref =
      user.username &&
      firebase
        .storage()
        .ref()
        .child("/images/avatars/" + user.username + ".png");
    return ref.put(blob);
  };

  const askPermissions = async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need media library permissions to make this work!");
      } else {
        return true;
      }
    } catch (e) {
      console.log(e);
    }
    // }
  };
  // NOT WORKING ON IOS SIMULATOR, MIGHT BE RELATED TO A BUG ON IOS
  const changeAvatar = async () => {
    if (await askPermissions()) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });
      if (!result.cancelled) {
        await uploadImage(result.uri);
        setImage(result.uri);
      }
    }
  };

  const signOut = () => {
    console.log("signing out");
    signOutUser();
    navigation.navigate("Login");
  };

  const oldPassInputHandler = (newValue) => {
    setOldPassword(newValue);
    // setInvalidPassword(false);
  };
  const newPassInputHandler = (newValue) => {
    setNewPassword(newValue);
    // setInvalidPassword(false);
  };
  const repeatPassInputHandler = (newValue) => {
    setRepeatPassword(newValue);
    // setInvalidPassword(false);
  };

  const showPasswordHandler = (newValue) => {
    setShowPassword(newValue);
  };

  const submitHandler = () => {
    if (newPassword.length && repeatPassword.length && newPassword === repeatPassword) {
      console.log("do something");
    } else {
      console.log("passwords do not match");
    }
  };

  return (
    <Layout
      oldPassInputHandler={oldPassInputHandler}
      newPassInputHandler={newPassInputHandler}
      repeatPassInputHandler={repeatPassInputHandler}
      submitHandler={submitHandler}
      invalidPassword={invalidPassword}
      showPasswordHandler={showPasswordHandler}
      username={username}
      changeAvatar={changeAvatar}
      email={email}
      points={points ? points : 0}
      image={image}
      signOut={signOut}
      newPassword={newPassword}
      oldPassword={oldPassword}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    videos: state.videosReducer.videos,
  };
};

const actionCreators = {
  signOutUser: signOutAction,
};

export default connect(mapStateToProps, actionCreators)(Profile);
