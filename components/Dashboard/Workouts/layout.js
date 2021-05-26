import React from "react";
import Video from "../Video/container"
import HomeCards from "./HomeCards/container"

export function Layout({ videoShow, setVideoShow, navigation, nroVideo, setNroVideo }) {
  return (
    <React.Fragment>
      {videoShow ? (
        <Video setvideoShow={setVideoShow} nroVideo={nroVideo}/>
      ) : (
        <HomeCards setVideoShow={setVideoShow} navigation={navigation} setNroVideo={setNroVideo}/>
      )}
    </React.Fragment>
  );
}

/*
import React from "react";
import { Image, View, Text } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import WorkoutCard from "./WorkoutCard/container";
import OldWorkoutCard from "./OldWorkoutCard/container";
import { Frame } from "../../Frame";
import { ScrollView } from "react-native-gesture-handler";
import trophy from "../../../assets/images/trophy.png";
import fontStyles from "../../../assets/styles/fontStyles";

export function Layout({
  // size
  //screenHandler
  username,
  points,
  videoImages,
  setVideoShow,
}) {
  return (
    <Frame>
      <View style={styles.container}>
        <View style={styles.superior}>
          <View style={styles.leftHeader}>
            <Text style={styles.welcome}>Hello,</Text>
            <Text style={fontStyles.username}>{username}</Text>
          </View>
          <View style={styles.rightHeader}>
            <Image source={trophy} style={styles.trophy}></Image>
            <Text style={styles.points}>{points}</Text>
          </View>
        </View>
        <View style={styles.middle}>
          <WorkoutCard setVideoShow={setVideoShow}/>
        </View>
        <View style={styles.inferior}>
          <Text style={styles.previousWorkouts}>Previous Workouts</Text>

          <ScrollView horizontal={true} style={styles.horizontalScroll}>
            {videoImages.length > 0 ? (
              videoImages.map(e => (
                <OldWorkoutCard image={e.image} nroVideo={e.nro} setVideoShow={setVideoShow}/>
              ))
            ) : (
              <Text>Empieza con el primer Video</Text>
            )}
          </ScrollView>
        </View>
      </View>
    </Frame>
  );
}
*/