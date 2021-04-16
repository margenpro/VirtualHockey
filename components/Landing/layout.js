import React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";

import imagenTitulo from '../../assets/imagenTitulo.png'
import imagenVideo from '../../assets/imagenVideo.png'

export function Layout({
    // size
    //screenHandler 
}) {
    return (
        <ScrollView style={styles.scroll}>
            <LinearGradient
                style={styles.container}
                colors={["rgba(2, 28, 59, 1)", "rgba(19, 38, 135, 1)"]}
            >
                <View style={styles.container}>

                    <View style={styles.containerImagenTitulo}>
                        <Image
                            source={imagenTitulo}
                            style={styles.imagenTitulo}
                        >
                        </Image>
                    </View>
                    <View style={styles.containerTextoInicial}>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.celeste}>TRAIN </Text>
                            <Text style={styles.blanco}>ANYWHERE...</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.celeste}>IMPROVE </Text>
                            <Text style={styles.blanco}>EVERYWHERE!</Text>
                        </View>

                    </View>
                    <View style={styles.containerimagenVideo}>
                        <Image
                            source={imagenVideo}
                            style={styles.imagenVideo}
                        >
                        </Image>
                    </View>
                    <TouchableOpacity
                        style={styles.boton}
                    >
                        <Text style={styles.textoBoton}> START YOUR FREE TRAIL </Text>
                    </TouchableOpacity>
                    <Text style={styles.textoChico}>TAKE A CLOSER LOOK</Text>

                    <Text style={styles.textoInfo}>
                        Improve your conditioning and hockey skills with an NHL Veteran. Virtual Hockey Coach, Michael Del Zotto, challenges you to train like a pro.
                    </Text>
                    <Text style={styles.textoChico}>GRIND AND EARN</Text>
                    <Text style={styles.textoInfo}>
                        Earn points for log in streaks, completed workouts and other achievements. Use points to enter draws for signed NHL merch or redeem them for other great prizes from our sponsors.
                    </Text>
                    <Text style={styles.textoChico}>ACHIEVEMENT REWARDS</Text>
                    <Text style={styles.textoInfo}>
                    Earn ribbons, medals and trophies for reaching milestones. Take control of the leaderboard and brag about it on social media! 
#virtualhockeybeast</Text>
                </View>
            </LinearGradient>
        </ScrollView>
    );
}
