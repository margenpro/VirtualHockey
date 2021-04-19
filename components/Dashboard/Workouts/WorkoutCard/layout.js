import React from 'react';
import { Image, Text, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import card from '../../../../assets/images/card.png'

export function Layout({
    // size
    //screenHandler 
}) {
    return (
        <View>
            <Image
                style={styles.imagenTitulo}
                source={card}
            />
        </View>
    );
}
