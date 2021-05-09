import React from 'react';
import { Image, Text, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import card from '../../../../assets/images/card.png'

export function Layout({
    // size
    //screenHandler
    videoImage,
    nextVideo
}) {
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <Image
                    style={styles.videoImage}
                    source={{uri: videoImage}}
                />
                <Text style={styles.videoTitle} >
                Rookie Workout #{nextVideo}
                </Text>
                <Text style={styles.videoInfo}>
                Hands and puck skills are a big part of this workout. Work on your dexterity while pushing your fitness limits
                </Text>
                
            </View>
            
        </View>
    );
}
