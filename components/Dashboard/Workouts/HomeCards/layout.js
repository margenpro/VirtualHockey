import React from "react";
import { Image, View, Text } from "react-native";
import styles from "./styles";
import WorkoutCard from "../WorkoutCard/container"
import OldWorkoutCard from "../OldWorkoutCard/container"
import { Frame } from "../../../Frame"
import { ScrollView } from "react-native-gesture-handler";
import trophy from "../../../../assets/images/trophy.png"

export function Layout({
  username,
  points,
  videoImages,
  setVideoShow,
  setNroVideo,
}) {
  return (
    <Frame>
      <View style={styles.container}>
        <View style={styles.superior}>
          <View style={styles.leftHeader}>
            <Text style={styles.welcome}>Hello,</Text>
            <Text style={styles.username}>{username}</Text>
          </View>
          <View style={styles.rightHeader}>
            <Image source={trophy} style={styles.trophy}></Image>
            <Text style={styles.points}>{points}</Text>
          </View>
        </View>
        <View style={styles.middle}>
          <WorkoutCard setVideoShow={setVideoShow} setNroVideo={setNroVideo} />
        </View>
        <View style={styles.inferior}>
          <Text style={styles.previousWorkouts}>Previous Workouts</Text>

          <ScrollView horizontal={true} style={styles.horizontalScroll}>
            {videoImages.length > 0 ? (
              videoImages.map((e) => (
                <OldWorkoutCard image={e} nro={1} setVideoShow={setVideoShow} setNroVideo={setNroVideo} />
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