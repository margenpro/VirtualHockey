import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";

export function Layout({
  userInputHandler,
  passInputHandler,
  submitHandler,
  wrongUsername,
  wrongPassword,
  screenHandlerLanding,
  screenHandlerRegister,
  logoUrl,
  showPassword,
  showPasswordHandler
}) {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.container}
        colors={["rgba(2, 28, 59, 1)", "rgba(19, 38, 135, 1)"]}
      >
        <Image
          style={styles.logo}
          source={{
            uri: logoUrl
          }}
        />
        <Text style={styles.pagetitle}>Log In</Text>

        <View style={styles.container2}>
          <Text style={styles.title}>EMAIL</Text>
          <Input
            onChangeText={userInputHandler}
            errorMessage={wrongUsername ? "Invalid Username" : ""}
            placeholder="john.doe@example.com"
            style={styles.input}
            autoCompleteType="email"
          />
          <Text style={styles.title}>PASSWORD</Text>
          <Input
            onChangeText={passInputHandler}
            errorMessage={wrongPassword ? "Invalid Password" : ""}
            placeholder="********"
            secureTextEntry={!showPassword}
            autoCompleteType="password"
            style={styles.input}
          />
          <TouchableOpacity
            onPress={submitHandler}
            // onPress={screenHandlerLanding}
            accessibilityLabel="Learn more about this purple button"
            style={styles.button}
          >
            <Text style={styles.buttonText}>LOG IN</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={screenHandlerRegister}>
            <Text style={styles.footer}>New User? Sign Up!</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}
