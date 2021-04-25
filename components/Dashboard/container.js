import React, { useState, useEffect, useContext } from "react";
// import { Image, View } from "react-native";
import { Layout } from "./layout";
import profileImage from '../../assets/images/user.jpg'
// import WorkoutsStack from '../../routes/WorkoutsStack'
import "firebase/auth";
// import { getStorage } from "../../firebase";
import { useFirebaseApp } from "reactfire";
// import { UserContext } from '../../context/userContext'
import { connect } from 'react-redux'


const Dashboard = ({ navigation, user }) => {
    // const { _user, _setUser } = useContext(UserContext)

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

    const navigateToVideo = () => {
        console.log("voy a ver el video")
        navigation.navigate("Video")
    }

    const getProfileImage = () => {
        return profileImage
    }

    const playLast = async () => {
        try {
            let _user = firebase.auth().currentUser
            let doc = await db.collection("users").doc(_user.uid).get()
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
                let _user = firebase.auth().currentUser
                let doc = await db.collection("users").doc(_user.uid).get()
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
        <>
            {console.log(user)}
            <Layout
                getProfileImage={getProfileImage}
                navigateToWorkouts={navigateToWorkouts}
                playLast={playLast}
                userName={userName}
                userPoints={userPoints}
                navigateToVideo={navigateToVideo}
            >
            </Layout>
        </>
    );
}
const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, {})(Dashboard)