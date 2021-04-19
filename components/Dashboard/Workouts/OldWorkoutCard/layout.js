import React from 'react';
import { Image, View } from 'react-native';
import styles from "./styles";
import oldCard from '../../../../assets/images/courseCard.png'

export function Layout({
    // size
    //screenHandler 
}) {
    return (
        <View>
            <Image
                style={styles.imagenTitulo}
                source={oldCard}
            />
        </View>
    );
}
