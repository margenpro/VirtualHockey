import React from 'react';
import { Image } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import card from '../../../../assets/images/card.png'

export function Layout({
    // size
    //screenHandler 
}) {
    return (
        <Image
            source={card}
        // style={styles.imagenTitulo}
        >
        </Image>
    );
}
