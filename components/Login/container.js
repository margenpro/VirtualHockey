import React, { useState, useEffect } from "react";
import "firebase/auth";
import { getStorage } from "../../firebase";
import { useFirebaseApp } from "reactfire";
import { Layout } from "./layout";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from 'react-redux'

const Login = ({ navigation, user })  => {

  const storage = getStorage();
  const firebase = useFirebaseApp();
  const storageRef = storage.ref();

  const db = firebase.firestore()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [wrongEmail, setWrongEmail] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);
  const [logoUrl, setLogoUrl] = useState();
  const [showPassword, setShowPassword] = useState(false);

  // useEffect(({usr}) => {
  //   storageRef
  //     .child("images/vh_favico[3].png")
  //     .getDownloadURL()
  //     .then(resolve => {
  //       setLogoUrl(resolve);
  //     })
  //     .catch(e => console.log(e.code, e.message));
  // }, []);

  // SF Direccionar a la screen Register
  const screenHandlerRegister = () => {
    navigation.navigate("Register");
  };

  const getCurrentUserData = async () => {
    try {
      let usr = firebase.auth().currentUser
      let doc = await db.collection("users").doc(usr.uid).get()
      let data = doc.data()
      return data
    } catch (error) {
      throw new Error(error.message)
    }
  }

  const screenHandlerLanding = async () => {
    try {
      let usr = await getCurrentUserData()
      usr.isMember ? navigation.navigate("BottomTab") : navigation.navigate("Landing");
    } catch (error) {
      console.log(error.message)
    }
  };

  const forTesting = () => {
    navigation.navigate("BottomTab");
  };

  const emailInputHandler = newValue => {
    setEmail(newValue);
    setWrongEmail(false);
  };

  const passInputHandler = newValue => {
    setPassword(newValue);
    setWrongEmail(false);
  };

  const submitHandler = async () => {

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
      console.log("logueo exitoso")

      /* await getCurrentUserData()
      setUserData({

      }) */
      screenHandlerLanding()
    } catch (error) {
      console.log("hubo un error", error.code, error.message);
      if (error.code === "auth/user-not-found") setWrongEmail(true);
      else if (error.code === "auth/wrong-password") setWrongPassword(true);
    }
  };

  const showPasswordHandler = newValue => {
    setShowPassword(newValue);
  };

  return (
    <>
    {console.log(user)}
      <Layout
        emailInputHandler={emailInputHandler}
        passInputHandler={passInputHandler}
        submitHandler={submitHandler}
        wrongEmail={wrongEmail}
        screenHandlerLanding={screenHandlerLanding}
        screenHandlerRegister={screenHandlerRegister}
        wrongPassword={wrongPassword}
        // logoUrl={logoUrl}
        showPassword={showPassword}
        showPasswordHandler={showPasswordHandler}
        forTesting={forTesting}
      />
    </>
  );
}
const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Login)