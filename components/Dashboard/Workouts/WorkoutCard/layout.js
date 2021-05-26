import React from "react";
import { Image, Text, View } from "react-native";
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
  setVideoShow,
}) {
  return (
    <TouchableOpacity
      style={[commonStyles.flexOne, styles.whiteTransparentBox]}
      onPress={()=> setVideoShow(true)}
    >
      <View style={{ flex: 5, marginBottom: 5 }}>
        <Image
          style={styles.videoImage}
          source={{ uri: videoImage }}
          resizeMode={"center"}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text adjustsFontSizeToFit={true} style={fontStyles.videoTitle}>
          Rookie Workout #1{/*nroVideo*/}
        </Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text adjustsFontSizeToFit={true} style={fontStyles.videoInfo}>
          {videoDescription}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
