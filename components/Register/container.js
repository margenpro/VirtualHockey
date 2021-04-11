import React, { useState } from "react";
import "firebase/auth";
import { useFirebaseApp } from "reactfire";
import { Layout } from "./layout";

export function Register({ navigation }) {
  const firebase = useFirebaseApp();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameExists, setUsernameExists] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);

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

  const submitHandler = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(username, password)
      .then(userCredential => {
        // Signed in
        console.log("user created", userCredential.user);
        // ...
      })
      .catch(error => {
        console.log("hubo un error", error.code, error.message);
        if (error.code === "auth/email-already-exists") setUsernameExists(true);
        else if (error.code === "auth/invalid-password")
          setInvalidPassword(true);
      });
  };

  return (
    <Layout
      userInputHandler={userInputHandler}
      passInputHandler={passInputHandler}
      submitHandler={submitHandler}
      usernameExists={usernameExists}
      invalidPassword={invalidPassword}
      screenHandler={screenHandler}
    />
  );
}
