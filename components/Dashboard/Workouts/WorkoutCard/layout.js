import React from "react";
import { Image, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import card from "../../../../assets/images/card.png";
import { TouchableOpacity } from "react-native-gesture-handler";
import commonStyles from "../../../../assets/styles/commonStyles";
import fontStyles from "../../../../assets/styles/fontStyles";

export function Layout({
  // size
  //screenHandler
  videoImage,
  videoDescription,
  nextVideo,
}) {
  return (
    <TouchableOpacity
      style={[commonStyles.flexOne, styles.whiteTransparentBox]}
    >
      <Image
        style={styles.videoImage}
        source={{ uri: videoImage }}
        resizeMode={"contain"}
      />
      <View style={styles.descriptionContainer}>
        <Text adjustsFontSizeToFit={true} style={fontStyles.videoTitle}>
          Rookie Workout #{nextVideo ? nextVideo : "1"}
        </Text>
        <Text adjustsFontSizeToFit={true} style={fontStyles.videoInfo}>
          {videoDescription}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
