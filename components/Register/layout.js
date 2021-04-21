import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import styles from "./styles";
import { Frame } from '../Frame'

// import { LinearGradient } from "expo-linear-gradient";

export function Layout({
  userInputHandler,
  emailInputHandler,
  passInputHandler,
  submitHandler,
  screenHandler,
  logoUrl,
  showPassword,
  invalidPassword,
  emailExists,
  usernameExists
}) {

  return (
    <Frame>
    <View style={styles.container}>
        <Image
          style={styles.logo}
          source={{
            uri: logoUrl
          }}
        />
        <Text style={styles.pagetitle}>Register</Text>

        <View style={styles.container2}>
          <Text style={styles.title}>USERNAME</Text>
          <Input
            onChangeText={userInputHandler}
            style={styles.input}
            errorMessage={usernameExists.exists ? usernameExists.msg : ""}
            placeholder={"JohnDoe"}
          />
          <Text style={styles.title}>EMAIL</Text>
          <Input style={styles.input} errorMessage={emailExists.exists ? emailExists.msg : ""} onChangeText={emailInputHandler}  placeholder={"john.doe@example.com"} />
          <Text style={styles.title}>PASSWORD</Text>
          <Input
            onChangeText={passInputHandler}
            errorMessage={invalidPassword.invalid ? invalidPassword.msg : ""}
            secureTextEntry={!showPassword}
            placeholder={"********"}
            style={styles.input}
          />
          <TouchableOpacity
            onPress={submitHandler}
            accessibilityLabel="Learn more about this purple button"
            style={styles.button}
          >
            <Text style={styles.buttonText}>REGISTER</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={screenHandler} style={styles.textTouch} accessibilityRole="text">
            <Text style={styles.footer}>I'm already a member</Text>
          </TouchableOpacity>
        </View>
    </View>
    </Frame>
  );
}
