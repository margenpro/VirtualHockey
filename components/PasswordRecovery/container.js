import React, { useState } from "react";
import { Layout } from "./layout";
import "firebase/auth";
import { useFirebaseApp } from "reactfire";
import { Alert } from "react-native";

export function PasswordRecovery({ navigation }) {
  const firebase = useFirebaseApp();
  const [email, setEmail] = useState("");

  const emailInputHandler = (newValue) => {
    setEmail(newValue);
  };
  const sendPasswordResetEmail = async () => {
    try {
      await firebase.auth().sendPasswordResetEmail(email);
      Alert.alert(
        "Password Recovery Sent",
        "Please check your email to find a recovery link.",
        [
          {
            text: "OK",
          }
        ],
      )
      toLogin()
    } catch (error) {
      console.log(error);
    }
  };
  const toLogin = () => {
    navigation.navigate("Login");
  };
  return (
    <Layout
      sendPasswordResetEmail={sendPasswordResetEmail}
      emailInputHandler={emailInputHandler}
      toLogin={toLogin}
    />
  );
}
