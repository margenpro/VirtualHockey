import React, { useState, useEffect } from "react";
import { Layout } from "./layout";
import { getFirestore } from '../../firebase'
import { Alert } from "react-native";
//import { connect } from "react-redux";
//import { setterUserAction } from "../../redux/actions/userActions"

export function Leaderboard({ navigation }) {

    const db = getFirestore()
    const [users, setUsers] = useState(undefined)

    useEffect(() => {
        const getAllUsers = async () => {
            try {
                let userList = [];
                let users = await db.collection("users").get();

                users.forEach((usr) => {
                    userList.push(usr.data());
                });
                setUsers(userList)
            } catch (error) {
                alert(error);
            }
        }
        getAllUsers()
    }, [users])

    const rowPressHandler = (item, index) => {
        Alert.alert(
            item.username,
            "Puntos acumulados: " + item.points,
            [
                {
                    text: "OK",
                }
            ],
        )
    }


    return (
        <>
            {users && (
                <Layout
                    users={users}
                    rowPressHandler={rowPressHandler}
                />
            )}

        </>
    );
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