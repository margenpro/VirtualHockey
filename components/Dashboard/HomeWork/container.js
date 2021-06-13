import React, { useState, useEffect, useContext } from "react";
import { Layout } from "./layout";
import profileImage from "../../../assets/images/user.jpg";
import "firebase/auth";
import { firestore, useFirebaseApp } from "reactfire";
import { connect } from "react-redux";
import { setterUserAction } from "../../../redux/actions/userActions";
import { useIsFocused } from "@react-navigation/native";

const HomeWork = ({
  navigation,
  setvideoShow,
  user,
  videos,
  setUserRanking,
}) => {
  const firebase = useFirebaseApp();
  const db = firebase.firestore();

  const [userName, setUserName] = useState("");
  const [userPoints, setUserPoints] = useState("");
  const [userPosition, setUserPosition] = useState("");

  const navigateToWorkouts = () => {
    navigation.navigate("Workouts");
  };

  const getProfileImage = () => {
    return profileImage;
  };

  useEffect(() => {
    let mounted = true
    if(mounted){
      setUserName(user.username);
      setUserPoints(user.points);
      calculationRanking(user.points);
    }
    return () => {
      mounted = false
    }
   // getCurrentUserData();
  }, []);

  const getCurrentUserData = () => {
    setUserName(user.username);
    setUserPoints(user.points);
    calculationRanking(user.points);
  };

  const calculationRanking = async (points) => {
    try {
      await db.collection("users")
        .where("points", ">", points)
        .onSnapshot((snap) => {
          const size = snap.size + 1;
          //setUserPosition(size);
          setUserRanking({ position: size });
        });
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <Layout
        getProfileImage={getProfileImage}
        navigateToWorkouts={navigateToWorkouts}
        userName={user.username}
        userPoints={user.points}
        userPosition={user.position}
        setvideoShow={setvideoShow}
      ></Layout>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
  videos: state.videosReducer.videos,
});

const actionCreators = {
  setUserRanking: setterUserAction,
};

export default connect(mapStateToProps, actionCreators)(HomeWork);
