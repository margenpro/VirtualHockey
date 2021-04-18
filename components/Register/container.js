import React, { useState, useEffect } from "react";
import "firebase/auth";
import { getStorage, getFirestore } from "../../firebase";
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
  const [emailExists, setEmailExists] = useState(false);
  // const [usernameExists, setUsernameExists] = useState(0);
  const [usernameExistsDisplay, setUsernameExistsDisplay] = useState(false);
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

  const emailInputHandler = newValue => {
    setEmail(newValue);
    setEmailExists(false);
  };

  const userInputHandler = newValue => {
    setUsername(newValue);
    setUsernameExistsDisplay(false)
  };

  const passInputHandler = newValue => {
    setPassword(newValue);
    setInvalidPassword(false);
  };

  const showPasswordHandler = newValue => {
    setShowPassword(newValue);
  };

  const submitHandler = async () => {
    console.log("empezando el submit")
    try {
      const temp = await checkIfUsernameExists(username)
      console.log(temp)
      if (!temp) {
        console.log("empezando a crear usuario")
        createUser()
        screenHandler()
      } else {
        console.log("no creo el usuario")
        setUsernameExistsDisplay(true)
        throw new Error("auth/username-exists")
      }
    }
    catch (e) {
      console.log(e.code, e.message)
    }
  };

  const checkIfUsernameExists = async (username) => {
    let retorno = false
    console.log("chequeando si el usuario existe")
    try {
      const db = getFirestore()
      let querySnapshot = await db.collection("users").where("username", "==", username)
        .get()
      if (querySnapshot.docs[0] != undefined) {
        console.log("user already exists in database")
        retorno = true
      }
    }
    catch (error) {
      console.log(error)
      retorno = true
    }
    finally { return retorno }
  }

  const createUser = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        db.collection("users").doc(userCredential.user.uid).set({
          username,
          isMember: false
        })
        console.log("usuario creado " + username)
      })
      .catch(error => {
        console.log("hubo un error", error.code, error.message);
        if (error.code === "auth/email-already-exists") setEmailExists(true);
        else if (error.code === "auth/invalid-password") setInvalidPassword(true);
      });
  }

  return (
    <Layout
      userInputHandler={userInputHandler}
      passInputHandler={passInputHandler}
      submitHandler={submitHandler}
      invalidPassword={invalidPassword}
      screenHandler={screenHandler}
      logoUrl={logoUrl}
      showPassword={showPassword}
      emailInputHandler={emailInputHandler}
      showPasswordHandler={showPasswordHandler}
      usernameExistsDisplay={usernameExistsDisplay}
      emailExists={emailExists}
    />
  );
}
