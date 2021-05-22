import React, { useState, useEffect } from "react";
import "firebase/auth";
import { getStorage } from "../../firebase";
import { useFirebaseApp } from "reactfire";
import { Layout } from "./layout";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
// import { UserContext } from "../../context/userContext";
import { setterUserAction } from "../../redux/actions/userActions";
import { setVideosAction } from "../../redux/actions/videosActions";

const Login = ({ navigation, user, setUser, setVideos, videos }) => {
  const storage = getStorage();
  const firebase = useFirebaseApp();
  const storageRef = storage.ref();

  const db = firebase.firestore();

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

  const handleKeyDown = (e) => {
    if (e.nativeEvent.key == "Enter") {
      // CURRENTLY NOT WORKING
    }
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

  const emailInputHandler = (newValue) => {
    setEmail(newValue);
    setWrongEmail(false);
  };

  const passInputHandler = (newValue) => {
    setPassword(newValue);
    setWrongEmail(false);
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

  const submitHandler = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      const data = await getCurrentUserData();
      setUser({
        id: data.id,
        email,
        username: data.username,
        role: data.role,
        lastVideo: data.lastVideoWatched,
        points: data.points,
      });
      let videosList = await getAllVideos();
      setVideos(videosList);
      screenHandlerLanding();
    } catch (error) {
      if (error.code === "auth/user-not-found") setWrongEmail(true);
      else if (error.code === "auth/wrong-password") setWrongPassword(true);
    }
  };

  const showPasswordHandler = (newValue) => {
    setShowPassword(newValue);
  };

  return (
    <Layout
      emailInputHandler={emailInputHandler}
      passInputHandler={passInputHandler}
      submitHandler={submitHandler}
      wrongEmail={wrongEmail}
      screenHandlerLanding={screenHandlerLanding}
      screenHandlerRegister={screenHandlerRegister}
      wrongPassword={wrongPassword}
      showPassword={showPassword}
      showPasswordHandler={showPasswordHandler}
      forTesting={forTesting}
      handleKeyDown={handleKeyDown}
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
