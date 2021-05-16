import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import { Frame } from "../Frame";
import mainLogo from "../../assets/images/mainLogo.png";
import fontStyles from "../../assets/styles/fontStyles";
import commonStyles from "../../assets/styles/commonStyles";
import UserAvatar from "../Dashboard/HomeWork/UserAvatar/container";
import styles from "../Dashboard/Video/styles";
import { ScrollView } from "react-native-gesture-handler";

// import { LinearGradient } from "expo-linear-gradient";

export function Layout({
  username,
  userInputHandler,
  emailInputHandler,
  passInputHandler,
  submitHandler,
  screenHandler,
  showPassword,
  invalidPassword,
  emailExists,
  usernameExists,
  changeAvatar,
}) {
  return (
    <Frame>
      <ScrollView>
      <View style={commonStyles.layoutContainer}>
        <View style={commonStyles.headerContainer}>
          <TouchableOpacity onPress={()=>{changeAvatar()}}><UserAvatar></UserAvatar></TouchableOpacity>
          <Text style={fontStyles.title}>{username && username}'s Profile</Text>
        </View>
        <View style={commonStyles.pointsContainer}>
          <Text style={fontStyles.points}>2450 Points</Text>
        </View>
        <Text style={fontStyles.inputHeader}>USERNAME</Text>
        <Input
          disabled
          onChangeText={userInputHandler}
          style={commonStyles.inputUser}
          errorMessage={usernameExists.exists ? usernameExists.msg : ""}
          placeholder={"JohnDoe"}
        />
        <Text style={fontStyles.inputHeader}>EMAIL</Text>
        <Input
          disabled
          style={commonStyles.inputPassword}
          errorMessage={emailExists.exists ? emailExists.msg : ""}
          onChangeText={emailInputHandler}
          placeholder={"john.doe@example.com"}
        />
        <Text style={fontStyles.inputHeader}>OLD PASSWORD</Text>
        <Input
          onChangeText={passInputHandler}
          errorMessage={invalidPassword.invalid ? invalidPassword.msg : ""}
          secureTextEntry={!showPassword}
          placeholder={"********"}
          style={commonStyles.inputUser}
        />
        <Text style={fontStyles.inputHeader}>NEW PASSWORD</Text>
        <Input
          onChangeText={passInputHandler}
          errorMessage={invalidPassword.invalid ? invalidPassword.msg : ""}
          secureTextEntry={!showPassword}
          placeholder={"********"}
          style={commonStyles.inputUser}
        />
        <Text style={fontStyles.inputHeader}>REPEAT NEW PASSWORD</Text>
        <Input
          onChangeText={passInputHandler}
          errorMessage={invalidPassword.invalid ? invalidPassword.msg : ""}
          secureTextEntry={!showPassword}
          placeholder={"********"}
          style={commonStyles.inputUser}
        />
        <TouchableOpacity
          onPress={submitHandler}
          accessibilityLabel="Learn more about this purple button"
          style={[commonStyles.actionButton, {marginBottom: 50}]}
        >
          <Text style={fontStyles.buttonText}>SAVE</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </Frame>
  );
}
