import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";


export function Layout({
  getProfileImage,
}) {
  return (
      <View style={styles.containerImage}>
        <Image style={styles.circle} source={getProfileImage()} />
      </View>
  );
}
