import React from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import commonStyles from "../../../assets/styles/commonStyles"
import fontStyles from "../../../assets/styles/fontStyles";
import styles from "./styles";

export function Layout({ user, position }) {
    return (
        <View style={styles.rowContainer}>
            <Text style={fontStyles.positionNumber}>{position}</Text>
            <Image
                style={styles.avatar}
                source={{
                    uri: "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270",
                }}
            />
            <Text style={[fontStyles.usernameRanking, styles.username]}>{user.username}</Text>
            <Text style={[fontStyles.pointsRanking, styles.points]}>{user.points}</Text>
        </View>
    )
}