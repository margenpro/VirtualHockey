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

// import { LinearGradient } from "expo-linear-gradient";

export function Layout({
  username,
  email,
  userInputHandler,
  emailInputHandler,
  passInputHandler,
  submitHandler,
  screenHandler,
  showPassword,
  invalidPassword,
  emailExists,
  changeAvatar,
  points,
  image,
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
                    <UserAvatar />
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
                <Text style={fontStyles.points}>{points} points</Text>
              </View>
              <Text style={fontStyles.inputHeader}>OLD PASSWORD</Text>
              <Input
                onChangeText={passInputHandler}
                errorMessage={
                  invalidPassword.invalid ? invalidPassword.msg : ""
                }
                secureTextEntry={!showPassword}
                placeholder={"********"}
                style={commonStyles.inputUser}
              />
              <Text style={fontStyles.inputHeader}>NEW PASSWORD</Text>
              <Input
                onChangeText={passInputHandler}
                errorMessage={
                  invalidPassword.invalid ? invalidPassword.msg : ""
                }
                secureTextEntry={!showPassword}
                placeholder={"********"}
                style={commonStyles.inputUser}
              />
              <Text style={fontStyles.inputHeader}>REPEAT NEW PASSWORD</Text>
              <Input
                onChangeText={passInputHandler}
                errorMessage={
                  invalidPassword.invalid ? invalidPassword.msg : ""
                }
                secureTextEntry={!showPassword}
                placeholder={"********"}
                style={commonStyles.inputUser}
              />
              <TouchableOpacity
                onPress={submitHandler}
                accessibilityLabel="Learn more about this purple button"
                style={[commonStyles.actionButton, { marginBottom: 80 }]}
              >
                <Text style={fontStyles.buttonText}>SAVE</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </Frame>
  );
}
