import React, { Children } from "react";
import { Text, View, Platform, StatusBar, StyleSheet } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

export function Frame(props) {

    const color1 = "rgba(2, 28, 59, 1)"
    const color2 = "rgba(19, 38, 135, 1)"

    return (
        <LinearGradient
            style={styles.gradient}
            colors={[color1, color2]}
        >
            <View style={styles.statusBar}>
                {props.children}
            </View>
        </LinearGradient>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    statusBar: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    gradient: {
        flex: 1,
        margin: 0,
    },
});
