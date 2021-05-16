import React from "react";
import { Layout } from "./layout";
import profileImage from "../../../../assets/images/user.jpg";
import "firebase/auth";
import { useFirebaseApp } from "reactfire";
import { connect } from "react-redux";
import { setterUserAction } from "../../../../redux/actions/userActions";

const UserAvatar = ({
  navigation,
  setvideoShow,
  user,
  videos,
  setUserRanking,
}) => {
  const firebase = useFirebaseApp();
  const db = firebase.firestore();

  const getProfileImage = () => {
    return profileImage;
  };

  return (
    <>
      <Layout getProfileImage={getProfileImage}></Layout>
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

export default connect(mapStateToProps, actionCreators)(UserAvatar);
