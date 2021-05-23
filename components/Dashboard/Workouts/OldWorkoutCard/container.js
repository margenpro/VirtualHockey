import React, { useState, useEffect } from "react";
import { Image, Text } from "react-native";
import { Layout } from "./layout";
import { connect } from "react-redux";
import { getStorage } from "../../../../firebase";

const OldWorkoutCard = ({ navigation, image, nro }) => {
  const placeholder = 'https://app.virtualhockey.com/wp-content/uploads/2020/11/1.png';

  return <Layout image={placeholder} nro={nro} />;
};

const mapStateToProps = (state) => ({
  lastVideo: state.userReducer.user.lastVideo,
});

export default connect(mapStateToProps, {})(OldWorkoutCard);
