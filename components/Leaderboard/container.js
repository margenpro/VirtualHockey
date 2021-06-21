import React, { useState, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Layout } from "./layout";
import { getFirestore, getStorage } from "../../firebase";
import { ActivityIndicator } from "react-native";

export function Leaderboard({ navigation }) {
  const db = getFirestore();
  const storage = getStorage();
  const storageRef = storage.ref();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [podiumAvatars, setPodiumAvatars] = useState([]);
  const [defaultAvatar, setDefaultAvatar] = useState();
  const timeout = 3;
  useFocusEffect(
    React.useCallback(() => {
      getAllUsers();
      willShow();
    }, [])
  );
  const willShow = () => {
    setTimeout(() => {
      setLoading(false);
    }, timeout * 1000);
  };

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
      setUsers({
        podium: userList.slice(0, 3),
        others: userList.slice(3),
      });
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getDefaultAvatar();
    if (users.podium) {
      getPodiumAvatars();
    }
  }, [users.podium]);

  const getDefaultAvatar = async () => {
    try {
      let res = await storageRef.child("default/avatar.png").getDownloadURL();
      setDefaultAvatar(res);
    } catch (error) {
      console.log(error);
    }
  };

  const getPodiumAvatars = async () => {
    try {
      let urls = [];
      let usrs = [];
      await users.podium.map((u) => usrs.push(u));
      for (let i = 0; i < usrs.length; i++) {
        let res = await storageRef
          .child("images/avatars/" + usrs[i].username + ".png")
          .getDownloadURL();
        let url = res ? res : defaultAvatar;
        urls.push(url);
      }
      setPodiumAvatars(urls);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout
      users={users}
      podiumAvatars={podiumAvatars}
      defaultAvatar={defaultAvatar}
      loading={loading}
    />
  );
}
