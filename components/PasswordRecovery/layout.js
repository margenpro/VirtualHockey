import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Frame } from "../Frame/index";
import { Input } from "react-native-elements";
import fontStyles from "../../assets/styles/fontStyles";
import commonStyles from "../../assets/styles/commonStyles";

export function Layout({ sendPasswordResetEmail, emailInputHandler }) {
  return (
    <Frame>
      <Input placeholder="Email..." onChangeText={emailInputHandler} />
      <TouchableOpacity
        style={commonStyles.actionButton}
        onPress={sendPasswordResetEmail}
      >
        <Text style={fontStyles.buttonText}>Send email</Text>
      </TouchableOpacity>
    </Frame>
  );
}
