import React, { useState, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Layout } from "./layout";
import { getFirestore } from "../../firebase";
import { Alert, ActivityIndicator } from "react-native";

export function Leaderboard({ navigation }) {
  const db = getFirestore();
  const [users, setUsers] = useState(undefined);

  useFocusEffect(
    React.useCallback(() => {
      getAllUsers();
    }, [])
  );

  const getAllUsers = async () => {
    try {
      let userList = [];
      let users = await db
        .collection("users")
        .orderBy("points", "desc")
        .limit(10)
        .get();

      users.forEach((usr) => {
        userList.push(usr.data());
      });
      setUsers(userList);
    } catch (error) {
      alert(error);
    }
  };

  const rowPressHandler = (item, index) => {
    Alert.alert(item.username, "Puntos acumulados: " + item.points, [
      {
        text: "OK",
      },
    ]);
  };

  return (
    <React.Fragment>
      {users ? 
        <Layout users={users} rowPressHandler={rowPressHandler} />
      :
        <ActivityIndicator size="large"/>     
    }
    </React.Fragment>
  )
}
