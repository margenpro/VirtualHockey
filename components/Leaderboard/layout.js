import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import styles from "./styles";
// import imagenTitulo from '../../assets/imagenTitulo.png'
import { Frame } from "../Frame";
import Leaderboard from "react-native-leaderboard";
import fontStyles from "../../assets/styles/fontStyles";
import { Item } from "./Item/container";

export function Layout({ users }) {
  return (
    <Frame>
      <ScrollView style={styles.scrollContainer}>
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
            <Text style={fontStyles.usernameRanking}>
              {users.podium[1].username}
            </Text>
            <Text style={fontStyles.pointsRanking}>
              {users.podium[1].points}
            </Text>
          </View>
          <View style={styles.centerCircleContainer}>
            <Text style={fontStyles.positionNumber}>1</Text>
            <Image
              style={styles.circle}
              source={{
                uri: "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270",
              }}
            />
            <Text style={fontStyles.usernameRanking}>
              {users.podium[0].username}
            </Text>
            <Text style={fontStyles.pointsRanking}>
              {users.podium[0].points}
            </Text>
          </View>
          <View style={styles.rightCircleContainer}>
            <Text style={fontStyles.positionNumber}>3</Text>
            <Image
              style={styles.circleSmall}
              source={{
                uri: "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270",
              }}
            />
            <Text style={fontStyles.usernameRanking}>
              {users.podium[2].username}
            </Text>
            <Text style={fontStyles.pointsRanking}>
              {users.podium[2].points}
            </Text>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          {users.others.map((user, index) => (
            <Item key={user.username} user={user} position={index} />
          ))}
        </View>
      </ScrollView>
    </Frame>
  );
}
