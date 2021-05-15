import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Frame } from "../../Frame";
import Ionicons from "react-native-vector-icons/Ionicons";
import commonStyles from "../../../assets/styles/commonStyles";
import fontStyles from "../../../assets/styles/fontStyles";
import { colorsPalette } from "../../../assets/styles/colorsPalette";

export function Layout({
    setvideoShow,
  getProfileImage,
  navigateToWorkouts,
  userName,
  userPosition,
  userPoints,
}) {

  return (
    <Frame>
      <View
        style={[commonStyles.centeredAligned, commonStyles.layoutContainer]}
      >
        <View style={styles.containerImage}>
          <Image style={styles.circle} source={getProfileImage()} />
        </View>
        <View style={commonStyles.rowedAndWrapped}>
          <Text style={[styles.usernameText, fontStyles.white]}>
            {userName}{" "}
          </Text>
          <Text style={[styles.usernameText, fontStyles.yellow]}>
            #{userPosition}
          </Text>
        </View>
        <View style={commonStyles.rowedAndWrapped}>
          <Text style={[styles.usernameText, fontStyles.white]}>
            {" "}
            <Ionicons
              name={"trophy"}
              size={30}
              color={colorsPalette.colorFour}
            />{" "}
            {userPoints}
          </Text>
        </View>
        <View style={commonStyles.spacingWrapper}>
          <Text
            style={[
              fontStyles.regularText,
              styles.explanationMessageText,
              fontStyles.white,
            ]}
          >
            Resume your workouts, earn points and get to the top of the
            <Text
              style={[
                fontStyles.regularText,
                styles.explanationMessageText,
                fontStyles.yellow,
              ]}
            >
              {" "}
              ranking
              <Text style={styles.explanationMessageText}>!</Text>
            </Text>
          </Text>
        </View>
        <TouchableOpacity
          style={commonStyles.actionButton}
          onPress={() => setvideoShow(true)}
        >
          <Text style={fontStyles.buttonText}>RESUME WORKOUT</Text>
        </TouchableOpacity>
        <View style={{ marginBottom: 10 }}>
          <Text
            style={[
              fontStyles.regularText,
              styles.explanationMessageText,
              fontStyles.white,
            ]}
          >
            or
          </Text>
        </View>
        <Text
          onPress={navigateToWorkouts}
          style={[fontStyles.normalSize, fontStyles.footerText]}
        >
          View all your workouts
        </Text>
      </View>
    </Frame>
  );
}
