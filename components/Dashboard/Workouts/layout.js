import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import styles from './styles'
import { WorkoutCard } from './WorkoutCard/container'
import { ScrollView } from 'react-native-gesture-handler';

export function Layout({
    // size
    //screenHandler 
}) {
    return (
        <LinearGradient
            style={styles.container}
            colors={["rgba(2, 28, 59, 1)", "rgba(19, 38, 135, 1)"]}>
            <Text style={styles.username}>Elina </Text>
            <Text style={styles.username}># 1</Text>
            <WorkoutCard />
            <ScrollView horizontal={true}><WorkoutCard /><WorkoutCard /><WorkoutCard /></ScrollView>
        </LinearGradient >
    );
}
