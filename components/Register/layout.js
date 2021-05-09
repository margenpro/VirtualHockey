import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import { Frame } from '../Frame'
import mainLogo from '../../assets/images/mainLogo.png'
import fontStyles from '../../assets/styles/fontStyles'
import commonStyles from '../../assets/styles/commonStyles'

// import { LinearGradient } from "expo-linear-gradient";

export function Layout({
  userInputHandler,
  emailInputHandler,
  passInputHandler,
  submitHandler,
  screenHandler,
  showPassword,
  invalidPassword,
  emailExists,
  usernameExists
}) {

  return (
    <Frame>
      <View style={commonStyles.layoutContainer}>
      <View style={commonStyles.headerContainer}>
      <Image
          style={commonStyles.mainLogo}
          source={mainLogo}
        />
        <Text style={fontStyles.title}>Register</Text>
        </View>
        <Text style={fontStyles.inputHeader}>USERNAME</Text>
        <Input
          onChangeText={userInputHandler}
          style={commonStyles.inputUser}
          errorMessage={usernameExists.exists ? usernameExists.msg : ""}
          placeholder={"JohnDoe"}
        />
        <Text style={fontStyles.inputHeader}>EMAIL</Text>
        <Input style={commonStyles.inputPassword} errorMessage={emailExists.exists ? emailExists.msg : ""} onChangeText={emailInputHandler} placeholder={"john.doe@example.com"} />
        <Text style={fontStyles.inputHeader}>PASSWORD</Text>
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
          style={commonStyles.actionButton}
        >
          <Text style={fontStyles.buttonText}>REGISTER</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={screenHandler} style={commonStyles.textTouch} accessibilityRole="text">
          <Text style={[fontStyles.smallSize, fontStyles.footerText]}>I'm already a member</Text>
        </TouchableOpacity>
      </View>
    </Frame>
  );
}
