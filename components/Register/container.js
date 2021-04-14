import React, { useState, useEffect } from "react";
import "firebase/auth";
import { getStorage } from "../../firebase";
import { useFirebaseApp } from "reactfire";
import { Layout } from "./layout";

export function Register({ navigation }) {
  const storage = getStorage();
  const firebase = useFirebaseApp();
  const storageRef = storage.ref();  

  const db = firebase.firestore()

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameExists, setUsernameExists] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [logoUrl, setLogoUrl] = useState();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    storageRef
      .child("images/vh_favico[3].png")
      .getDownloadURL()
      .then(resolve => {
        setLogoUrl(resolve);
      })
      .catch(e => console.log(e.code, e.message));
  }, []);

  // SF Direccionar a la screen Login
  const screenHandler = () => {
    navigation.navigate("Login");
  };

  const userInputHandler = newValue => {
    setUsername(newValue);
    setUsernameExists(false);
  };

  const passInputHandler = newValue => {
    setPassword(newValue);
    setInvalidPassword(false);
  };

  const emailInputHandler = newValue => {
    setEmail(newValue);
    //setInvalidPassword(false);
  };

  const submitHandler = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        db.collection("users").doc(userCredential.user.uid).set({
          username //Validar que el usuario no exista
        })
        screenHandler()
      })
      .catch(error => {
        console.log("hubo un error", error.code, error.message);
        if (error.code === "auth/email-already-exists") setUsernameExists(true);
        else if (error.code === "auth/invalid-password")
          setInvalidPassword(true);
      });
  };

  const showPasswordHandler = newValue => {
    setShowPassword(newValue);
  };

  return (
    <Layout
      userInputHandler={userInputHandler}
      passInputHandler={passInputHandler}
      submitHandler={submitHandler}
      usernameExists={usernameExists}
      invalidPassword={invalidPassword}
      screenHandler={screenHandler}
      logoUrl={logoUrl}
      showPassword={showPassword}
      emailInputHandler={emailInputHandler}
      showPasswordHandler={showPasswordHandler}
    />
  );
}
