import React, { useState, useEffect } from "react";
import { Image, View } from "react-native";
import { Layout } from "./layout";
import profileImage from '../../assets/images/user.jpg'
import WorkoutsStack from '../../routes/WorkoutsStack'


export function Dashboard({ navigation }) {

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
            />
    );
}
