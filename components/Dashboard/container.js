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
import { setterUserAction } from '../../redux/actions/userActions'


const Dashboard = ({ navigation, user, videos, setUserRanking }) => {
    // const { _user, _setUser } = useContext(UserContext)

    /*  const storage = getStorage();
     const storageRef = storage.ref(); */

    const firebase = useFirebaseApp();
    const db = firebase.firestore()

    const [userName, setUserName] = useState("");
    const [userPoints, setUserPoints] = useState("");
    const [userPosition, setUserPosition] = useState("");


    const navigateToWorkouts = () => {
        console.log("voy a navegar")
        navigation.navigate("Workouts")
    }

    const navigateToVideo = async () => {
        const url = await getNextUrl()
        console.log("nos fuimos al video: " + url)
        navigation.navigate("Video", {
            url
        })
    }

    const getProfileImage = () => {
        return profileImage
    }
    const getNextUrl = async () => {
        try {
            //Busqueda por campo id
            let _user = firebase.auth().currentUser
            let doc = await db.collection("users").doc(_user.uid).get()
            console.log(doc.data())
            let lastVidId = (+doc.data().lastVideoWatched + +1).toString();
            console.log("lvid " + typeof (lastVidId))
            let video = await getVideo(lastVidId) //Siguiente del ultimo visto
            console.log("devuelvo url " + video.videoUrl)
            return video.videoUrl
        } catch (error) {
            console.log(error)
        }
    }

    const getVideo = async (id) => {
        try {
            let vid = await db.collection("videos").doc(id).get()
            let data = vid.data()
            console.log("devuelvo vid: " + data)
            return data
        } catch (error) {

        }
    }

    useEffect(() => {
        const getCurrentUserData = async () => {
            try {
                setUserName(user.username)
                setUserPoints(user.points)
                await calculationRanking(user.points) 
            } catch (error) {
                throw new Error(error.message)
            }
        }
        getCurrentUserData()
    }, []);

    const calculationRanking = async (points) => {
        try {
            db.collection('users').where('points', '>', points).onSnapshot(snap => {
                const size = snap.size + 1
                setUserPosition(size)
                setUserRanking({position: size})
            })
        } catch (e) {
            console.log(e.message)
        }
    }

    return (
        // <WorkoutsStack />
        <>
            {console.log("imprimimo lo videoh" + videos)}
            {console.log(user)}
            <Layout
                getProfileImage={getProfileImage}
                navigateToWorkouts={navigateToWorkouts}
                userName={userName}
                userPoints={userPoints}
                userPosition={userPosition}
                navigateToVideo={navigateToVideo}
            >
            </Layout>
        </>
    );
}


const mapStateToProps = state => ({
    user: state.userReducer.user,
    videos: state.videosReducer.videos
})

const actionCreators = {
    setUserRanking: setterUserAction,
}

export default connect(mapStateToProps, actionCreators)(Dashboard)