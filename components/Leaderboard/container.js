import React, { useState, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Layout } from "./layout";
import { getFirestore } from "../../firebase";
import { Alert, ActivityIndicator } from "react-native";

export function Leaderboard({ navigation }) {
  const db = getFirestore();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      getAllUsers();
    }, [])
  );

  const getAllUsers = async () => {
    try {
      console.log("something");
      let userList = [];
      let users = await db
        .collection("users")
        .orderBy("points", "desc")
        .limit(10)
        .get();

      users.forEach((usr) => {
        userList.push(usr.data());
      });
      console.log("something 2");
      console.log(userList.slice(0, 2));
      console.log(userList.slice(2));
      setUsers({
        podium: userList.slice(0, 3),
        others: userList.slice(3),
      });
      setLoading(false);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <React.Fragment>
      {!loading ? <Layout users={users} /> : <ActivityIndicator size="large" />}
    </React.Fragment>
  );
}
