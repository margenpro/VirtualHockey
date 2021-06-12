import React, { useState, useEffect, useContext } from "react";
import { Layout } from "./layout";
import profileImage from "../../../assets/images/user.jpg";
import "firebase/auth";
import { firestore, useFirebaseApp } from "reactfire";
import { connect } from "react-redux";
import { setterUserAction } from "../../../redux/actions/userActions";
import { useIsFocused } from "@react-navigation/native";
import { getPlatformOrientationLockAsync } from "expo-screen-orientation";

const HomeWork = ({ navigation, setvideoShow, user, videos, setUser }) => {
  const firebase = useFirebaseApp();
  // const db = firebase.firestore();

  // const [userName, setUserName] = useState("");
  // const [userPoints, setUserPoints] = useState("");
  // const [userPosition, setUserPosition] = useState("");

  const navigateToWorkouts = () => {
    navigation.navigate("Workouts");
  };

  // useEffect(() => {
  //   console.log("entre al use effect");
  //   updateRanking();
  //   // updatePoints();
  // });

  // updatePoints(async () => {
  //   const points = await getPoints();
  //   setUser({ points });
  // });

  // const getPoints = () => {

  // };

  const updateRanking = async () => {
    const position = await getPosition();
    setUser({ position });
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

  // const getProfileImage = () => {
  //   return profileImage;
  // };

  // useEffect(() => {
  //   getCurrentUserData();
  // });

  // const getCurrentUserData = () => {
  //   setUserName(user.username);
  //   setUserPoints(user.points);
  //   calculationRanking(user.points);
  // };

  // const calculationRanking = (points) => {
  //   try {
  //     db.collection("users")
  //       .where("points", ">", points)
  //       .onSnapshot((snap) => {
  //         const size = snap.size + 1;
  //         setUserPosition(size);
  //         setUserRanking({ position: size });
  //       });
  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // };

  return (
    <>
      <Layout
        // getProfileImage={getProfileImage}
        navigateToWorkouts={navigateToWorkouts}
        userName={user.username}
        userPoints={user.points}
        userPosition={user.position}
        setvideoShow={setvideoShow}
      ></Layout>
      {console.log(user)}
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
  videos: state.videosReducer.videos,
});

const actionCreators = {
  setUser: setterUserAction,
};

export default connect(mapStateToProps, actionCreators)(HomeWork);
