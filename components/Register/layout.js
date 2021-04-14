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
  screenHandler,
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
        <Text style={styles.pagetitle}>Register</Text>

        <View style={styles.container2}>
          <Text style={styles.title}>USERNAME</Text>
          <Input
            onChangeText={userInputHandler}
            style={styles.input}
            placeholder={"JohnDoe"}
          />
          <Text style={styles.title}>EMAIL</Text>
          <Input style={styles.input} placeholder={"john.doe@example.com"} />
          <Text style={styles.title}>PASSWORD</Text>
          <Input
            onChangeText={passInputHandler}
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
          <TouchableOpacity onPress={screenHandler}>
            <Text style={styles.footer}>I'm already a member</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}
