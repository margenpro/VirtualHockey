import React, { useState, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Layout } from "./layout";
import profileImage from "../../../assets/images/user.jpg";
import "firebase/auth";
import { firestore, useFirebaseApp } from "reactfire";
import { connect } from "react-redux";
import { setterUserAction } from "../../../redux/actions/userActions";
import { useIsFocused } from "@react-navigation/native";
import { getPlatformOrientationLockAsync } from "expo-screen-orientation";

const HomeWork = ({ navigation, setvideoShow, user, setUser }) => {
  const firebase = useFirebaseApp();
  // const db = firebase.firestore();

  useFocusEffect(
    React.useCallback(() => {
      getPosition(user.points);
    }, [])
  );

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
      setUser({ position: rank });
    } catch (e) {
      console.log(e.message);
    }
  };

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

  return (
    <Layout
      getProfileImage={getProfileImage}
      navigateToWorkouts={navigateToWorkouts}
      userName={user.username}
      userPoints={user.points}
      userPosition={user.position}
      setvideoShow={setvideoShow}
    ></Layout>
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
