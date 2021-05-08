import React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
// import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import { Frame } from '../Frame'
import Ionicons from 'react-native-vector-icons/Ionicons';
import commonStyles from '../../assets/styles/commonStyles'
import fontStyles from '../../assets/styles/fontStyles'
import { colorsPalette } from '../../assets/styles/colorsPalette'

export function Layout({
    getProfileImage,
    navigateToWorkouts,
    navigateToVideo,
    userName,
    userPosition,
    userPoints
}) {
    return (
        <Frame>
            <View style={[commonStyles.centeredAligned, commonStyles.layoutContainer]}>
                <View style={styles.containerImage}>
                    <Image style={styles.circle}
                        source={getProfileImage()} />
                </View>
                <View style={styles.usernameAndPosition}>
                    <Text style={styles.username}>{userName} </Text>
                    <Text style={styles.usernameYellow}>#{userPosition}</Text>
                </View>
                <View style={styles.trophyAndRanking}>
                    {/* <Text style={styles.username}>+ </Text> */}
                    <Text style={styles.username}> <Ionicons name={'trophy'} size={35} color={colorsPalette.colorFour} /> {userPoints}</Text>
                </View>
                <View style={styles.explanationMessage}>
                    <Text style={[fontStyles.regularText, styles.explanationMessageText]}>Resume your workouts, earn points and get to the top of the
                        <Text style={[fontStyles.regularText, styles.explanationMessageYellow]}> ranking
                            <Text style={styles.explanationMessageText}>!</Text>
                        </Text>
                    </Text>
                </View>

                <TouchableOpacity
                    style={commonStyles.actionButton}
                    onPress={navigateToVideo}>
                    <Text style={fontStyles.buttonText}>RESUME WORKOUT</Text>
                </TouchableOpacity>
                <View style={{ marginBottom: 10 }}><Text style={[fontStyles.regularText, styles.explanationMessageText]}>or</Text>
                </View>
                <Text
                    onPress={navigateToWorkouts}
                    style={fontStyles.footerText}>View all your workouts
                </Text>
            </View>
        </Frame>
    )
}
