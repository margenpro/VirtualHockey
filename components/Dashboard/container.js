import React, { useState, useEffect } from "react";
import { Image, View } from "react-native";
import { Layout } from "./layout";
import profileImage from '../../assets/images/user.jpg'
import WorkoutsStack from '../../routes/WorkoutsStack'
import "firebase/auth";
import { getStorage } from "../../firebase";
import { useFirebaseApp } from "reactfire";


export function Dashboard({ navigation }) {

    const storage = getStorage();
    const firebase = useFirebaseApp();
    const storageRef = storage.ref();
  
    const db = firebase.firestore()

    const navigateToWorkouts = () => {
        console.log("voy a navegar")
        navigation.navigate("Workouts")
    }

    const getProfileImage = () => {
        return profileImage
    }

    const playLast = async () => {
        try {
            let user = firebase.auth().currentUser
            let doc = await db.collection("users").doc(user.uid).get()
            getVideo(doc.data().lastVideoWatched)
        } catch (error) {
            console.log(error)
        }
    }

    const getVideo = async (id) => {
        try {
            let vid = await db.collection("videos").doc(id).get()
            vid = vid.data()
            console.log(vid)
        } catch (error) {
            
        }
    }

    return (
        // <WorkoutsStack />
            <Layout
                getProfileImage={getProfileImage}
                navigateToWorkouts={navigateToWorkouts}
                playLast={playLast}
            />
    );
}
