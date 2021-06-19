import React, { useState, useEffect } from "react";
import { Layout } from "./layout";
import "firebase/auth";
import { useFirebaseApp } from "reactfire";

export function PasswordRecovery({ navigation }) {
  const firebase = useFirebaseApp();
  const [email, setEmail] = useState("");
  const db = firebase.firestore();

  const emailInputHandler = (newValue) => {
    setEmail(newValue);
  };
  const sendPasswordResetEmail = async () => {
    try {
      await firebase.auth().sendPasswordResetEmail(email);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout
      sendPasswordResetEmail={sendPasswordResetEmail}
      emailInputHandler={emailInputHandler}
    />
  );
}
