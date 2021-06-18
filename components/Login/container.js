import React, { useState, useCallback, useEffect, useRef } from "react";
import { useFocusEffect } from "@react-navigation/native";
import "firebase/auth";
import { getStorage } from "../../firebase";
import { useFirebaseApp } from "reactfire";
import { Layout } from "./layout";
import { connect } from "react-redux";
import { setterUserAction } from "../../redux/actions/userActions";
import { setVideosAction } from "../../redux/actions/videosActions";
import { assignPoints } from "../../utils/functions/pointsHandler";
import { Alert } from "react-native";

const Login = ({ navigation, user, setUser, setVideos, videos }) => {
  const storage = getStorage();
  const firebase = useFirebaseApp();
  const storageRef = storage.ref();

  const db = firebase.firestore();

  const [email, setEmail] = useState("");
  const emailInput = useRef(null);
  const [password, setPassword] = useState("");
  const passInput = useRef(null);
  const [wrongEmail, setWrongEmail] = useState(false);
  const [wrongPassword, setWrongPassword] = useState({
    code: "",
    msg: "",
  });
  const [logoUrl, setLogoUrl] = useState();
  const [loading, setLoading] = useState(false);

  useFocusEffect(
    useCallback(() => {
      emailInput.current.clear();
    }, [])
  );

  const clearForm = () => {
    console.log("Limpiando form en Login");
    emailInputHandler("");
  };

  const screenHandlerRegister = () => {
    navigation.navigate("Register");
  };

  const toPassRecovery = () => {
    navigation.navigate("PasswordRecovery");
  };

  const getCurrentUserData = async () => {
    try {
      let usr = firebase.auth().currentUser;
      let doc = await db.collection("users").doc(usr.uid).get();
      let data = doc.data();
      data.id = usr.uid;
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const getPosition = async (points) => {
    let rank = 1;
    try {
      const snap = await db
        .collection("users")
        .where("points", ">", points)
        .get();
      snap.forEach(() => {
        rank++;
      });
      return rank;
    } catch (e) {
      console.log(e.message);
    }
  };

  const screenHandlerLanding = async () => {
    try {
      let usr = await getCurrentUserData();
      usr.role === 2 || usr.role === 3
        ? navigation.navigate("BottomTab")
        : navigation.navigate("Landing");
    } catch (error) {
      console.log(error.message);
    }
  };

  const forTesting = () => {
    navigation.navigate("BottomTab");
  };

  const toPayments = () => {
    navigation.navigate("Payment");
  };

  const emailInputHandler = (newValue) => {
    setEmail(newValue);
    setWrongEmail(false);
  };

  const passInputHandler = (newValue) => {
    setPassword(newValue);
    setWrongPassword({ code: "", msg: "" });
  };

  const getAllVideos = async () => {
    try {
      let videosList = [];
      let videos = await db.collection("videos").get();

      videos.forEach((video) => {
        videosList.push(video.data());
      });
      return videosList;
    } catch (error) {
      alert(error);
    }
  };

  const showEarnedPoints = (earnedPoints) => {
    if (earnedPoints > 0) {
      Alert.alert(
        "Welcome Back!!",
        "You have earned " + earnedPoints + " points!",
        [
          {
            text: "OK",
          },
        ]
      );
    }
  };

  const submitHandler = async () => {
    setLoading(true);
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      const data = await getCurrentUserData();
      const position = await getPosition(data.points);
      const signInDate = firebase.auth().currentUser.metadata.lastSignInTime;
      setUser({
        id: data.id,
        email,
        username: data.username,
        role: data.role,
        paymentDate: data.paymentDate,
        lastVideo: data.lastVideoWatched,
        points: data.points,
        lastSignIn: signInDate,
        position,
      });
      let videosList = await getAllVideos();

      const points = await assignPoints("Login", data, setUser);
      showEarnedPoints(points);

      setVideos(videosList);
      screenHandlerLanding();
    } catch (error) {
      setWrongPassword({
        code: "incorrect-data",
        msg: "Invalid email or password",
      });
    }
    setLoading(false);
  };

  return (
    <Layout
      emailInputHandler={emailInputHandler}
      passInputHandler={passInputHandler}
      submitHandler={submitHandler}
      screenHandlerLanding={screenHandlerLanding}
      screenHandlerRegister={screenHandlerRegister}
      wrongPassword={wrongPassword}
      forTesting={forTesting}
      toPayments={toPayments}
      loading={loading}
      emailInput={emailInput}
      passInput={passInput}
      toPassRecovery={toPassRecovery}
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
  setUser: setterUserAction,
  setVideos: setVideosAction,
};

export default connect(mapStateToProps, actionCreators)(Login);
