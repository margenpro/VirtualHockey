import React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
// import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import imagenTitulo from '../../assets/imagenTitulo.png'
import imagenVideo from '../../assets/imagenVideo.png'
import { Frame } from '../Frame'


export function Layout({
    // size
    //screenHandler 
}) {
    return (
        <Frame>
            <View style={styles.container}>
                <View style={styles.containerImagenTitulo}>
                    <Image
                        source={imagenTitulo}
                        style={styles.imagenTitulo}>
                    </Image>
                </View>
                <View style={styles.containerTextoInicial}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.celeste}>THIS IS THE Leaderboard</Text>
                    </View>
                </View>
            </View>
        </Frame>
    );
}
