import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  ActivityIndicator
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import { Frame } from "../Frame";
import mainLogo from "../../assets/images/mainLogo.png";
import fontStyles from "../../assets/styles/fontStyles";
import commonStyles from "../../assets/styles/commonStyles";

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
  usernameExists,
  showPasswordHandler,
  handleKeyDown,
  loading
}) {
  return (
    <Frame>
      <KeyboardAvoidingView
        style={[commonStyles.flexOne, { margin: 20 }]}
        {...(Platform.OS === "ios" && { behavior: "padding" })}
        // behavior="height"
        // keyboardVerticalOffset={0}
        enabled
      >
        <TouchableOpacity
          activeOpacity={1}
          style={commonStyles.flexOne}
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View style={commonStyles.flexOne}>
            <Image
              style={[commonStyles.mainLogo, commonStyles.flexOne]}
              source={mainLogo}
            />
            <Text style={fontStyles.title}>Register</Text>
          </View>
          <View style={commonStyles.mainCredentialContainer}>
            <TouchableOpacity
              pointerEvents="none"
              activeOpacity={1}
              onPress={() => {}}
            >
              <Text style={fontStyles.inputHeader}>USERNAME</Text>
              <Input
                onChangeText={userInputHandler}
                style={commonStyles.inputUser}
                errorMessage={usernameExists.exists ? usernameExists.msg : ""}
                placeholder={"JohnDoe"}
              />
              <Text style={fontStyles.inputHeader}>EMAIL</Text>
              <Input
                style={commonStyles.inputPassword}
                errorMessage={emailExists.exists ? emailExists.msg : ""}
                onChangeText={emailInputHandler}
                placeholder={"john.doe@example.com"}
              />
              <Text style={fontStyles.inputHeader}>PASSWORD</Text>
              <Input
                onChangeText={passInputHandler}
                errorMessage={
                  invalidPassword.invalid ? invalidPassword.msg : ""
                }
                onKeyPress={(e) => {
                  handleKeyDown(e);
                }}
                rightIcon={
                  <Icon
                    name={showPassword ? "eye-slash" : "eye"}
                    size={22}
                    color="white"
                    onPress={() => showPasswordHandler(!showPassword)}
                  />
                }
                rightIconContainerStyle={commonStyles.inputIcon}
                placeholder="********"
                secureTextEntry={!showPassword}
                autoCompleteType="password"
                style={commonStyles.inputPassword}
              />
            <TouchableOpacity
              onPress={submitHandler}
              accessibilityLabel="Learn more about this purple button"
              style={commonStyles.actionButton}
              >
              <Text style={fontStyles.buttonText}>
                {loading ? <ActivityIndicator size="large" color="#fff"/> : "REGISTER"}   
              </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={screenHandler}
                style={commonStyles.textTouch}
                accessibilityRole="text"
              >
                <Text style={[fontStyles.smallSize, fontStyles.footerText]}>
                  I'm already a member
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </Frame>
  );
}
