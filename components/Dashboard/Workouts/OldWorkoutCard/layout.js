import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import commonStyles from "../../../../assets/styles/commonStyles";
import fontStyles from "../../../../assets/styles/fontStyles";
export function Layout({
  image,
  setVideoShow,
  nro
}) {
  return (
    <TouchableOpacity
      style={[commonStyles.flexOne, styles.whiteTransparentBox]}
      onPress={()=>setVideoShow(true)}
    >
      <View style={{ flex: 1, justifyContent: "center", paddingVertical: 2 }}>
        <Text adjustsFontSizeToFit={true} style={fontStyles.oldTitle}>
          Rookie Workout #{nro ? nro : "1"}
        </Text>
      </View>
      <View style={{ flex: 10 }}>
        <Image
          style={styles.videoImage}
          source={{ uri: image }}
          resizeMode={"center"}
        />
      </View>
      <View style={{ flex: 1 }}></View>
    </TouchableOpacity>
  );
}
