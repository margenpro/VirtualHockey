import React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
// import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import { Frame } from '../Frame'


export function Layout({
    getProfileImage,
    navigateToWorkouts,
    playLast
}) {
    return (
        <Frame>
        <View style={styles.statusBar}>
            <View style={styles.container}>
                <View style={styles.containerTextoInicial}>
                    <Image style={styles.circle}
                        source={getProfileImage()} />
                </View>
                <View style={styles.usernameAndPosition}>
                    <Text style={styles.username}>Elina </Text>
                    <Text style={styles.username}># 1</Text>
                </View>
                <View style={styles.trophyAndRanking}>
                    <Text style={styles.username}>+ </Text>
                    <Text style={styles.username}>2450</Text>
                </View>
                <View style={styles.explanationMessage}>
                    <Text style={styles.explanationMessageText}>Resume your workouts, earn points and get to the top of the </Text>
                    <Text style={styles.explanationMessageYellow}>ranking</Text>
                    <Text style={styles.explanationMessageText}>!</Text>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={playLast}>
                    <Text style={styles.buttonText}>RESUME WORKOUT</Text>
                </TouchableOpacity>
                <Text style={styles.explanationMessageText}>or</Text>
                <Text
                    onPress={navigateToWorkouts}
                    style={styles.allWorkoutsText}>View all your workouts
                </Text>
            </View>
        </View>
        </Frame>
    )
}
