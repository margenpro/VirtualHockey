import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  Alert,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import { Frame } from "../Frame";
import mainLogo from "../../assets/images/mainLogo.png";
import fontStyles from "../../assets/styles/fontStyles";
import commonStyles from "../../assets/styles/commonStyles";
import { Header } from "react-navigation-stack";

export function Layout({
  emailInputHandler,
  passInputHandler,
  submitHandler,
  wrongEmail,
  wrongPassword,
  screenHandlerRegister,
  showPassword,
  showPasswordHandler,
  forTesting,
  handleKeyDown,
  toPayments,
  loading,
}) {
  return (
    <Frame>
      <KeyboardAvoidingView
        style={[commonStyles.flexOne, { margin: 20 }]}
        {...(Platform.OS === "ios" && { behavior: "padding" })}
        keyboardVerticalOffset={10}
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
            <Text style={[fontStyles.title]}>Log In</Text>
          </View>
          <View style={commonStyles.mainCredentialContainer}>
            <TouchableOpacity
              pointerEvents="none"
              activeOpacity={1}
              onPress={() => {}}
            >
              <Text style={fontStyles.inputHeader}>EMAIL</Text>
              <Input
                onChangeText={emailInputHandler}
                placeholder="john.doe@example.com"
                style={commonStyles.inputUser}
                autoCompleteType="email"
              />
              <Text style={fontStyles.inputHeader}>PASSWORD</Text>
              <Input
                onChangeText={passInputHandler}
                errorMessage={wrongPassword ? "Invalid Password" : ""}
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
            </TouchableOpacity>
            <TouchableOpacity
              onPress={submitHandler}
              style={commonStyles.actionButton}
            >
              <Text style={fontStyles.buttonText}>
                {loading ? (
                  <ActivityIndicator size="large" color="#fff" />
                ) : (
                  "LOG IN"
                )}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={screenHandlerRegister}
              style={commonStyles.textTouch}
              accessibilityRole="text"
            >
              <Text style={[fontStyles.smallSize, fontStyles.footerText]}>
                New User? Sign Up!
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={forTesting}
              style={commonStyles.textTouch}
              accessibilityRole="text"
            >
              <Text style={fontStyles.footerText}>For Testing</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={toPayments}
              style={commonStyles.textTouch}
              accessibilityRole="text"
            >
              <Text style={fontStyles.footerText}>To Payments</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </Frame>
  );
}
