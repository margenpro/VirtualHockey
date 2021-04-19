import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import styles from './styles'
import { WorkoutCard } from './WorkoutCard/container'
import { OldWorkoutCard } from './OldWorkoutCard/container'

import { ScrollView } from 'react-native-gesture-handler';

export function Layout({
    // size
    //screenHandler 
}) {
    return (
        <LinearGradient
            style={styles.container}
            colors={["rgba(2, 28, 59, 1)", "rgba(19, 38, 135, 1)"]}>
            <View
                style={styles.superior}>
                <Text style={styles.username}>Hello,</Text>
                <Text style={styles.username}>Elina </Text>
                <Text style={styles.username}>2450</Text>
            </View>
            <View
                style={styles.middle}>
                <WorkoutCard />
            </View>
            <View
                style={styles.inferior}>
                <Text style={styles.username}>Previous Workouts</Text>
                <ScrollView horizontal={true}><OldWorkoutCard /><OldWorkoutCard /><OldWorkoutCard /></ScrollView>
            </View>
        </LinearGradient >
    );
}
