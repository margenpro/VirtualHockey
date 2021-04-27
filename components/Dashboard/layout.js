import React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
// import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import { Frame } from '../Frame'
import Ionicons from 'react-native-vector-icons/Ionicons';



export function Layout({
    getProfileImage,
    navigateToWorkouts,
    navigateToVideo,
    userName,
    userPoints
}) {
    return (
        <Frame>
        <View style={styles.statusBar}>
            <View style={styles.container}>
                <View style={styles.containerImage}>
                    <Image style={styles.circle}
                        source={getProfileImage()} />
                </View>
                <View style={styles.usernameAndPosition}>
                    <Text style={styles.username}>{userName} </Text>
                    <Text style={styles.usernameYellow}>#1</Text>
                </View>
                <View style={styles.trophyAndRanking}>
                    {/* <Text style={styles.username}>+ </Text> */}
                    <Text style={styles.username}> <Ionicons name={'trophy'} size={45} color={'#E9D41B'} /> {userPoints}</Text>
                </View>
                <View style={styles.explanationMessage}>
                    <Text style={styles.explanationMessageText}>Resume your workouts, earn points and get to the top of the
                        <Text style={styles.explanationMessageYellow}> ranking 
                            <Text style={styles.explanationMessageText}>!</Text>
                        </Text> 
                    </Text>
                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={navigateToVideo}>
                    <Text style={styles.buttonText}>RESUME WORKOUT</Text>
                </TouchableOpacity>
                <Text style={styles.explanationMessageTextOr}>or</Text>
                <Text
                    onPress={navigateToWorkouts}
                    style={styles.allWorkoutsText}>View all your workouts
                </Text>
            </View>
        </View>
        </Frame>
    )
}
