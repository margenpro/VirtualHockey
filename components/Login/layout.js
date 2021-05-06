import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import styles from "./styles";
import { Frame } from '../Frame'
import mainLogo from '../../assets/images/mainLogo.png'
import fontStyles from '../../assets/styles/fontStyles'
import commonStyles from '../../assets/styles/commonStyles'


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
}) {

  return (
    <Frame>
      <View style={commonStyles.layoutContainer}>
        {/* <View style={commonStyles.headerContainer}> */}
          <Image
            style={styles.logo}
            source={mainLogo}
          />
          <Text style={fontStyles.title}>Log In</Text>
        {/* </View> */}
        <Text style={fontStyles.subTitle}>EMAIL</Text>
        <Input
          onChangeText={emailInputHandler}
          errorMessage={wrongEmail ? "Invalid Email" : ""}
          placeholder="john.doe@example.com"
          style={styles.input}
          autoCompleteType="email"
        />

        <Text style={fontStyles.subTitle}>PASSWORD</Text>
        <Input
          onChangeText={passInputHandler}
          errorMessage={wrongPassword ? "Invalid Password" : ""}
          rightIcon={<Icon name={showPassword ? "eye-slash" : "eye"} size={22} color="white" onPress={() => showPasswordHandler(!showPassword)} />}
          rightIconContainerStyle={styles.inputIcon}
          placeholder="********"
          secureTextEntry={!showPassword}
          autoCompleteType="password"
          style={styles.input2}
        />

        <TouchableOpacity
          onPress={submitHandler}
          style={styles.button}
        >
          <Text style={fontStyles.buttonText}>LOG IN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={screenHandlerRegister} style={styles.textTouch} accessibilityRole="text">
          <Text style={fontStyles.footerText}>New User? Sign Up!</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={forTesting} style={styles.textTouch} accessibilityRole="text">
          <Text style={fontStyles.footerText}>For Testing</Text>
        </TouchableOpacity>
      </View>
    </Frame>
  );
}
