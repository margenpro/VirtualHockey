import React, { useState, useEffect, useContext } from "react";
import { Image, View } from "react-native";
import { Layout } from "./layout";
import profileImage from '../../assets/images/user.jpg'
import WorkoutsStack from '../../routes/WorkoutsStack'
import { UserContext } from '../../context/userContext'

export function Dashboard({ navigation }) {
    const { user, setUser } = useContext(UserContext)

    const navigateToWorkouts = () => {
        console.log("voy a navegar")
        navigation.navigate("Workouts")
    }

    const getProfileImage = () => {
        return profileImage
    }

    return (
        // <WorkoutsStack />

        <Layout
            getProfileImage={getProfileImage}
            navigateToWorkouts={navigateToWorkouts}
        >
            {user && console.log(user.test)}
        </Layout>
    );
}
