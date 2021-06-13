import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import styles from "./styles";
// import imagenTitulo from '../../assets/imagenTitulo.png'
import { Frame } from "../Frame";
import Leaderboard from "react-native-leaderboard";
import fontStyles from "../../assets/styles/fontStyles";

export function Layout({ users, rowPressHandler }) {
  return (
    <Frame>
      <ScrollView>
        <View style={styles.titleContainer}>
          <Text style={fontStyles.leaderboardTitle}>Leaderboard</Text>
        </View>
        <View style={styles.podiumContainer}>
          <View style={styles.leftCircleContainer}>
            <Text style={fontStyles.positionNumber}>2</Text>
            <Image
              style={styles.circleSmall}
              source={{
                uri: "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270",
              }}
            />
            <Text style={fontStyles.usernameRanking}>{users[1].username}</Text>
            <Text style={fontStyles.pointsRanking}>{users[1].points}</Text>
          </View>
          <View style={styles.centerCircleContainer}>
            <Text style={fontStyles.positionNumber}>1</Text>
            <Image
              style={styles.circle}
              source={{
                uri: "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270",
              }}
            />
            <Text style={fontStyles.usernameRanking}>{users[0].username}</Text>
            <Text style={fontStyles.pointsRanking}>{users[0].points}</Text>
          </View>
          <View style={styles.rightCircleContainer}>
            <Text style={fontStyles.positionNumber}>3</Text>
            <Image
              style={styles.circleSmall}
              source={{
                uri: "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270",
              }}
            />
            <Text style={fontStyles.usernameRanking}>{users[2].username}</Text>
            <Text style={fontStyles.pointsRanking}>{users[2].points}</Text>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          {/* <Leaderboard
            data={users}
            sortBy="points"
            labelBy="username"
            onRowPress={(item, index) => rowPressHandler(item, index)}
          /> */}
        </View>
      </ScrollView>
    </Frame>
  );
}
