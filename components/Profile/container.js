import React, { useState, useEffect } from "react";
import "firebase/auth";
import { Alert } from "react-native";
import { getStorage } from "../../firebase";
import { useFirebaseApp } from "reactfire";
import { Layout } from "./layout";
import * as ImagePicker from "expo-image-picker";
import { connect } from "react-redux";
import { signOutAction } from "../../redux/actions/userActions";

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
  const [changed, setChanged] = useState(true);
  changed;

  const [newWrongPassword, setNewWrongPassword] = useState("");
  const [repeatWrongPassword, setRepeatWrongPassword] = useState("");

  // let textInput;

  // const [usernameExists, setUsernameExists] = useState(0);
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
    try {
      firebase.auth().signOut();
    } catch (error) {
      console.log(error);
    }
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

  const changePassword = async () => {
    var user = firebase.auth().currentUser;
    try {
      await user.updatePassword(newPassword);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  };

  const submitHandler = async () => {
    setNewWrongPassword("");
    setRepeatWrongPassword("");
    let result;
    if (
      newPassword.length &&
      repeatPassword.length &&
      newPassword === repeatPassword
    ) {
      try {
        result = await changePassword();
        if (result) {
          console.log("password changed successfully");
          setOldPassword("");
          setNewPassword("");
          setRepeatPassword("");
          console.log(newPassword);
          Alert.alert("The password has been changed");
          setChanged(false);
          setChanged(true);
          // navigation.navigate("Workouts");
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log("no coinciden");
      setRepeatWrongPassword({ msg: "The passwords do not match" });
      setNewWrongPassword({ msg: "The passwords do not match" });

      console.log(newWrongPassword);
      console.log(repeatWrongPassword);
    }
  };

  return (
    <Layout
      oldPassInputHandler={oldPassInputHandler}
      newPassInputHandler={newPassInputHandler}
      repeatPassInputHandler={repeatPassInputHandler}
      submitHandler={submitHandler}
      showPasswordHandler={showPasswordHandler}
      username={username}
      changeAvatar={changeAvatar}
      email={email}
      points={points ? points : 0}
      image={image}
      signOut={signOut}
      newPassword={newPassword}
      oldPassword={oldPassword}
      newWrongPassword={newWrongPassword}
      repeatWrongPassword={repeatWrongPassword}
      changed={changed}
      // textInput={textInput}
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
