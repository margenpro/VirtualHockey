import React, { useState, useEffect, useContext } from "react";
import { Image, View } from "react-native";
import { Layout } from "./layout";
import profileImage from '../../assets/images/user.jpg'
import WorkoutsStack from '../../routes/WorkoutsStack'
import "firebase/auth";
import { getStorage } from "../../firebase";
import { useFirebaseApp } from "reactfire";
import { UserContext } from '../../context/userContext'


export function Dashboard({ navigation }) {
    const { user, setUser } = useContext(UserContext)

   /*  const storage = getStorage();
    const storageRef = storage.ref(); */
    
    const firebase = useFirebaseApp();
    const db = firebase.firestore()

    const [userName, setUserName] = useState("");
    const [userPoints, setUserPoints] = useState("");


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


    useEffect(() => {
        const getCurrentUserData = async () => {
            try {
                let user = firebase.auth().currentUser
                let doc = await db.collection("users").doc(user.uid).get()
                let data = doc.data()
                console.log(data)
                setUserName(data.username)
                setUserPoints(data.points)
            } catch (error) {
                throw new Error(error.message)
            }
        }

        getCurrentUserData()

    }, []);

    return (
        // <WorkoutsStack />
        <Layout
            getProfileImage={getProfileImage}
            navigateToWorkouts={navigateToWorkouts}
            playLast={playLast}
            userName={userName}
            userPoints={userPoints}
        >
        </Layout>
    );
}
