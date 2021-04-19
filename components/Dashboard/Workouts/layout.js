import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import styles from './styles'
import { WorkoutCard } from './WorkoutCard/container'

export function Layout({
    // size
    //screenHandler 
}) {
    return (
        <LinearGradient
            style={styles.container}
            colors={["rgba(2, 28, 59, 1)", "rgba(19, 38, 135, 1)"]}>
            <View style={styles.container}>
                <View style={styles.usernameAndPosition}>
                    <Text style={styles.username}>Elina </Text>
                    <Text style={styles.username}># 1</Text>
                </View>
            </View>
            <WorkoutCard />
        </LinearGradient >
    );
}
