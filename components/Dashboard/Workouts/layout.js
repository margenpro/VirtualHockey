import React from 'react';
import { Image, View, Text } from 'react-native';
// import { LinearGradient } from "expo-linear-gradient";
import styles from './styles'
import { WorkoutCard } from './WorkoutCard/container'
import { OldWorkoutCard } from './OldWorkoutCard/container'
import { Frame } from '../../Frame'
import { ScrollView } from 'react-native-gesture-handler';
import trophy from '../../../assets/images/trophy.png'


export function Layout({
    // size
    //screenHandler 
}) {
    return (
        <Frame>
            <View style={styles.container}>
                <View
                    style={styles.superior}>
                        <View>
                    <Text style={styles.username}>Hello,</Text>
                    <Text style={styles.username}>Elina </Text>
                    </View>
                    <View>
                    <Image
                        source={trophy}
                        style={styles.trophy}>
                    </Image>
                    <Text style={styles.username}>2450</Text>
                    </View>
                </View>
                <View
                    style={styles.middle}>
                    <WorkoutCard />
                </View>
                <View
                    style={styles.inferior}>
                    <Text style={styles.previousWorkouts}>Previous Workouts</Text>
                    <ScrollView horizontal={true}><OldWorkoutCard /><OldWorkoutCard /><OldWorkoutCard /></ScrollView>
                </View>
            </View>
        </Frame>
    );
}
