import React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import styles from "./styles";
import imagenTitulo from '../../assets/imagenTitulo.png'
import { Frame } from '../Frame'
import Leaderboard from 'react-native-leaderboard'


export function Layout({
    users,
    rowPressHandler
}) {
    return (
        <Frame>
            <Leaderboard
                data={users}
                sortBy='points'
                labelBy='username'
                onRowPress={(item,index)=>rowPressHandler(item,index)}
            />
            {/*
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
            */}
        </Frame>
    );
}
