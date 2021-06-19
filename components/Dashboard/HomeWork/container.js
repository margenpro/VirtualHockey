import React, { useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Layout } from "./layout";
import profileImage from "../../../assets/images/user.jpg";
import "firebase/auth";
import { useFirebaseApp } from "reactfire";
import { connect } from "react-redux";
import { setterUserAction } from "../../../redux/actions/userActions";
import { Alert } from "react-native";

const HomeWork = ({ navigation, setvideoShow, user, setUser, earnedPoints }) => {
  const firebase = useFirebaseApp();
  const db = firebase.firestore();

  useEffect(() => {
    getPosition(user.points);
  }, []);

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
        rank = parseInt(rank) + 1;
      });
      setUser({ position: rank });
      // console.log(rank);
    } catch (e) {
      console.log(e.message);
    }
  };

  const navigateToWorkouts = () => {
    navigation.navigate("Workouts");
  };
  const getProfileImage = () => {
    return profileImage;
  };
  
  useEffect(() => {
    showEarnedPoints()
  },[earnedPoints]);

  const showEarnedPoints = () => {
    if (earnedPoints > 0) {
      Alert.alert(
        "Congrats!!",
        "You have earned " + earnedPoints + " points!",
        [
          {
            text: "OK",
          }
        ],
      )
    }
  };

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
