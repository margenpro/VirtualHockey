import React, { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Layout } from "./layout";
import { getFirestore } from "../../firebase";
import { Alert } from "react-native";
//import { connect } from "react-redux";
//import { setterUserAction } from "../../redux/actions/userActions"

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
        .limit(9)
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

  return <Layout users={users} rowPressHandler={rowPressHandler} />;
}
/*
const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
    };
};

const actionCreators = {
    setUser: setterUserAction,
};

export default connect(mapStateToProps, actionCreators)(Leaderboard);
*/
