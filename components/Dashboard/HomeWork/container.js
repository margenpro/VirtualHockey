import React, { useState, useEffect, useContext } from "react";
import { Layout } from "./layout";
import profileImage from '../../../assets/images/user.jpg'
import "firebase/auth";
import { firestore, useFirebaseApp } from "reactfire";
import { connect } from 'react-redux'
import { setterUserAction } from '../../../redux/actions/userActions'

const HomeWork = ({ navigation, setvideoShow, user, videos, setUserRanking }) => {
    // const { _user, _setUser } = useContext(UserContext)

    /*  const storage = getStorage();
     const storageRef = storage.ref(); */

    const firebase = useFirebaseApp();
    const db = firebase.firestore()

    const [userName, setUserName] = useState("");
    const [userPoints, setUserPoints] = useState("");
    const [userPosition, setUserPosition] = useState("");

    const navigateToWorkouts = () => {
        navigation.navigate("Workouts")
    }

    const getProfileImage = () => {
        return profileImage
    }
    const getNextUrl = async () => {
        try {
            //Busqueda por campo id
            let _user = firebase.auth().currentUser
            let doc = await db.collection("users").doc(_user.uid).get()
            let lastVidId = (+doc.data().lastVideoWatched + +1).toString();
            let video = await getVideo(lastVidId) //Siguiente del ultimo visto
            return video.videoUrl
        } catch (error) {
            console.log(error)
        }
    }

    const getVideo = async (id) => {
        try {
            let vid = await db.collection("videos").doc(id).get()
            let data = vid.data()
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
                setUserRanking({ position: size })
            })
        } catch (e) {
            console.log(e.message)
        }
    }


    return (
        // <WorkoutsStack />
        <>
            <Layout
                getProfileImage={getProfileImage}
                navigateToWorkouts={navigateToWorkouts}
                userName={userName}
                userPoints={userPoints}
                userPosition={userPosition}
                setvideoShow={setvideoShow}
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

export default connect(mapStateToProps, actionCreators)(HomeWork)