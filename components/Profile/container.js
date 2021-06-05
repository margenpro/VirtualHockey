import React, { useState, useEffect } from "react";
import "firebase/auth";
import { getStorage, getFirestore } from "../../firebase";
import { useFirebaseApp } from "reactfire";
import { Layout } from "./layout";
import * as ImagePicker from "expo-image-picker";
import { Platform } from "react-native";

export function Profile({ navigation }) {
  const storage = getStorage();
  const firebase = useFirebaseApp();
  const storageRef = storage.ref();

  const db = firebase.firestore();
  const [image, setImage] = useState(null);
  const [points, setPoints] = useState("2450");
  const [email, setEmail] = useState("Elina@mail.com");
  const [username, setUsername] = useState("Elina");
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

  // useEffect(() => {
  //   storageRef
  //     .child("images/vh_favico[3].png")
  //     .getDownloadURL()
  //     .then(resolve => {
  //       setLogoUrl(resolve);
  //     })
  //     .catch(e => console.log(e.code, e.message));
  // }, []);
  const askPermissions = async () => {
    // if (Platform.OS !== "web") {
    //   const { status } =
    //     await ImagePicker.requestMediaLibraryPermissionsAsync();
    //   if (status !== "granted") {
    //     alert("Sorry, we need media library permissions to make this work!");
    //   } else {
    //     return true;
    //   }
    // } else {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    console.log(status);
    if (status !== "granted") {
      alert("Sorry, we need media library permissions to make this work!");
    } else {
      return true;
    }
    // }
  };
  const changeAvatar = async () => {
    if (await askPermissions()) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        // allowsEditing: true,
        // aspect: [4, 3],
        quality: 1,
      });
      console.log(result);
      if (!result.cancelled) {
        setImage(result.uri);
      }
    }
  };
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
    />
  );
}
