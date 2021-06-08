import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import { Frame } from "../Frame";
import mainLogo from "../../assets/images/mainLogo.png";
import fontStyles from "../../assets/styles/fontStyles";
import commonStyles from "../../assets/styles/commonStyles";
import UserAvatar from "../Dashboard/HomeWork/UserAvatar/container";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import { colorsPalette } from "../../assets/styles/colorsPalette";
import { Password } from "../../utils/Password/container.js";

// import { LinearGradient } from "expo-linear-gradient";

export function Layout({
  username,
  email,
  oldPassInputHandler,
  newPassInputHandler,
  repeatPassInputHandler,
  submitHandler,
  showPassword,
  changeAvatar,
  points,
  image,
  signOut,
  newWrongPassword,
  repeatWrongPassword,
  oldWrongPassword,
  changed,
  // textInput,
}) {
  return (
    <Frame>
      <KeyboardAvoidingView
        style={[commonStyles.flexOne]}
        {...(Platform.OS === "ios" && { behavior: "padding" })}
        keyboardVerticalOffset={10}
        enabled
      >
        <ScrollView>
          <TouchableOpacity
            activeOpacity={1}
            style={commonStyles.flexOne}
            onPress={() => {
              Keyboard.dismiss();
            }}
          >
            <View style={commonStyles.layoutContainer}>
              <View style={commonStyles.headerContainer}>
                <TouchableOpacity
                  onPress={() => {
                    changeAvatar();
                  }}
                >
                  <View style={{ alignItems: "center" }}>
                    <UserAvatar changeEvent={image} />
                  </View>
                </TouchableOpacity>
                <Text style={fontStyles.title}>
                  {username && username}'s Profile
                </Text>
                <View style={{ marginTop: 20 }}>
                  <Text style={fontStyles.subTitle}>{email}</Text>
                </View>
              </View>
              <View style={commonStyles.pointsContainer}>
                <Text style={fontStyles.points}>{points && points} points</Text>
              </View>
              {changed && (
                <React.Fragment>
                  <Password
                    tag={"OLD PASSWORD"}
                    passInputHandler={oldPassInputHandler}
                    wrongPassword={oldWrongPassword}
                  />
                  <Password
                    tag={"NEW PASSWORD"}
                    passInputHandler={newPassInputHandler}
                    wrongPassword={newWrongPassword}
                    // textInput={textInput}
                  />
                  <Password
                    tag={"REPEAT PASSWORD"}
                    passInputHandler={repeatPassInputHandler}
                    wrongPassword={repeatWrongPassword}
                  />
                </React.Fragment>
              )}
              <TouchableOpacity
                onPress={submitHandler}
                accessibilityLabel="Learn more about this purple button"
                style={[commonStyles.actionButton]}
              >
                <Text style={fontStyles.buttonText}>SAVE</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={signOut}
                style={[commonStyles.textTouch, { marginBottom: 80 }]}
                accessibilityRole="text"
              >
                <Text style={[fontStyles.smallSize, fontStyles.footerText]}>
                  Sign Out
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </Frame>
  );
}
