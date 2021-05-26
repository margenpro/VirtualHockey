import React from "react";
import { Image, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import card from "../../../../assets/images/card.png";
import { TouchableOpacity } from "react-native-gesture-handler";
import commonStyles from "../../../../assets/styles/commonStyles";
import fontStyles from "../../../../assets/styles/fontStyles";
import lalala from '../../../../assets/images/card.png'
export function Layout({
  // size
  //screenHandler
  image,
  placeholder,
  setVideoShow
}) {
  return (
    <TouchableOpacity
      style={[commonStyles.flexOne, styles.whiteTransparentBox]}
      onPress={()=>setVideoShow(true)}
    >
      {/* <Text adjustsFontSizeToFit={true} style={fontStyles.videoTitle}>
        Rookie Workout #{nro ? nro : "1"}
      </Text> */}
      <Image
        style={styles.videoImage}
        source={{ uri: image }}
        resizeMode={"contain"}
      />
      <View style={styles.descriptionContainer}></View>
    </TouchableOpacity>
  );
}
