import React, { useState, useEffect } from "react";
import "firebase/auth";
import { getStorage } from "../../firebase";
import { useFirebaseApp } from "reactfire";
import { Layout } from "./layout";
import * as ImagePicker from "expo-image-picker";
import { connect } from "react-redux";

const Profile = ({ navigation, user }) => {
  const storage = getStorage();
  const firebase = useFirebaseApp();

  const db = firebase.firestore();
  const [image, setImage] = useState(null);
  const [points, setPoints] = useState(user.points);
  const [email, setEmail] = useState(user.email);
  const [username, setUsername] = useState(user.username);
  const [password, setPassword] = useState("");
  const [emailExists, setEmailExists] = useState({ exists: false, msg: "" });
  // const [usernameExists, setUsernameExists] = useState(0);
  const [usernameExists, setUsernameExists] = useState({
    exists: false,
    msg: "",
  });
  const [invalidPassword, setInvalidPassword] = useState({
    invalid: false,
    msg: "",
  });
  const [logoUrl, setLogoUrl] = useState();
  const [showPassword, setShowPassword] = useState(false);

  const uploadImage = async (image) => {
    const response = await fetch(image);
    const blob = await response.blob();
    var ref = firebase
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

  useEffect(() => {}, [image]);

  const screenHandler = () => {
    navigation.navigate("Login");
  };

  const emailInputHandler = (newValue) => {
    setEmail(newValue);
    setEmailExists({ exists: false });
  };

  const userInputHandler = (newValue) => {
    setUsername(newValue);
    setUsernameExists({ exists: false });
  };

  const passInputHandler = (newValue) => {
    setPassword(newValue);
    setInvalidPassword(false);
  };

  const showPasswordHandler = (newValue) => {
    setShowPassword(newValue);
  };

  const submitHandler = async () => {
    try {
      const temp = await checkIfUsernameExists();

      if (!temp) {
        await createUser();
        screenHandler();
      }
    } catch (error) {
      if (error.code === "username-exists" || error.code === "empty-username")
        setUsernameExists({ exists: true, msg: error.message });
      else if (
        error.code === "auth/email-already-in-use" ||
        error.code === "auth/invalid-email"
      )
        setEmailExists({ exists: true, msg: error.message });
      else if (error.code === "auth/weak-password")
        setInvalidPassword({ invalid: true, msg: error.message });
    }
  };

  return (
    <Layout
      userInputHandler={userInputHandler}
      passInputHandler={passInputHandler}
      submitHandler={submitHandler}
      invalidPassword={invalidPassword}
      screenHandler={screenHandler}
      showPassword={showPassword}
      emailInputHandler={emailInputHandler}
      showPasswordHandler={showPasswordHandler}
      emailExists={emailExists}
      username={username}
      changeAvatar={changeAvatar}
      email={email}
      points={points}
      image={image}
    />
  );
};

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
  videos: state.videosReducer.videos,
});

export default connect(mapStateToProps, {})(Profile);
