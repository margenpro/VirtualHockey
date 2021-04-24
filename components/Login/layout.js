import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import styles from "./styles";
import { Frame } from '../Frame'
import mainLogo from '../../assets/images/mainLogo.png'
// import { LinearGradient } from "expo-linear-gradient";

export function Layout({
  emailInputHandler,
  passInputHandler,
  submitHandler,
  wrongEmail,
  wrongPassword,
  // screenHandlerLanding,
  screenHandlerRegister,
  logoUrl,
  showPassword,
  showPasswordHandler,
  forTesting,
}) {

  // TODO poner en una carpeta e importar en cada vista


  return (
    <Frame>
      <View style={styles.container}>
        {/* <LinearGradient
        style={styles.container}
        colors={["rgba(2, 28, 59, 1)", "rgba(19, 38, 135, 1)"]}
      > */}
        <Image
          style={styles.logo}
          source={{
            uri: mainLogo
          }}
        />
        <Text style={styles.pagetitle}>Log In</Text>

        <View style={styles.container2}>
          <Text style={styles.title}>EMAIL</Text>
          <Input
            onChangeText={emailInputHandler}
            errorMessage={wrongEmail ? "Invalid Email" : ""}
            placeholder="john.doe@example.com"
            style={styles.input}
            autoCompleteType="email"
          />

          <Text style={styles.title}>PASSWORD</Text>
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
            <Text style={styles.buttonText}>LOG IN</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={screenHandlerRegister} style={styles.textTouch} accessibilityRole="text">
            <Text style={styles.footer}>New User? Sign Up!</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={forTesting} style={styles.textTouch} accessibilityRole="text">
            <Text style={styles.footer}>For Testing</Text>
          </TouchableOpacity>
        </View>
        {/* </LinearGradient> */}
      </View>
    </Frame>
  );
}
