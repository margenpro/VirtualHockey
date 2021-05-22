import React, { useState, useEffect } from "react";
import "firebase/auth";
import { getStorage, getFirestore } from "../../firebase";
import { useFirebaseApp } from "reactfire";
import { Layout } from "./layout";

export function Register({ navigation }) {
  const storage = getStorage();
  const firebase = useFirebaseApp();
  const storageRef = storage.ref();

  const db = firebase.firestore();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
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

  const screenHandler = () => {
    navigation.navigate("Login");
  };

  const handleKeyDown = (e) => {
    if (e.nativeEvent.key == "Enter") {
      // CURRENTLY NOT WORKING
    }
  };

  const showPasswordHandler = (newValue) => {
    setShowPassword(newValue);
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

  const checkIfUsernameExists = async () => {
    if (username.match(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/))
      throw {
        code: "empty-username",
        message: "Username cannot contain white spaces or special characters",
      };
    if (username.trim() === "")
      throw {
        code: "empty-username",
        message: "You must enter a valid username",
      };

    try {
      const db = getFirestore();
      let querySnapshot = await db
        .collection("users")
        .where("username", "==", username)
        .get();
      if (querySnapshot.docs[0] != undefined) {
        throw {
          code: "username-exists",
          message: `The username ${username} is already in use`,
        };
      }
    } catch (error) {
      throw error;
    }
  };

  const createUser = async () => {
    try {
      const userCreds = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      db.collection("users").doc(userCreds.user.uid).set({
        username,
        role: 1,
        paymentDate: null,
        lastVideo: 0,
        points: 0,
      })

      return {code: null}

      return { code: null };
    } catch (error) {
      console.log(error.code);

      throw { code: error.code, message: error.message };
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
      usernameExists={usernameExists}
      emailExists={emailExists}
      handleKeyDown={handleKeyDown}
    />
  );
}
